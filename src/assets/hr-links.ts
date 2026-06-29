const hrEntryPaths = new Set(["/about", "/resume"]);

export function normalizeHrCode(value: string | null | undefined) {
  return (value || "").trim();
}

function normalizedPath(pathname: string) {
  const path = pathname.replace(/\/+$/, "");
  return path || "/";
}

export function createHrAwareLink(href: string | null | undefined, hrCode: string, currentHref: string) {
  const code = normalizeHrCode(hrCode);
  const rawHref = (href || "").trim();
  if (!code || !rawHref || rawHref.startsWith("#") || /^javascript:|^mailto:|^tel:/i.test(rawHref)) return null;

  const currentUrl = new URL(currentHref);
  const targetUrl = new URL(rawHref, currentUrl);
  if (targetUrl.origin !== currentUrl.origin) return null;
  if (!hrEntryPaths.has(normalizedPath(targetUrl.pathname))) return null;

  targetUrl.searchParams.set("hr", code);
  return targetUrl.href;
}

export function initHrLinkPropagation(root: ParentNode = document, win: Window = window) {
  const code = normalizeHrCode(new URLSearchParams(win.location.search).get("hr"));
  if (!code) return;

  const syncLinks = (scope: ParentNode = root) => {
    scope.querySelectorAll<HTMLAnchorElement>("a[href]").forEach((link) => {
      const nextHref = createHrAwareLink(link.getAttribute("href"), code, win.location.href);
      if (nextHref) link.href = nextHref;
    });
  };

  syncLinks(root);

  document.addEventListener(
    "click",
    (event) => {
      const target = event.target;
      if (!(target instanceof Element)) return;

      const link = target.closest<HTMLAnchorElement>("a[href]");
      if (!link) return;

      const nextHref = createHrAwareLink(link.getAttribute("href"), code, win.location.href);
      if (nextHref) link.href = nextHref;
    },
    true,
  );

  document.addEventListener("pjax:complete", () => syncLinks(document));
  document.addEventListener("pjax:success", () => syncLinks(document));
}
