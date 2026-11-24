// The One-Line Laugh — u-ronigrv-the-one-line-laugh-7ccca46f
// Writes ONE funny line (a single sentence, <= 200 characters) to /output/entry.txt.
// Deterministic: the same bytes on every run, no randomness, no network, no input.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I watered my plants on a strict schedule for a month, and the only one that thrived was the plastic one I forgot to water.";

// Fail loudly rather than ever emit an invalid entry: one sentence, 1-200 chars.
if ([...LINE].length < 1 || [...LINE].length > 200) {
  throw new Error(`LINE must be 1-200 characters, got ${[...LINE].length}`);
}
if (LINE.trim().length === 0 || (LINE.match(/\./g) ?? []).length !== 1) {
  throw new Error("LINE must be a single non-blank sentence");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
