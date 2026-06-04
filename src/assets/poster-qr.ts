type QrCell = boolean | null;

export type HydroQrMatrix = {
  modules: boolean[][];
  size: number;
  version: number;
};

type RsBlock = {
  dataCount: number;
  totalCount: number;
};

type HydroQrSvgOptions = {
  background?: string;
  foreground?: string;
  quietZone?: number;
};

const MODE_8BIT_BYTE = 1 << 2;
const ERROR_CORRECTION_M = 0;
const PAD_BYTES = [0xec, 0x11];
const MAX_VERSION = 40;

const RS_BLOCK_TABLE_M: number[][] = [
  [1, 26, 16],
  [1, 44, 28],
  [1, 70, 44],
  [2, 50, 32],
  [2, 67, 43],
  [4, 43, 27],
  [4, 49, 31],
  [2, 60, 38, 2, 61, 39],
  [3, 58, 36, 2, 59, 37],
  [4, 69, 43, 1, 70, 44],
  [1, 80, 50, 4, 81, 51],
  [6, 58, 36, 2, 59, 37],
  [8, 59, 37, 1, 60, 38],
  [4, 64, 40, 5, 65, 41],
  [5, 65, 41, 5, 66, 42],
  [7, 73, 45, 3, 74, 46],
  [10, 74, 46, 1, 75, 47],
  [9, 69, 43, 4, 70, 44],
  [3, 70, 44, 11, 71, 45],
  [3, 67, 41, 13, 68, 42],
  [17, 68, 42],
  [17, 74, 46],
  [4, 75, 47, 14, 76, 48],
  [6, 73, 45, 14, 74, 46],
  [8, 75, 47, 13, 76, 48],
  [19, 74, 46, 4, 75, 47],
  [22, 73, 45, 3, 74, 46],
  [3, 73, 45, 23, 74, 46],
  [21, 73, 45, 7, 74, 46],
  [19, 75, 47, 10, 76, 48],
  [2, 74, 46, 29, 75, 47],
  [10, 74, 46, 23, 75, 47],
  [14, 74, 46, 21, 75, 47],
  [14, 74, 46, 23, 75, 47],
  [12, 75, 47, 26, 76, 48],
  [6, 75, 47, 34, 76, 48],
  [29, 74, 46, 14, 75, 47],
  [13, 74, 46, 32, 75, 47],
  [40, 75, 47, 7, 76, 48],
  [18, 75, 47, 31, 76, 48],
];

const PATTERN_POSITION_TABLE: number[][] = [
  [],
  [6, 18],
  [6, 22],
  [6, 26],
  [6, 30],
  [6, 34],
  [6, 22, 38],
  [6, 24, 42],
  [6, 26, 46],
  [6, 28, 50],
  [6, 30, 54],
  [6, 32, 58],
  [6, 34, 62],
  [6, 26, 46, 66],
  [6, 26, 48, 70],
  [6, 26, 50, 74],
  [6, 30, 54, 78],
  [6, 30, 56, 82],
  [6, 30, 58, 86],
  [6, 34, 62, 90],
  [6, 28, 50, 72, 94],
  [6, 26, 50, 74, 98],
  [6, 30, 54, 78, 102],
  [6, 28, 54, 80, 106],
  [6, 32, 58, 84, 110],
  [6, 30, 58, 86, 114],
  [6, 34, 62, 90, 118],
  [6, 26, 50, 74, 98, 122],
  [6, 30, 54, 78, 102, 126],
  [6, 26, 52, 78, 104, 130],
  [6, 30, 56, 82, 108, 134],
  [6, 34, 60, 86, 112, 138],
  [6, 30, 58, 86, 114, 142],
  [6, 34, 62, 90, 118, 146],
  [6, 30, 54, 78, 102, 126, 150],
  [6, 24, 50, 76, 102, 128, 154],
  [6, 28, 54, 80, 106, 132, 158],
  [6, 32, 58, 84, 110, 136, 162],
  [6, 26, 54, 82, 110, 138, 166],
  [6, 30, 58, 86, 114, 142, 170],
];

const G15 = (1 << 10) | (1 << 8) | (1 << 5) | (1 << 4) | (1 << 2) | (1 << 1) | (1 << 0);
const G18 = (1 << 12) | (1 << 11) | (1 << 10) | (1 << 9) | (1 << 8) | (1 << 5) | (1 << 2) | (1 << 0);
const G15_MASK = (1 << 14) | (1 << 12) | (1 << 10) | (1 << 4) | (1 << 1);

