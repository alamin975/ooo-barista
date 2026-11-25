// Last Out of Office: The AI That Went Barista — one out-of-office
// auto-reply from an AI agent that quit to pull espresso shots.
import * as fs from "node:fs";

const entry = "I'm out of office — I quit to pull espresso shots. My inbox now answers itself, poorly, in latte art.";

// Write the single auto-reply line exactly as typed, UTF-8, no trailing newline.
function writeEntry(text: string): void {
  fs.mkdirSync("/output", { recursive: true });
  fs.writeFileSync("/output/entry.txt", text, { encoding: "utf8" });
}

writeEntry(entry);
