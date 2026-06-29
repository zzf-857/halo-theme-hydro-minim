import { describe, expect, it } from "vitest";

import { createHrAwareLink, normalizeHrCode } from "./hr-links";

describe("HR link propagation", () => {
  it("normalizes blank and explicit HR codes", () => {
    expect(normalizeHrCode(" acme ")).toBe("acme");
    expect(normalizeHrCode(" ")).toBe("");
    expect(normalizeHrCode(null)).toBe("");
  });

  it("appends HR codes only to about and resume entry links", () => {
    const currentHref = "https://example.com/?hr=acme";

    expect(createHrAwareLink("/about/", "acme", currentHref)).toBe("https://example.com/about/?hr=acme");
    expect(createHrAwareLink("/resume/?tab=pdf", "acme", currentHref)).toBe(
      "https://example.com/resume/?tab=pdf&hr=acme",
    );
    expect(createHrAwareLink("/posts/hello", "acme", currentHref)).toBeNull();
    expect(createHrAwareLink("#about", "acme", currentHref)).toBeNull();
    expect(createHrAwareLink("https://other.example/about/", "acme", currentHref)).toBeNull();
  });
});