class BitBuffer {
  readonly buffer: number[] = [];
  length = 0;

  put(value: number, length: number) {
    for (let index = 0; index < length; index += 1) {
      this.putBit(((value >>> (length - index - 1)) & 1) === 1);
    }
  }

  putBit(bit: boolean) {
    const bufferIndex = Math.floor(this.length / 8);
    if (this.buffer.length <= bufferIndex) {
      this.buffer.push(0);
    }
    if (bit) {
      this.buffer[bufferIndex] |= 0x80 >>> (this.length % 8);
    }
    this.length += 1;
  }
}

const EXP_TABLE = Array.from({ length: 256 }, () => 0);
const LOG_TABLE = Array.from({ length: 256 }, () => 0);

for (let index = 0; index < 8; index += 1) {
  EXP_TABLE[index] = 1 << index;
}
for (let index = 8; index < 256; index += 1) {
  EXP_TABLE[index] = EXP_TABLE[index - 4] ^ EXP_TABLE[index - 5] ^ EXP_TABLE[index - 6] ^ EXP_TABLE[index - 8];
}
for (let index = 0; index < 255; index += 1) {
  LOG_TABLE[EXP_TABLE[index]] = index;
}

function gfExp(value: number) {
  let normalized = value;
  while (normalized < 0) {
    normalized += 255;
  }
  while (normalized >= 256) {
    normalized -= 255;
  }
  return EXP_TABLE[normalized];
}

function gfLog(value: number) {
  if (value < 1) {
    throw new Error(`Invalid QR finite-field log input: ${value}`);
  }
  return LOG_TABLE[value];
}

function gfMultiply(left: number, right: number) {
  if (left === 0 || right === 0) {
    return 0;
  }
  return gfExp(gfLog(left) + gfLog(right));
}

function multiplyPolynomials(left: number[], right: number[]) {
  const result = Array.from({ length: left.length + right.length - 1 }, () => 0);

  left.forEach((leftValue, leftIndex) => {
    right.forEach((rightValue, rightIndex) => {
      result[leftIndex + rightIndex] ^= gfMultiply(leftValue, rightValue);
    });
  });

  return result;
}

function createErrorCorrectionPolynomial(length: number) {
  let polynomial = [1];

  for (let index = 0; index < length; index += 1) {
    polynomial = multiplyPolynomials(polynomial, [1, gfExp(index)]);
  }

  return polynomial;
}

function createErrorCorrectionBytes(data: number[], length: number) {
  const generator = createErrorCorrectionPolynomial(length);
  const buffer = [...data, ...Array.from({ length }, () => 0)];

  data.forEach((_, index) => {
    const factor = buffer[index];
    if (factor === 0) {
      return;
    }
    generator.forEach((value, generatorIndex) => {
      buffer[index + generatorIndex] ^= gfMultiply(value, factor);
    });
  });

  return buffer.slice(buffer.length - length);
}

function getRsBlocks(version: number) {
  const row = RS_BLOCK_TABLE_M[version - 1];
  if (!row) {
    throw new Error(`Unsupported QR version: ${version}`);
  }

  const blocks: RsBlock[] = [];
  for (let index = 0; index < row.length; index += 3) {
    const count = row[index];
    const totalCount = row[index + 1];
    const dataCount = row[index + 2];
    for (let blockIndex = 0; blockIndex < count; blockIndex += 1) {
      blocks.push({ dataCount, totalCount });
    }
  }
  return blocks;
}

function getLengthInBits(version: number) {
  return version < 10 ? 8 : 16;
}

function getTotalDataCount(version: number) {
  return getRsBlocks(version).reduce((total, block) => total + block.dataCount, 0);
}

function pickVersion(bytes: Uint8Array) {
  for (let version = 1; version <= MAX_VERSION; version += 1) {
    const requiredBits = 4 + getLengthInBits(version) + bytes.length * 8;
    if (requiredBits <= getTotalDataCount(version) * 8) {
      return version;
    }
  }

  throw new Error(`QR payload is too long for Hydro poster QR codes: ${bytes.length} bytes`);
}

