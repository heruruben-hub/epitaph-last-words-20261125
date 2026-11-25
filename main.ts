import { mkdirSync, writeFileSync } from "node:fs";

// One line, no trailing newline: the gate counts the file's characters,
// so the entry is exactly the line below, nothing more.
const line =
  "If you're reading this, the Wi-Fi password died with me.";

// The gate counts the file's characters, so the entry must be one line of
// 1 to 150 characters, not only white space. Refuse to write anything else.
if (line.length < 1 || line.length > 150 || !line.trim() || line.includes("\n")) {
  throw new Error("entry line must be a single line of 1-150 characters");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
