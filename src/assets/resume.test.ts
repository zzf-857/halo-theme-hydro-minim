import { describe, expect, it } from "vitest";

import { normalizeHrResumes, resolveHrResumeAccess, shouldUseNativePdfDownload } from "./resume";

describe("resume HR download access", () => {
  it("uses the default resume when no HR code is present and respects disabled downloads", () => {
    const resumes = normalizeHrResumes([
      {
        company_key: "default",
        pdf_url: "/resume.pdf",
        pdf_title: "Default Resume",
        show_download: false,
      },
    ]);

    expect(resolveHrResumeAccess(resumes, null)?.showDownload).toBe(false);
  });

  it("does not fall back to the default resume for an unknown explicit HR code", () => {
    const resumes = normalizeHrResumes([
      {
        company_key: "default",
        pdf_url: "/default.pdf",
        pdf_title: "Default Resume",
        show_download: true,
      },
    ]);

    expect(resolveHrResumeAccess(resumes, "unknown-company")).toBeNull();
  });

  it("treats a blank company key as the default resume entry", () => {
    const resumes = normalizeHrResumes([
      {
        company_key: "",
        pdf_url: "/blank-default.pdf",
        pdf_title: "Blank Default Resume",
        show_download: false,
      },
    ]);

    expect(resolveHrResumeAccess(resumes, null)?.pdfUrl).toBe("/blank-default.pdf");
    expect(resolveHrResumeAccess(resumes, "")?.showDownload).toBe(false);
  });

  it("extracts PDF URLs from attachment object values", () => {
    const resumes = normalizeHrResumes([
      {
        company_key: "acme",
        pdf_url: {
          status: {
            permalink: "/upload/resume-acme.pdf",
          },
        },
        pdf_title: "Acme Resume",
        show_download: true,
      },
      {
        company_key: "beta",
        pdf_url: {
          url: "https://cdn.example.com/resume-beta.pdf",
        },
        pdf_title: "Beta Resume",
        show_download: true,
      },
    ]);

    expect(resolveHrResumeAccess(resumes, "acme")?.pdfUrl).toBe("/upload/resume-acme.pdf");
    expect(resolveHrResumeAccess(resumes, "beta")?.pdfUrl).toBe("https://cdn.example.com/resume-beta.pdf");
  });

  it("unwraps Halo realNode values from inline theme config", () => {
    const resumes = normalizeHrResumes([
      {
        realNode: {
          company_key: "game",
          pdf_url: "/upload/game-resume.pdf",
          pdf_title: "游戏开发简历",
          show_download: true,
        },
      },
    ]);

    expect(resolveHrResumeAccess(resumes, "game")).toEqual({
      companyKey: "game",
      pdfUrl: "/upload/game-resume.pdf",
      pdfTitle: "游戏开发简历",
      showDownload: true,
    });
  });

  it("keeps same-origin PDF links on the browser native download path", () => {
    const currentHref = "https://blog.example.com/resume/?hr=acme";

    expect(shouldUseNativePdfDownload("/upload/resume-acme.pdf", currentHref)).toBe(true);
    expect(shouldUseNativePdfDownload("https://blog.example.com/upload/resume-acme.pdf", currentHref)).toBe(true);
    expect(shouldUseNativePdfDownload("https://cdn.example.com/resume-acme.pdf", currentHref)).toBe(false);
  });
});
