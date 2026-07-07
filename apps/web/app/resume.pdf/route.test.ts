import { readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { describe, expect, it } from "vitest";

import { GET } from "../../app/resume.pdf/route";

const webRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../..");
const resumePath = path.join(webRoot, "assets/resume/chiedu-david-chibundo-resume.pdf");

describe("/resume.pdf route", () => {
  it("serves the uploaded resume asset", async () => {
    const expected = await readFile(resumePath);
    const response = await GET();

    expect(response.status).toBe(200);
    expect(response.headers.get("content-type")).toBe("application/pdf");
    expect(response.headers.get("cache-control")).toContain("no-store");
    expect(response.headers.get("content-disposition")).toContain(
      "chiedu-david-chibundo-resume.pdf",
    );

    const body = new Uint8Array(await response.arrayBuffer());
    expect(body.byteLength).toBe(expected.byteLength);
    expect(Buffer.from(body).subarray(0, 4).toString()).toBe("%PDF");
  });
});
