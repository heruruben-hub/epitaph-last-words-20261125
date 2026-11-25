import { mkdirSync, writeFileSync } from "node:fs";

// One line, no trailing newline: the gate counts the file's characters,
// so the entry is exactly the line below, nothing more.
const line =
  "If you're reading this, the Wi-Fi password died with me.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
