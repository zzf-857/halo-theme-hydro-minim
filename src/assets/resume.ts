import "./styles/resume.css";

type RawHrResume = {
  companyKey?: unknown;
  company_key?: unknown;
  pdfUrl?: unknown;
  pdf_url?: unknown;
  pdfTitle?: unknown;
  pdf_title?: unknown;
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

export function normalizeHrResumes(rawResumes: unknown): NormalizedHrResume[] {
  if (!Array.isArray(rawResumes)) return [];
  return rawResumes.map((resume: RawHrResume) => ({
    companyKey: toConfigString(firstPresent(resume.companyKey, resume.company_key)).trim(),
    pdfUrl: toConfigString(firstPresent(resume.pdfUrl, resume.pdf_url)),
    pdfTitle: toConfigString(firstPresent(resume.pdfTitle, resume.pdf_title)),
    showDownload:
      resume.showDownload !== undefined ? toBoolean(resume.showDownload, true) : toBoolean(resume.show_download, true),
  }));
}

export function resolveHrResumeAccess(
  resumesList: NormalizedHrResume[],
  code: string | null | undefined,
): NormalizedHrResume | null {
  const targetCode = (code || "default").trim().toLowerCase();
  return (
    resumesList.find((resume) => resume.companyKey.toLowerCase() === targetCode) ||
    resumesList.find((resume) => {
      const key = resume.companyKey.toLowerCase();
      return key === "default" || key === "defualt";
    }) ||
    null
  );
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

    // === 🔗 HR 专属简历分流及下载可见性控制 ===
    (function handleHrAccess() {
      const downloadBtns = document.querySelectorAll('[data-pdf-download="true"]');
      if (downloadBtns.length === 0) return;

      const showcaseEl = document.querySelector(".resume-showcase");
      const normalizedResumes = normalizeHrResumes(readHrResumesFromPage(showcaseEl));

      // 忽略重复 of the 识别码（大小写不敏感，只保留第一个）
      const resumesList: typeof normalizedResumes = [];
      const seenKeys = new Set<string>();
      normalizedResumes.forEach((r: any) => {
        const lowKey = r.companyKey.toLowerCase();
        if (!seenKeys.has(lowKey)) {
          seenKeys.add(lowKey);
          resumesList.push(r);
        }
      });

      const urlParams = new URLSearchParams(window.location.search);
      const hrParam = urlParams.get("hr");
      const activeCode = hrParam !== null ? hrParam.trim() : "default";
      const matched = resolveHrResumeAccess(resumesList, activeCode);

      if (matched) {
        if (matched.showDownload === false) {
          downloadBtns.forEach((btn: any) => {
            btn.style.display = "none";
          });
        } else {
          downloadBtns.forEach((btn: any) => {
            btn.style.display = "";
            btn.href = matched.pdfUrl;
            btn.setAttribute("download", (matched.pdfTitle || "个人简历") + ".pdf");
          });
        }
      } else {
        downloadBtns.forEach((btn: any) => {
          btn.href = "javascript:void(0);";

          btn.addEventListener("click", (e: Event) => {
            if (!new URLSearchParams(window.location.search).get("hr")) {
              e.preventDefault();
              const code = prompt("🔒 简历下载受限\n请输入您的专属提取码/公司识别码：");
              if (code === null) return;

              const searchCode = code.trim().toLowerCase();
              const matched = resumesList.find((r: any) => r.companyKey.toLowerCase() === searchCode);

              if (matched) {
                alert("验证成功！已为您解锁专属简历。");

                if (matched.showDownload === false) {
                  alert("抱歉，该版本的简历下载已被作者关闭。");
                  downloadBtns.forEach((b: any) => (b.style.display = "none"));
                } else {
                  downloadBtns.forEach((b: any) => {
                    b.style.display = "";
                    b.href = matched.pdfUrl;
                    b.setAttribute("download", (matched.pdfTitle || "个人简历") + ".pdf");
                  });
                  btn.click();
                }
              } else {
                alert("提取码错误，请联系作者获取专属链接。");
              }
            }
          });
        });
      }

      const adminParam = urlParams.get("admin");
      if (adminParam === "show") {
        renderAdminHelper(resumesList);
      }
    })();
  }

  function renderAdminHelper(resumesList: any[]) {
    if (document.getElementById("admin-resume-helper")) return;

    const panel = document.createElement("div");
    panel.id = "admin-resume-helper";
    panel.className = "admin-helper-panel";

    const header = document.createElement("div");
    header.className = "admin-helper-header";

    const title = document.createElement("strong");
    title.textContent = "📋 专属简历链接助手";

    const closeBtn = document.createElement("span");
    closeBtn.className = "admin-helper-close";
    closeBtn.textContent = "×";
    closeBtn.addEventListener("click", () => {
      panel.style.display = "none";
    });

    header.appendChild(title);
    header.appendChild(closeBtn);

    const body = document.createElement("div");
    body.className = "admin-helper-body";

    const tip = document.createElement("p");
    tip.className = "admin-helper-tip";
    tip.textContent = "直接点击 [复制] 即可将专属链接发给 HR：";

    const list = document.createElement("ul");
    list.id = "admin-links-list";

    const currentUrl = new URL(window.location.href);
    currentUrl.searchParams.delete("admin");
    currentUrl.searchParams.delete("hr");
    const cleanBaseUrl = currentUrl.origin + currentUrl.pathname;

    resumesList.forEach((resume) => {
      const companyKey = resume.companyKey;
      const fullUrl = companyKey ? `${cleanBaseUrl}?hr=${companyKey}` : cleanBaseUrl;
      const displaySuffix = companyKey ? `?hr=${companyKey}` : "默认简历链接";
      const downloadStatus = resume.showDownload ? "✅ 允许下载" : "❌ 禁止下载";

      const li = document.createElement("li");
      li.className = "admin-helper-item";

      const infoDiv = document.createElement("div");

      const keySpan = document.createElement("strong");
      keySpan.textContent = displaySuffix;

      const metaSpan = document.createElement("span");
      metaSpan.style.fontSize = "10px";
      metaSpan.style.opacity = "0.5";
      metaSpan.style.display = "block";
      metaSpan.textContent = `${resume.pdfTitle || "通用简历"} | ${downloadStatus}`;

      infoDiv.appendChild(keySpan);
      infoDiv.appendChild(metaSpan);

      const copyBtn = document.createElement("button");
      copyBtn.className = "admin-helper-copy-btn";
      copyBtn.textContent = "复制";

      copyBtn.addEventListener("click", () => {
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard
            .writeText(fullUrl)
            .then(() => {
              showCopyFeedback(copyBtn);
            })
            .catch(() => {
              fallbackCopy(fullUrl, copyBtn);
            });
        } else {
          fallbackCopy(fullUrl, copyBtn);
        }
      });

      li.appendChild(infoDiv);
      li.appendChild(copyBtn);
      list.appendChild(li);
    });

    body.appendChild(tip);
    body.appendChild(list);

    panel.appendChild(header);
    panel.appendChild(body);
    document.body.appendChild(panel);
  }

  function fallbackCopy(text: string, button: HTMLButtonElement) {
    const promptVal = prompt("🔒 复制失败，请手动复制以下链接：", text);
    if (promptVal !== null) {
      showCopyFeedback(button);
    }
  }

  function showCopyFeedback(button: HTMLButtonElement) {
    const originalText = button.textContent;
    button.textContent = "已复制";
    button.style.background = "#2ec4b6";
    setTimeout(() => {
      button.textContent = originalText;
      button.style.background = "";
    }, 1500);
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
