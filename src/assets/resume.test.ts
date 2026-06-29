import { describe, expect, it } from "vitest";

import { normalizeHrResumes, resolveHrResumeAccess } from "./resume";

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
});
