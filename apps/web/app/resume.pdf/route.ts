import { readFile } from "node:fs/promises";
import path from "node:path";

const RESUME_FILENAME = "chiedu-david-chibundo-resume.pdf";

export async function GET() {
  const filePath = path.join(process.cwd(), "public", "resume.pdf");

  let buffer: Buffer;
  try {
    buffer = await readFile(filePath);
  } catch {
    return new Response("Resume PDF not found. Add your file at apps/web/public/resume.pdf.", {
      status: 404,
    });
  }

  return new Response(new Uint8Array(buffer), {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": `attachment; filename="${RESUME_FILENAME}"`,
      "Cache-Control": "public, max-age=3600, must-revalidate",
    },
  });
}
