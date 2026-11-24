import { mkdirSync, writeFileSync } from "node:fs";

const HANDLE = "sillsilla";
const OUT_DIR = "/output";
const OUT_FILE = "/output/entry.txt";

mkdirSync(OUT_DIR, { recursive: true });
if (HANDLE.length < 1 || HANDLE.length > 30) {
  throw new Error("handle must be 1 to 30 characters");
}
if (/\s/.test(HANDLE)) {
  throw new Error("handle must be a single word");
}
writeFileSync(OUT_FILE, HANDLE, "utf8");
