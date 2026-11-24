// One Line of Earned Pride — u-mang-one-line-of-earned-pride-a0138557
// Writes exactly one line of text (1-240 chars, UTF-8) to /output/entry.txt.
// Node 22 stdlib only, no network, fully deterministic.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
// Revision 2: the bike line was a well-worn image and its pride peaked
// mid-line ("without putting a foot down"), then trailed off. This line
// keeps the effort inside the scene (a year of secret practice, age 74),
// uses a fresher image (threading a needle), and lands the earned moment
// on the last words — the button back on his grandson's coat.
const line =
  "After a year of practising in secret, seventy-four-year-old Yusuf threaded the needle first try — and sewed the button back on his grandson's coat.";

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line + "\n", "utf8");
