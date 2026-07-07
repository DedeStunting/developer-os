import path from "node:path";

import { resumeDownload } from "@developer-os/config/resume";

export const RESUME_VERSION = "99d2d201";

export const RESUME_DOWNLOAD_URL = resumeDownload.url;
export const RESUME_DOWNLOAD_FILENAME = resumeDownload.filename;

/**
 * Drop your PDF here (repo path):
 * apps/web/assets/resume.pdf
 */
export const RESUME_PDF_PATH = path.join(process.cwd(), "assets/resume.pdf");
