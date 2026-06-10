type MediaLoadControllerOptions = {
  fallbackErrorText?: string;
};

function getConnectionSaveData() {
  const connection = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection;
  return connection?.saveData === true;
}

function scheduleMediaIdleWork(callback: () => void, timeout = 1200) {
  const idleWindow = window as typeof window & {
    requestIdleCallback?: (handler: () => void, options?: { timeout: number }) => number;
  };

  if (idleWindow.requestIdleCallback) {
    idleWindow.requestIdleCallback(callback, { timeout });
    return;
  }

  window.setTimeout(callback, 180);
}

function closestProgressiveShell(image: HTMLImageElement) {
  return image.closest<HTMLElement>("[data-progressive-media]") ?? image.closest<HTMLElement>("figure");
}

function markImageLoaded(image: HTMLImageElement, shell: HTMLElement | null) {
  image.dataset.mediaState = "loaded";
  image.removeAttribute("aria-hidden");
  image.classList.remove("is-media-error");
  shell?.setAttribute("data-media-state", "loaded");
  shell?.classList.add("is-media-loaded");
  shell?.classList.remove("is-media-loading", "is-media-error");
}

function applyFallbackImage(image: HTMLImageElement, shell: HTMLElement | null) {
  const fallbackCover = image.dataset.fallbackCover;
  if (!fallbackCover || image.dataset.fallbackCoverApplied === "true") {
    return false;
  }

  image.dataset.fallbackCoverApplied = "true";
  image.dataset.mediaState = "loading";
  image.removeAttribute("aria-hidden");
  image.removeAttribute("srcset");
  image.removeAttribute("sizes");
  image.classList.remove("is-media-error");
  image.src = fallbackCover;

  shell?.setAttribute("data-media-state", "loading");
  shell?.classList.add("is-media-loading");
  shell?.classList.remove("is-media-error", "is-media-loaded");
  shell?.querySelector("[data-media-error-label]")?.remove();

  return true;
}

function markImageFailed(image: HTMLImageElement, shell: HTMLElement | null, fallbackErrorText: string) {
  if (applyFallbackImage(image, shell)) {
    return;
  }

  image.dataset.mediaState = "error";
  image.dataset.lightboxDisabled = "true";
  image.classList.add("is-media-error");
  image.setAttribute("aria-hidden", "true");
  image.removeAttribute("data-lightbox-trigger");

  if (!shell) {
    return;
  }

  shell.setAttribute("data-media-state", "error");
  shell.classList.add("is-media-error");
  shell.classList.remove("is-media-loading", "is-media-loaded");

  if (!shell.querySelector("[data-media-error-label]")) {
    const label = document.createElement("span");
    label.className = "hydro-media-error-label";
    label.dataset.mediaErrorLabel = "";
    label.textContent = shell.dataset.mediaErrorText || image.alt || fallbackErrorText;
    shell.append(label);
  }

  if (shell.dataset.lightboxTrigger != null) {
    delete shell.dataset.lightboxTrigger;
    shell.dataset.lightboxDisabled = "true";
    shell.setAttribute("aria-disabled", "true");
  }

  if (shell instanceof HTMLButtonElement) {
    shell.disabled = true;
  }
}

function primeImage(image: HTMLImageElement) {
  if (!image.hasAttribute("loading")) {
    image.loading = "lazy";
  }

  if (!image.hasAttribute("decoding")) {
    image.decoding = "async";
  }
}

export function createMediaLoadController(root: ParentNode = document, options: MediaLoadControllerOptions = {}) {
  const fallbackErrorText = options.fallbackErrorText ?? "图片暂时不可见";

  function initProgressiveImages() {
    root.querySelectorAll<HTMLImageElement>("img[data-progressive-image]").forEach((image) => {
      const shell = closestProgressiveShell(image);
      primeImage(image);

      if (image.complete && image.naturalWidth > 0) {
        markImageLoaded(image, shell);
        return;
      }

      if (image.complete && image.naturalWidth === 0) {
        if (applyFallbackImage(image, shell)) {
          return;
        }
        markImageFailed(image, shell, fallbackErrorText);
        return;
      }

      shell?.setAttribute("data-media-state", "loading");
      shell?.classList.add("is-media-loading");

      image.addEventListener("load", () => markImageLoaded(image, shell));
      image.addEventListener("error", () => markImageFailed(image, shell, fallbackErrorText));
    });
  }

  function initDeferredHeroVideo() {
    const videos = Array.from(root.querySelectorAll<HTMLVideoElement>("video[data-hydro-hero-video][data-src]"));

    if (videos.length === 0) {
      return;
    }

    if (getConnectionSaveData()) {
      videos.forEach((video) => {
        video.dataset.mediaState = "skipped";
        video.closest<HTMLElement>("[data-progressive-media]")?.setAttribute("data-media-state", "cover");
      });
      return;
    }

    const activateVideo = (video: HTMLVideoElement) => {
      const src = video.dataset.src;
      if (!src || video.dataset.mediaState === "loading" || video.dataset.mediaState === "loaded") {
        return;
      }

      video.dataset.mediaState = "loading";
      video.preload = "metadata";
      video.src = src;
      video.load();

      const markReady = () => {
        video.dataset.mediaState = "loaded";
        video.closest<HTMLElement>("[data-progressive-media]")?.setAttribute("data-media-state", "loaded");
        const playResult = video.play();
        if (playResult) {
          playResult.catch(() => undefined);
        }
      };

      video.addEventListener("loadeddata", markReady, { once: true });
      video.addEventListener(
        "error",
        () => {
          video.dataset.mediaState = "error";
          video.closest<HTMLElement>("[data-progressive-media]")?.setAttribute("data-media-state", "cover");
        },
        { once: true },
      );
    };

    const warmVideos = () => videos.forEach(activateVideo);
    scheduleMediaIdleWork(warmVideos, 1500);

    if (!("IntersectionObserver" in window)) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries.some((entry) => entry.isIntersecting)) {
          return;
        }
        warmVideos();
        observer.disconnect();
      },
      { rootMargin: "480px 0px" },
    );

    videos.forEach((video) => {
      const target = video.closest<HTMLElement>("[data-hydro-hero]") ?? video;
      observer.observe(target);
    });
  }

  return {
    initDeferredHeroVideo,
    initProgressiveImages,
  };
}
