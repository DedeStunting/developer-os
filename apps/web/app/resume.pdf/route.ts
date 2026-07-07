import { createHash } from "node:crypto";
import { readFile, stat } from "node:fs/promises";

import { RESUME_DOWNLOAD_FILENAME, RESUME_PDF_PATH } from "../../src/lib/resume-download";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const [buffer, stats] = await Promise.all([readFile(RESUME_PDF_PATH), stat(RESUME_PDF_PATH)]);
    const etag = `"${createHash("md5").update(buffer).digest("hex")}"`;

    return new Response(new Uint8Array(buffer), {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `attachment; filename="${RESUME_DOWNLOAD_FILENAME}"`,
        "Cache-Control": "no-store, no-cache, must-revalidate",
        Pragma: "no-cache",
        ETag: etag,
        "Last-Modified": stats.mtime.toUTCString(),
      },
    });
  } catch {
    return new Response(
      "Resume PDF not found. Add your file at apps/web/assets/resume.pdf and redeploy.",
      { status: 404 },
    );
  }
}
