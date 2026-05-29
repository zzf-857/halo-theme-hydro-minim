export type HydroFabActionContext = {
  action: string;
  closeMenu: () => void;
  element: HTMLElement;
  event: MouseEvent;
  payload: unknown;
};

export type HydroMinimActionHandler = (context: HydroFabActionContext) => void | Promise<void>;

export type HydroFabActionDependencies = {
  copyText: (text: string) => Promise<void>;
  getWindow: () => Window;
  root: ParentNode;
  scrollToElement: (element: HTMLElement) => void;
  scrollToPosition: (top: number) => void;
  warn?: (message: string) => void;
};

type HydroFabBuiltinAction =
  | "back-to-top"
  | "copy-current-url"
  | "open-menu"
  | "print"
  | "scroll-comment"
  | "search"
  | "theme-toggle";

const hydroFabBuiltinActions = new Set<string>([
  "back-to-top",
  "copy-current-url",
  "open-menu",
  "print",
  "scroll-comment",
  "search",
  "theme-toggle",
]);

declare global {
  interface Window {
    HydroMinimActions?: Record<string, HydroMinimActionHandler>;
    SearchWidget?: {
      open?: () => void;
    };
  }
}

export function parseHydroFabPayload(raw: string | undefined): unknown {
  const value = raw?.trim();
  if (!value) {
    return undefined;
  }

  try {
    return JSON.parse(value) as unknown;
  } catch {
    return value;
  }
}

function findClickable(root: ParentNode, selector: string): HTMLElement | null {
  return (
    Array.from(root.querySelectorAll<HTMLElement>(selector)).find((element) => {
      if (element.hidden || element.getAttribute("aria-hidden") === "true") {
        return false;
      }

      if (element instanceof HTMLButtonElement && element.disabled) {
        return false;
      }

      return true;
    }) ?? null
  );
}

function warn(dependencies: HydroFabActionDependencies, message: string): void {
  dependencies.warn?.(message);
}

function isHydroFabBuiltinAction(value: string | undefined): value is HydroFabBuiltinAction {
  return typeof value === "string" && hydroFabBuiltinActions.has(value);
}

function normalizeHydroFabHandlerName(handlerName: string): string {
  const trimmed = handlerName.trim();
  const withoutInvocation = trimmed.endsWith("()") ? trimmed.slice(0, -2).trim() : trimmed;
  return withoutInvocation.startsWith("window.") ? withoutInvocation.slice("window.".length) : withoutInvocation;
}

function resolveHydroFabCustomHandler(
  handlerName: string,
  dependencies: HydroFabActionDependencies,
): HydroMinimActionHandler | null {
  const win = dependencies.getWindow();
  const normalizedHandlerName = normalizeHydroFabHandlerName(handlerName);

  if (!normalizedHandlerName) {
    return null;
  }

  const registryHandler = win.HydroMinimActions?.[normalizedHandlerName];
  if (typeof registryHandler === "function") {
    return registryHandler;
  }

  const segments = normalizedHandlerName.split(".").filter(Boolean);
  if (segments.length === 0) {
    return null;
  }

  let current: unknown = win;
  for (let index = 0; index < segments.length - 1; index += 1) {
    if (current == null || (typeof current !== "object" && typeof current !== "function")) {
      return null;
    }

    current = (current as Record<string, unknown>)[segments[index]];
  }

  if (current == null || (typeof current !== "object" && typeof current !== "function")) {
    return null;
  }

  const handler = (current as Record<string, unknown>)[segments[segments.length - 1]];
  if (typeof handler !== "function") {
    return null;
  }

  return handler.bind(current) as HydroMinimActionHandler;
}

function markCopied(element: HTMLElement, win: Window): void {
  element.classList.add("is-copied");
  win.setTimeout(() => {
    element.classList.remove("is-copied");
  }, 1400);
}

async function runBuiltinAction(
  action: HydroFabBuiltinAction,
  element: HTMLElement,
  dependencies: HydroFabActionDependencies,
): Promise<void> {
  const win = dependencies.getWindow();

  switch (action) {
    case "back-to-top":
      dependencies.scrollToPosition(0);
      return;
    case "copy-current-url":
      await dependencies.copyText(win.location.href);
      markCopied(element, win);
      return;
    case "open-menu": {
      const mobileMenu = dependencies.root.querySelector<HTMLElement>("[data-hydro-mobile-menu]");
      if (mobileMenu?.classList.contains("is-open")) {
        return;
      }
      findClickable(dependencies.root, "[data-hydro-mobile-toggle]")?.click();
      return;
    }
    case "print":
      win.print();
      return;
    case "scroll-comment": {
      const comment = dependencies.root.querySelector<HTMLElement>("#comment");
      if (comment) {
        dependencies.scrollToElement(comment);
      }
      return;
    }
    case "search": {
      const searchEntry = findClickable(dependencies.root, "[data-hydro-search-entry]");
      if (searchEntry) {
        searchEntry.click();
        return;
      }
      if (typeof win.SearchWidget?.open === "function") {
        win.SearchWidget.open();
      }
      return;
    }
    case "theme-toggle":
      findClickable(dependencies.root, "[data-hydro-theme-toggle]")?.click();
      return;
  }
}

async function runCustomAction(
  handlerName: string,
  context: HydroFabActionContext,
  dependencies: HydroFabActionDependencies,
): Promise<void> {
  const handler = resolveHydroFabCustomHandler(handlerName, dependencies);

  if (typeof handler !== "function") {
    warn(dependencies, `Hydro-Minim FAB custom handler "${handlerName}" is not registered or resolvable.`);
    return;
  }

  await handler(context);
}

export async function runHydroFabAction(
  element: HTMLElement,
  event: MouseEvent,
  dependencies: HydroFabActionDependencies,
  closeMenu: () => void,
): Promise<void> {
  const action = element.dataset.hydroFabAction?.trim() || "link";
  if (action === "link") {
    return;
  }

  event.preventDefault();
  event.stopPropagation();
  closeMenu();

  if (action === "builtin") {
    const builtinAction = element.dataset.hydroFabBuiltin?.trim();
    if (!builtinAction) {
      warn(dependencies, "Hydro-Minim FAB built-in action is empty.");
      return;
    }

    if (!isHydroFabBuiltinAction(builtinAction)) {
      warn(dependencies, `Hydro-Minim FAB built-in action "${builtinAction}" is not supported.`);
      return;
    }

    await runBuiltinAction(builtinAction, element, dependencies);
    return;
  }

  if (action === "custom") {
    const handlerName = element.dataset.hydroFabHandler?.trim();
    if (!handlerName) {
      warn(dependencies, "Hydro-Minim FAB custom handler name is empty.");
      return;
    }

    await runCustomAction(
      handlerName,
      {
        action,
        closeMenu,
        element,
        event,
        payload: parseHydroFabPayload(element.dataset.hydroFabPayload),
      },
      dependencies,
    );
    return;
  }

  warn(dependencies, `Hydro-Minim FAB action "${action}" is not supported.`);
}
