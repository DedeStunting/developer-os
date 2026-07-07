import path from "node:path";

/** URL users click to download the resume. */
export const RESUME_DOWNLOAD_URL = "/resume.pdf";

/** Filename shown in the browser when the PDF is saved. */
export const RESUME_DOWNLOAD_FILENAME = "chiedu-david-chibundo-resume.pdf";

/**
 * Drop your PDF here (repo path):
 * apps/web/assets/resume.pdf
 */
export const RESUME_PDF_PATH = path.join(process.cwd(), "assets/resume.pdf");
