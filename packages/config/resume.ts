/**
 * Bump RESUME_VERSION when you replace apps/web/assets/resume.pdf.
 * Use the first 8 characters of the file's MD5 hash.
 */
export const RESUME_VERSION = "99d2d201";

export const resumeDownload = {
  url: `/resume.pdf?v=${RESUME_VERSION}`,
  filename: "chiedu-david-chibundo-resume.pdf",
} as const;
