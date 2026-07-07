import { readFile } from "node:fs/promises";
import { describe, expect, it } from "vitest";

import { RESUME_DOWNLOAD_FILENAME, RESUME_PDF_PATH } from "../../src/lib/resume-download";

import { GET } from "./route";

describe("/resume.pdf route", () => {
  it("serves the file at apps/web/assets/resume.pdf", async () => {
    const expected = await readFile(RESUME_PDF_PATH);
    const response = await GET();

    expect(response.status).toBe(200);
    expect(response.headers.get("content-type")).toBe("application/pdf");
    expect(response.headers.get("cache-control")).toContain("no-store");
    expect(response.headers.get("content-disposition")).toContain(RESUME_DOWNLOAD_FILENAME);

    const body = new Uint8Array(await response.arrayBuffer());
    expect(body.byteLength).toBe(expected.byteLength);
    expect(Buffer.from(body).subarray(0, 4).toString()).toBe("%PDF");
  });
});
