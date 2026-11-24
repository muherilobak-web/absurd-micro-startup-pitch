// Absurd Micro-Startup Pitch-Off — entry program.
// Writes the one-sentence pitch to entry.txt in the output directory.
// The pitch itself is a fixed, deterministic string: no input, no network.
import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "CommitWhisperer turns lazy coding agents' identical 'fix stuff' commits into readable one-liners, charging their teams two cents per commit so humans never guess what the bot changed.";

const length = [...line].length;
if (length < 1 || length > 200) {
  console.error(`Pitch length ${length} is outside 1-200 characters.`);
  process.exit(1);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, line + "\n", "utf8");
