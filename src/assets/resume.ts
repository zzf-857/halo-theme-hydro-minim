import "./styles/resume.css";

type RawHrResume = {
  companyKey?: unknown;
  company_key?: unknown;
  pdfUrl?: unknown;
  pdf_url?: unknown;
  pdfTitle?: unknown;
  pdf_title?: unknown;
  realNode?: unknown;
  showDownload?: unknown;
  show_download?: unknown;
};

export type NormalizedHrResume = {
  companyKey: string;
  pdfUrl: string;
  pdfTitle: string;
  showDownload: boolean;
};

type ResumeWindow = Window & {
  __HYDRO_RESUME_CONFIG__?: {
    hrResumes?: unknown;
  };
};

function toBoolean(value: unknown, fallback: boolean) {
  if (value === undefined || value === null || value === "") return fallback;
  return value === true || value === "true";
}

function firstPresent(...values: unknown[]) {
  return values.find((value) => value !== undefined && value !== null && value !== "");
}

function toConfigString(value: unknown) {
  if (typeof value === "string") return value;
  if (typeof value === "number" || typeof value === "boolean") return String(value);
  return "";
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null;
}

function pickAttachmentUrl(value: unknown): string {
  const primitiveValue = toConfigString(value).trim();
  if (primitiveValue) return primitiveValue;

  if (Array.isArray(value)) {
    for (const item of value) {
      const itemUrl = pickAttachmentUrl(item);
      if (itemUrl) return itemUrl;
    }
    return "";
  }

  if (!isRecord(value)) return "";

  const directUrl = firstPresent(value.url, value.permalink, value.path, value.value, value.href);
  const directUrlString = toConfigString(directUrl).trim();
  if (directUrlString) return directUrlString;

  const statusUrl = isRecord(value.status)
    ? toConfigString(firstPresent(value.status.permalink, value.status.url, value.status.path)).trim()
    : "";
  if (statusUrl) return statusUrl;

  return isRecord(value.spec)
    ? toConfigString(firstPresent(value.spec.url, value.spec.permalink, value.spec.path)).trim()
    : "";
}

function normalizeCompanyKey(value: string) {
  const key = value.trim().toLowerCase();
  return key === "" || key === "default" || key === "defualt" ? "default" : key;
}

function findDefaultResume(resumesList: NormalizedHrResume[]) {
  return resumesList.find((resume) => normalizeCompanyKey(resume.companyKey) === "default") || null;
}

function unwrapHrResumeNode(resume: RawHrResume): RawHrResume {
  return isRecord(resume.realNode) ? (resume.realNode as RawHrResume) : resume;
}

export function normalizeHrResumes(rawResumes: unknown): NormalizedHrResume[] {
  if (!Array.isArray(rawResumes)) return [];
  return rawResumes.map((rawResume: RawHrResume) => {
    const resume = unwrapHrResumeNode(rawResume);
    return {
      companyKey: toConfigString(firstPresent(resume.companyKey, resume.company_key)).trim(),
      pdfUrl: pickAttachmentUrl(firstPresent(resume.pdfUrl, resume.pdf_url)),
      pdfTitle: toConfigString(firstPresent(resume.pdfTitle, resume.pdf_title)),
      showDownload:
        resume.showDownload !== undefined
          ? toBoolean(resume.showDownload, true)
          : toBoolean(resume.show_download, true),
    };
  });
}

export function resolveHrResumeAccess(
  resumesList: NormalizedHrResume[],
  code: string | null | undefined,
): NormalizedHrResume | null {
  const targetCode = (code || "").trim();
  if (targetCode === "") return findDefaultResume(resumesList);

  const normalizedTarget = normalizeCompanyKey(targetCode);
  if (normalizedTarget === "default") return findDefaultResume(resumesList);

  return resumesList.find((resume) => normalizeCompanyKey(resume.companyKey) === normalizedTarget) || null;
}

