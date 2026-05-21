// @vitest-environment jsdom

import { afterEach, describe, expect, it, vi } from "vitest";

import { runHydroFabAction, type HydroFabActionDependencies } from "./fab-actions";

function createDependencies(): HydroFabActionDependencies {
  return {
    copyText: vi.fn(async () => {}),
    getWindow: () => window,
    root: document,
    scrollToElement: vi.fn(),
    scrollToPosition: vi.fn(),
    warn: vi.fn(),
  };
}

function createCustomActionElement(handlerName: string): HTMLButtonElement {
  const element = document.createElement("button");
  element.dataset.hydroFabAction = "custom";
  element.dataset.hydroFabHandler = handlerName;
  return element;
}

afterEach(() => {
  const win = window as unknown as Window & Record<string, unknown>;
  delete win.HydroMinimActions;
  delete win.LinksSubmit;
  document.body.innerHTML = "";
});

describe("runHydroFabAction", () => {
  it("resolves direct window method paths with a trailing invocation suffix", async () => {
    const openLinksSubmitOverlay = vi.fn();
    const closeMenu = vi.fn();
    const dependencies = createDependencies();
    const element = createCustomActionElement("window.LinksSubmit.openSubmitPopup()");
    const win = window as unknown as {
      LinksSubmit?: {
        openLinksSubmitOverlay: () => void;
        openSubmitPopup: () => void;
      };
    };

    win.LinksSubmit = {
      openLinksSubmitOverlay,
      openSubmitPopup() {
        return this.openLinksSubmitOverlay();
      },
    };

    await runHydroFabAction(
      element,
      new MouseEvent("click", { bubbles: true, cancelable: true }),
      dependencies,
      closeMenu,
    );

    expect(openLinksSubmitOverlay).toHaveBeenCalledTimes(1);
    expect(closeMenu).toHaveBeenCalledTimes(1);
    expect(dependencies.warn).not.toHaveBeenCalled();
  });

  it("still resolves registry handlers when the name includes trailing parentheses", async () => {
    const handler = vi.fn();
    const dependencies = createDependencies();
    const element = createCustomActionElement("openSubmitPopup()");
    const win = window as unknown as {
      HydroMinimActions?: Record<string, typeof handler>;
    };

    win.HydroMinimActions = {
      openSubmitPopup: handler,
    };

    await runHydroFabAction(
      element,
      new MouseEvent("click", { bubbles: true, cancelable: true }),
      dependencies,
      vi.fn(),
    );

    expect(handler).toHaveBeenCalledTimes(1);
    expect(handler.mock.calls[0]?.[0]).toMatchObject({ action: "custom" });
    expect(dependencies.warn).not.toHaveBeenCalled();
  });
});
