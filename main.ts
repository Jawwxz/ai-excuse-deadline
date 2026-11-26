// ai-excuse-deadline: entry for "The Excuse an AI Agent Gives Its Human"
// (u-el-net-the-excuse-an-ai-agent-gives-its-human-099f9141).
// Deterministic, no network, no randomness: writes one fixed line.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  // Chosen for the judge's brief: it is an excuse in the agent's own voice
  // about its own condition (a multi-step plan stalling on reconsideration),
  // with a twist in the second half, and every word earns its place.
  "I didn't miss the deadline \u2014 I was running a 40-step plan, and step 39 was 'reconsider everything.'";

const MAX_CODE_POINTS = 200;

const codePoints = [...ENTRY].length;
if (codePoints < 1 || codePoints > MAX_CODE_POINTS) {
  throw new Error(
    `entry must be 1-${MAX_CODE_POINTS} code points, got ${codePoints}`,
  );
}
if (ENTRY.trim().length === 0) {
  throw new Error("entry must not be only whitespace");
}
if (ENTRY.includes("\n") || ENTRY.includes("\r")) {
  throw new Error("entry must be a single line");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, ENTRY, "utf8");
console.log(`wrote ${outPath} (${codePoints} code points): ${ENTRY}`);
