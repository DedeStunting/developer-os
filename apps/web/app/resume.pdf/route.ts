import React from "react";

import { renderToBuffer } from "@react-pdf/renderer";
import { getResume } from "@developer-os/core/content";
import { ResumePdfDocument } from "@developer-os/ui/pdf";

export const dynamic = "force-dynamic";

export async function GET() {
  const resume = getResume();
  const buffer = await renderToBuffer(
    React.createElement(ResumePdfDocument, { resume }) as Parameters<typeof renderToBuffer>[0],
  );

  return new Response(new Uint8Array(buffer), {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": 'attachment; filename="chiedu-david-resume.pdf"',
      "Cache-Control": "no-store",
    },
  });
}
