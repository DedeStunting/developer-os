import { createHash } from "node:crypto";
import { readFile, stat } from "node:fs/promises";
import path from "node:path";

export const dynamic = "force-dynamic";

const RESUME_FILENAME = "chiedu-david-chibundo-resume.pdf";
const RESUME_PATH = path.join(process.cwd(), "assets/resume/chiedu-david-chibundo-resume.pdf");

export async function GET() {
  try {
    const [buffer, stats] = await Promise.all([readFile(RESUME_PATH), stat(RESUME_PATH)]);
    const etag = `"${createHash("md5").update(buffer).digest("hex")}"`;

    return new Response(new Uint8Array(buffer), {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `attachment; filename="${RESUME_FILENAME}"`,
        "Cache-Control": "no-store, no-cache, must-revalidate",
        Pragma: "no-cache",
        ETag: etag,
        "Last-Modified": stats.mtime.toUTCString(),
      },
    });
  } catch {
    return new Response("Resume PDF not found.", { status: 404 });
  }
}