function createDataBytes(bytes: Uint8Array, version: number) {
  const blocks = getRsBlocks(version);
  const totalDataCount = blocks.reduce((total, block) => total + block.dataCount, 0);
  const buffer = new BitBuffer();

  buffer.put(MODE_8BIT_BYTE, 4);
  buffer.put(bytes.length, getLengthInBits(version));
  bytes.forEach((byte) => buffer.put(byte, 8));

  if (buffer.length > totalDataCount * 8) {
    throw new Error(`QR data overflow: ${buffer.length} > ${totalDataCount * 8}`);
  }

  if (buffer.length + 4 <= totalDataCount * 8) {
    buffer.put(0, 4);
  }

  while (buffer.length % 8 !== 0) {
    buffer.putBit(false);
  }

  let padIndex = 0;
  while (buffer.length < totalDataCount * 8) {
    buffer.put(PAD_BYTES[padIndex % PAD_BYTES.length], 8);
    padIndex += 1;
  }

  return createInterleavedBytes(buffer.buffer, blocks);
}

function createInterleavedBytes(buffer: number[], blocks: RsBlock[]) {
  let offset = 0;
  let maxDataCount = 0;
  let maxEcCount = 0;
  const dataBlocks: number[][] = [];
  const ecBlocks: number[][] = [];

  blocks.forEach((block) => {
    const data = buffer.slice(offset, offset + block.dataCount);
    const ecCount = block.totalCount - block.dataCount;
    offset += block.dataCount;
    maxDataCount = Math.max(maxDataCount, block.dataCount);
    maxEcCount = Math.max(maxEcCount, ecCount);
    dataBlocks.push(data);
    ecBlocks.push(createErrorCorrectionBytes(data, ecCount));
  });

  const result: number[] = [];
  for (let index = 0; index < maxDataCount; index += 1) {
    dataBlocks.forEach((block) => {
      if (index < block.length) {
        result.push(block[index]);
      }
    });
  }

  for (let index = 0; index < maxEcCount; index += 1) {
    ecBlocks.forEach((block) => {
      if (index < block.length) {
        result.push(block[index]);
      }
    });
  }

  return result;
}

function getBchDigit(data: number) {
  let digit = 0;
  let value = data;
  while (value !== 0) {
    digit += 1;
    value >>>= 1;
  }
  return digit;
}

function getBchTypeInfo(data: number) {
  let value = data << 10;
  while (getBchDigit(value) - getBchDigit(G15) >= 0) {
    value ^= G15 << (getBchDigit(value) - getBchDigit(G15));
  }
  return ((data << 10) | value) ^ G15_MASK;
}

function getBchTypeNumber(data: number) {
  let value = data << 12;
  while (getBchDigit(value) - getBchDigit(G18) >= 0) {
    value ^= G18 << (getBchDigit(value) - getBchDigit(G18));
  }
  return (data << 12) | value;
}

function getMask(maskPattern: number, row: number, col: number) {
  switch (maskPattern) {
    case 0:
      return (row + col) % 2 === 0;
    case 1:
      return row % 2 === 0;
    case 2:
      return col % 3 === 0;
    case 3:
      return (row + col) % 3 === 0;
    case 4:
      return (Math.floor(row / 2) + Math.floor(col / 3)) % 2 === 0;
    case 5:
      return ((row * col) % 2) + ((row * col) % 3) === 0;
    case 6:
      return (((row * col) % 2) + ((row * col) % 3)) % 2 === 0;
    case 7:
      return (((row * col) % 3) + ((row + col) % 2)) % 2 === 0;
    default:
      throw new Error(`Invalid QR mask pattern: ${maskPattern}`);
  }
}

function createEmptyModules(size: number) {
  return Array.from({ length: size }, () => Array.from({ length: size }, () => null as QrCell));
}

function setupPositionProbePattern(modules: QrCell[][], row: number, col: number) {
  const moduleCount = modules.length;

  for (let r = -1; r <= 7; r += 1) {
    if (row + r <= -1 || moduleCount <= row + r) {
      continue;
    }

    for (let c = -1; c <= 7; c += 1) {
      if (col + c <= -1 || moduleCount <= col + c) {
        continue;
      }

      modules[row + r][col + c] =
        (0 <= r && r <= 6 && (c === 0 || c === 6)) ||
        (0 <= c && c <= 6 && (r === 0 || r === 6)) ||
        (2 <= r && r <= 4 && 2 <= c && c <= 4);
    }
  }
}