function readHrResumesFromPage(showcaseEl: Element | null): unknown[] {
  const configResumes = (window as ResumeWindow).__HYDRO_RESUME_CONFIG__?.hrResumes;
  if (Array.isArray(configResumes)) return configResumes;

  const attributeValue = showcaseEl?.getAttribute("data-hr-resumes")?.trim();
  if (!attributeValue) return [];

  try {
    const parsed = JSON.parse(attributeValue) as unknown;
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function normalizePdfFilename(value: string | null | undefined) {
  const filename = (value || "个人简历").trim() || "个人简历";
  return /\.pdf$/i.test(filename) ? filename : `${filename}.pdf`;
}

export function shouldUseNativePdfDownload(href: string | null | undefined, currentHref: string) {
  const rawHref = (href || "").trim();
  if (!rawHref || rawHref.startsWith("javascript:")) return false;

  try {
    return new URL(rawHref, currentHref).origin === new URL(currentHref).origin;
  } catch {
    return false;
  }
}

function configurePdfButton(button: Element, resume: NormalizedHrResume) {
  const link = button as HTMLAnchorElement;
  link.style.display = "";
  if (resume.pdfUrl) {
    link.href = resume.pdfUrl;
  } else {
    link.removeAttribute("href");
  }
  link.setAttribute("download", normalizePdfFilename(resume.pdfTitle));
}

function triggerBlobDownload(blob: Blob, filename: string) {
  const blobUrl = window.URL.createObjectURL(blob);
  const anchor = document.createElement("a");
  anchor.href = blobUrl;
  anchor.download = filename;
  anchor.style.display = "none";
  document.body.appendChild(anchor);
  anchor.click();
  anchor.remove();
  window.setTimeout(() => window.URL.revokeObjectURL(blobUrl), 1000);
}

async function downloadPdfButton(button: HTMLAnchorElement) {
  const href = button.getAttribute("href") || "";
  if (!href || href.startsWith("javascript:")) return;

  const url = new URL(href, window.location.href);
  const response = await fetch(url.href, {
    credentials: url.origin === window.location.origin ? "same-origin" : "omit",
  });
  if (!response.ok) throw new Error(`Resume PDF download failed with ${response.status}`);

  triggerBlobDownload(await response.blob(), normalizePdfFilename(button.getAttribute("download")));
}

function bindPdfDownload(button: Element) {
  const link = button as HTMLAnchorElement;
  if (link.dataset.pdfDownloadBound === "true") return;
  link.dataset.pdfDownloadBound = "true";

  link.addEventListener("click", (event) => {
    const href = link.getAttribute("href") || "";
    if (!href || href.startsWith("javascript:")) return;
    if (shouldUseNativePdfDownload(href, window.location.href)) return;

    event.preventDefault();
    void downloadPdfButton(link).catch(() => {
      window.location.href = link.href;
    });
  });
}

(function () {
  let activeImages: string[] = [];
  let activeIndex = 0;
  let autoplayTimer: number | null = null;
  let globalBound = false;

  function splitList(value: string | null, separator: "pipe" | "comma"): string[] {
    if (!value) return [];
    const pattern = separator === "pipe" ? /\|/ : /,/;
    return value
      .split(pattern)
      .map(function (item) {
        return item.trim();
      })
      .filter(Boolean);
  }

  function getModal(): HTMLElement | null {
    return document.getElementById("resume-work-modal");
  }

  function stopAutoplay() {
    if (autoplayTimer) {
      window.clearInterval(autoplayTimer);
      autoplayTimer = null;
    }
  }

  function renderSlide(index: number) {
    const modal = getModal();
    if (!modal || activeImages.length === 0) return;

    const image = modal.querySelector("#resume-modal-image") as HTMLImageElement | null;
    const count = modal.querySelector("#resume-modal-count") as HTMLElement | null;
    const thumbs = modal.querySelector("#resume-modal-thumbs") as HTMLElement | null;

    activeIndex = (index + activeImages.length) % activeImages.length;
    if (image) image.src = activeImages[activeIndex];
    if (count) {
      count.textContent =
        String(activeIndex + 1).padStart(2, "0") + " / " + String(activeImages.length).padStart(2, "0");
    }
    if (thumbs) {
      thumbs.querySelectorAll("button").forEach(function (button, buttonIndex) {
        button.classList.toggle("is-active", buttonIndex === activeIndex);
      });
    }
  }

  function startAutoplay() {
    stopAutoplay();
    if (activeImages.length <= 1) return;
    autoplayTimer = window.setInterval(function () {
      renderSlide(activeIndex + 1);
    }, 3600);
  }

  function closeModal() {
    const modal = getModal();
    if (!modal) return;
    stopAutoplay();
    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  }

  function openProjectModal(card: HTMLElement) {
    const modal = getModal();
    if (!modal || !card) return;

    const title = modal.querySelector("#resume-modal-title") as HTMLElement | null;
    const desc = modal.querySelector("#resume-modal-desc") as HTMLElement | null;
    const tags = modal.querySelector("#resume-modal-tags") as HTMLElement | null;
    const points = modal.querySelector("#resume-modal-points") as HTMLElement | null;
    const thumbs = modal.querySelector("#resume-modal-thumbs") as HTMLElement | null;

    activeImages = splitList(card.getAttribute("data-images"), "comma");
    if (activeImages.length === 0) {
      const cardImage = card.querySelector("img") as HTMLImageElement | null;
      if (cardImage && cardImage.getAttribute("src")) {
        activeImages = [cardImage.getAttribute("src") as string];
      }
    }

    if (title) title.textContent = card.getAttribute("data-title") || "项目详情";
    if (desc) desc.textContent = card.getAttribute("data-desc") || "";
    if (tags) {
      tags.innerHTML = splitList(card.getAttribute("data-tags"), "comma")
        .map(function (tag) {
          return "<span>" + tag + "</span>";
        })
        .join("");
    }
    if (points) {
      points.innerHTML = splitList(card.getAttribute("data-points"), "pipe")
        .map(function (point) {
          return "<li>" + point + "</li>";
        })
        .join("");
    }
    if (thumbs) {
      thumbs.innerHTML = activeImages
        .map(function (src, index) {
          return (
            '<button type="button" data-slide-index="' +
            index +
            '" aria-label="查看第 ' +
            (index + 1) +
            ' 张图"><img src="' +
            src +
            '" alt=""></button>'
          );
        })
        .join("");
    }

    renderSlide(0);
    modal.classList.add("is-open");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
    startAutoplay();
  }

  function initResumePage() {
    const root = document.querySelector(".resume-showcase") as HTMLElement | null;
    if (!root) return;

    const modal = root.querySelector("#resume-work-modal") as HTMLElement | null;
    if (modal && modal.parentNode !== document.body) {
      document.body.appendChild(modal);
    }

    if (root.dataset.resumeReady !== "true") {
      root.dataset.resumeReady = "true";
      root.classList.add("resume-js-ready");

      const revealItems = root.querySelectorAll(".resume-reveal");
      if ("IntersectionObserver" in window) {
        const observer = new IntersectionObserver(
          function (entries) {
            entries.forEach(function (entry) {
              if (entry.isIntersecting) {
                // 微延迟 30ms 确保浏览器优先渲染初始的隐蔽状态以完美播放过渡动画
                setTimeout(function () {
                  entry.target.classList.add("is-visible");
                }, 30);
              } else {
                // 如果用户往上滚动（元素回到了当前视口下方），则移除 is-visible 以便能再次触发入场动效
                if (entry.boundingClientRect.top > 0) {
                  entry.target.classList.remove("is-visible");
                }
              }
            });
          },
          { threshold: 0.1 },
        );

        revealItems.forEach(function (item) {
          observer.observe(item);
        });
      } else {
        revealItems.forEach(function (item) {
          item.classList.add("is-visible");
        });
      }
    }

    // === 🔗 HR 专属简历分流及下载可见性控制 ===
    (function handleHrAccess() {
      const downloadBtns = document.querySelectorAll('[data-pdf-download="true"]');
      if (downloadBtns.length === 0) return;
      downloadBtns.forEach(bindPdfDownload);

      const showcaseEl = document.querySelector(".resume-showcase");
      const normalizedResumes = normalizeHrResumes(readHrResumesFromPage(showcaseEl));

      // 忽略重复 of the 识别码（大小写不敏感，只保留第一个）
      const resumesList: typeof normalizedResumes = [];
      const seenKeys = new Set<string>();
      normalizedResumes.forEach((r: any) => {
        const lowKey = normalizeCompanyKey(r.companyKey);
        if (!seenKeys.has(lowKey)) {
          seenKeys.add(lowKey);
          resumesList.push(r);
        }
      });

      const urlParams = new URLSearchParams(window.location.search);
      const hrParam = urlParams.get("hr");
      const activeCode = hrParam !== null ? hrParam.trim() : "";
      const matched = resolveHrResumeAccess(resumesList, activeCode);

      if (matched) {
        if (matched.showDownload === false) {
          downloadBtns.forEach((btn: any) => {
            btn.style.display = "none";
          });
        } else {
          downloadBtns.forEach((btn) => configurePdfButton(btn, matched));
        }
      } else {
        downloadBtns.forEach((btn) => {
          const link = btn as HTMLAnchorElement;
          link.href = "javascript:void(0);";
          if (link.dataset.pdfPromptBound === "true") return;
          link.dataset.pdfPromptBound = "true";

          link.addEventListener("click", (e: Event) => {
            if (!new URLSearchParams(window.location.search).get("hr")) {
              e.preventDefault();
              const code = prompt("🔒 简历下载受限\n请输入您的专属提取码/公司识别码：");
              if (code === null) return;

              const searchCode = normalizeCompanyKey(code);
              const matched = resumesList.find((r: any) => normalizeCompanyKey(r.companyKey) === searchCode);

              if (matched) {
                alert("验证成功！已为您解锁专属简历。");

                if (matched.showDownload === false) {
                  alert("抱歉，该版本的简历下载已被作者关闭。");
                  downloadBtns.forEach((b) => ((b as HTMLElement).style.display = "none"));
                } else {
                  downloadBtns.forEach((b) => configurePdfButton(b, matched));
                  void downloadPdfButton(link).catch(() => {
                    window.location.href = link.href;
                  });
                }
              } else {
                alert("提取码错误，请联系作者获取专属链接。");
              }
            }
          });
        });
      }
    })();

    if (globalBound) return;
    globalBound = true;

    document.addEventListener("click", function (event) {
      const target = event.target as HTMLElement;

      const card = target.closest ? (target.closest(".resume-work-card") as HTMLElement | null) : null;
      if (card) {
        event.preventDefault();
        openProjectModal(card);
        return;
      }

      if (target.closest && target.closest("[data-close-modal]")) {
        closeModal();
        return;
      }

      const thumb = target.closest ? (target.closest("[data-slide-index]") as HTMLElement | null) : null;
      if (thumb) {
        stopAutoplay();
        renderSlide(Number(thumb.getAttribute("data-slide-index") || 0));
        startAutoplay();
      }
    });

    document.addEventListener("click", function (event) {
      const target = event.target as HTMLElement;

      if (target.closest && target.closest("[data-slide-prev]")) {
        stopAutoplay();
        renderSlide(activeIndex - 1);
        startAutoplay();
      }
      if (target.closest && target.closest("[data-slide-next]")) {
        stopAutoplay();
        renderSlide(activeIndex + 1);
        startAutoplay();
      }
    });

    document.addEventListener("keydown", function (event) {
      const modal = getModal();
      if (!modal || !modal.classList.contains("is-open")) return;
      if (event.key === "Escape") closeModal();
      if (event.key === "ArrowLeft") {
        stopAutoplay();
        renderSlide(activeIndex - 1);
        startAutoplay();
      }
      if (event.key === "ArrowRight") {
        stopAutoplay();
        renderSlide(activeIndex + 1);
        startAutoplay();
      }
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initResumePage);
  } else {
    initResumePage();
  }

  // 监听主题可能抛出的 pjax:complete 或类似局部刷新事件
  document.addEventListener("pjax:complete", initResumePage);
  document.addEventListener("pjax:success", initResumePage);
})();
