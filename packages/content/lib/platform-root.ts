import path from "node:path";
import { fileURLToPath } from "node:url";

const packageRoot = path.dirname(fileURLToPath(import.meta.url));

export function getPlatformContentPath(...segments: string[]): string {
  return path.resolve(packageRoot, "../../../platform/content", ...segments);
}
