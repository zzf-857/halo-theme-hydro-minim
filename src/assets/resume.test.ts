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
});
