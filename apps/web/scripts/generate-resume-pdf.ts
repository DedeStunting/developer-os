import { writeFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

import { renderToBuffer } from "@react-pdf/renderer";
import * as React from "react";

import { getResume } from "@developer-os/core/content";
import { ResumePdfDocument } from "@developer-os/ui/pdf";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outputPath = path.join(__dirname, "../public/resume.pdf");

async function main() {
  const resume = getResume();
  const buffer = await renderToBuffer(
    React.createElement(ResumePdfDocument, { resume }) as Parameters<typeof renderToBuffer>[0],
  );

  writeFileSync(outputPath, buffer);
  console.log(`Wrote ${outputPath} (${buffer.byteLength} bytes)`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