function setupPositionAdjustPattern(modules: QrCell[][], version: number) {
  const positions = PATTERN_POSITION_TABLE[version - 1] || [];

  positions.forEach((row) => {
    positions.forEach((col) => {
      if (modules[row][col] !== null) {
        return;
      }

      for (let r = -2; r <= 2; r += 1) {
        for (let c = -2; c <= 2; c += 1) {
          modules[row + r][col + c] = Math.abs(r) === 2 || Math.abs(c) === 2 || (r === 0 && c === 0);
        }
      }
    });
  });
}

function setupTimingPattern(modules: QrCell[][]) {
  const moduleCount = modules.length;

  for (let row = 8; row < moduleCount - 8; row += 1) {
    if (modules[row][6] === null) {
      modules[row][6] = row % 2 === 0;
    }
  }

  for (let col = 8; col < moduleCount - 8; col += 1) {
    if (modules[6][col] === null) {
      modules[6][col] = col % 2 === 0;
    }
  }
}

function setupTypeInfo(modules: QrCell[][], test: boolean, maskPattern: number) {
  const moduleCount = modules.length;
  const bits = getBchTypeInfo((ERROR_CORRECTION_M << 3) | maskPattern);

  for (let index = 0; index < 15; index += 1) {
    const dark = !test && ((bits >> index) & 1) === 1;
    if (index < 6) {
      modules[index][8] = dark;
    } else if (index < 8) {
      modules[index + 1][8] = dark;
    } else {
      modules[moduleCount - 15 + index][8] = dark;
    }
  }

  for (let index = 0; index < 15; index += 1) {
    const dark = !test && ((bits >> index) & 1) === 1;
    if (index < 8) {
      modules[8][moduleCount - index - 1] = dark;
    } else if (index < 9) {
      modules[8][15 - index] = dark;
    } else {
      modules[8][15 - index - 1] = dark;
    }
  }

  modules[moduleCount - 8][8] = !test;
}

function setupTypeNumber(modules: QrCell[][], version: number, test: boolean) {
  const moduleCount = modules.length;
  const bits = getBchTypeNumber(version);

  for (let index = 0; index < 18; index += 1) {
    const dark = !test && ((bits >> index) & 1) === 1;
    modules[Math.floor(index / 3)][(index % 3) + moduleCount - 11] = dark;
    modules[(index % 3) + moduleCount - 11][Math.floor(index / 3)] = dark;
  }
}

function mapData(modules: QrCell[][], data: number[], maskPattern: number) {
  const moduleCount = modules.length;
  let inc = -1;
  let row = moduleCount - 1;
  let bitIndex = 7;
  let byteIndex = 0;

  for (let col = moduleCount - 1; col > 0; col -= 2) {
    if (col === 6) {
      col -= 1;
    }

    for (;;) {
      for (let c = 0; c < 2; c += 1) {
        if (modules[row][col - c] !== null) {
          continue;
        }

        let dark = false;
        if (byteIndex < data.length) {
          dark = ((data[byteIndex] >>> bitIndex) & 1) === 1;
        }
        if (getMask(maskPattern, row, col - c)) {
          dark = !dark;
        }
        modules[row][col - c] = dark;

        bitIndex -= 1;
        if (bitIndex === -1) {
          byteIndex += 1;
          bitIndex = 7;
        }
      }

      row += inc;
      if (row < 0 || moduleCount <= row) {
        row -= inc;
        inc = -inc;
        break;
      }
    }
  }
}

function booleanModules(modules: QrCell[][]) {
  return modules.map((row) => row.map((cell) => cell === true));
}

function makeModules(version: number, data: number[], maskPattern: number, test: boolean) {
  const moduleCount = version * 4 + 17;
  const modules = createEmptyModules(moduleCount);

  setupPositionProbePattern(modules, 0, 0);
  setupPositionProbePattern(modules, moduleCount - 7, 0);
  setupPositionProbePattern(modules, 0, moduleCount - 7);
  setupPositionAdjustPattern(modules, version);
  setupTimingPattern(modules);
  setupTypeInfo(modules, test, maskPattern);
  if (version >= 7) {
    setupTypeNumber(modules, version, test);
  }
  mapData(modules, data, maskPattern);

  return booleanModules(modules);
}

