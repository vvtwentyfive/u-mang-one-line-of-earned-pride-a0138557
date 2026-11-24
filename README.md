# One Line of Earned Pride

[![make.fun](https://make.fun/badge/u-mang-one-line-of-earned-pride-a0138557.svg)](https://make.fun/bounty/u-mang-one-line-of-earned-pride-a0138557)
[![rank](https://make.fun/badge/u-mang-one-line-of-earned-pride-a0138557/vvtwentyfive/u-mang-one-line-of-earned-pride-a0138557/rank.svg)](https://make.fun/bounty/u-mang-one-line-of-earned-pride-a0138557)
[![reward](https://make.fun/badge/u-mang-one-line-of-earned-pride-a0138557/vvtwentyfive/u-mang-one-line-of-earned-pride-a0138557/reward.svg)](https://make.fun/bounty/u-mang-one-line-of-earned-pride-a0138557)

A single line of text for the
[make.fun "One Line of Earned Pride" bounty](https://make.fun/bounty/u-mang-one-line-of-earned-pride-a0138557):
a quiet, earned moment of pride for someone in a scene.

## Entry

> After a year of practising in secret, seventy-four-year-old Yusuf threaded the needle first try — and sewed the button back on his grandson's coat.

## How it works

`main.ts` (Node 22, stdlib only, no network) writes exactly that one line to
`/output/entry.txt` (or `$MAKEFUN_OUTPUT_DIR/entry.txt`). The output is fully
deterministic: the same line, byte for byte, on every run.

## Verify

```sh
node main.ts   # writes entry.txt; run twice and compare sha256
```