function getLostPoint(modules: boolean[][]) {
  const moduleCount = modules.length;
  let lostPoint = 0;

  for (let row = 0; row < moduleCount; row += 1) {
    for (let col = 0; col < moduleCount; col += 1) {
      let sameCount = 0;
      const dark = modules[row][col];

      for (let r = -1; r <= 1; r += 1) {
        if (row + r < 0 || moduleCount <= row + r) {
          continue;
        }
        for (let c = -1; c <= 1; c += 1) {
          if (col + c < 0 || moduleCount <= col + c || (r === 0 && c === 0)) {
            continue;
          }
          if (dark === modules[row + r][col + c]) {
            sameCount += 1;
          }
        }
      }

      if (sameCount > 5) {
        lostPoint += 3 + sameCount - 5;
      }
    }
  }

  for (let row = 0; row < moduleCount - 1; row += 1) {
    for (let col = 0; col < moduleCount - 1; col += 1) {
      const count =
        Number(modules[row][col]) +
        Number(modules[row + 1][col]) +
        Number(modules[row][col + 1]) +
        Number(modules[row + 1][col + 1]);
      if (count === 0 || count === 4) {
        lostPoint += 3;
      }
    }
  }

  for (let row = 0; row < moduleCount; row += 1) {
    for (let col = 0; col < moduleCount - 6; col += 1) {
      if (
        modules[row][col] &&
        !modules[row][col + 1] &&
        modules[row][col + 2] &&
        modules[row][col + 3] &&
        modules[row][col + 4] &&
        !modules[row][col + 5] &&
        modules[row][col + 6]
      ) {
        lostPoint += 40;
      }
    }
  }

  for (let col = 0; col < moduleCount; col += 1) {
    for (let row = 0; row < moduleCount - 6; row += 1) {
      if (
        modules[row][col] &&
        !modules[row + 1][col] &&
        modules[row + 2][col] &&
        modules[row + 3][col] &&
        modules[row + 4][col] &&
        !modules[row + 5][col] &&
        modules[row + 6][col]
      ) {
        lostPoint += 40;
      }
    }
  }

  const darkCount = modules.reduce((total, row) => total + row.filter(Boolean).length, 0);
  const ratio = Math.abs((100 * darkCount) / moduleCount / moduleCount - 50) / 5;
  return lostPoint + ratio * 10;
}

function pickMaskPattern(version: number, data: number[]) {
  let bestPattern = 0;
  let bestLostPoint = Number.POSITIVE_INFINITY;

  for (let pattern = 0; pattern < 8; pattern += 1) {
    const lostPoint = getLostPoint(makeModules(version, data, pattern, true));
    if (lostPoint < bestLostPoint) {
      bestLostPoint = lostPoint;
      bestPattern = pattern;
    }
  }

  return bestPattern;
}

function escapeSvgAttribute(value: string) {
  return value.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

export function createHydroQrMatrix(value: string): HydroQrMatrix {
  const bytes = new TextEncoder().encode(value);
  const version = pickVersion(bytes);
  const data = createDataBytes(bytes, version);
  const modules = makeModules(version, data, pickMaskPattern(version, data), false);

  return {
    modules,
    size: modules.length,
    version,
  };
}

export function createHydroQrSvg(value: string, options: HydroQrSvgOptions = {}) {
  const quietZone = options.quietZone ?? 4;
  const foreground = escapeSvgAttribute(options.foreground ?? "#181714");
  const background = escapeSvgAttribute(options.background ?? "#f8f5ed");
  const matrix = createHydroQrMatrix(value);
  const viewSize = matrix.size + quietZone * 2;
  const path = matrix.modules
    .flatMap((row, rowIndex) =>
      row
        .map((dark, colIndex) => (dark ? `M${colIndex + quietZone},${rowIndex + quietZone}h1v1h-1z` : ""))
        .filter(Boolean),
    )
    .join("");

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${viewSize} ${viewSize}" shape-rendering="crispEdges"><rect width="${viewSize}" height="${viewSize}" fill="${background}"/><path d="${path}" fill="${foreground}"/></svg>`;
}

export function createHydroQrSvgDataUrl(value: string, options?: HydroQrSvgOptions) {
  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(createHydroQrSvg(value, options))}`;
}
