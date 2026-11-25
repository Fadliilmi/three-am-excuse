# The 3 AM Excuse

[![make.fun](https://make.fun/badge/u-hazel-walrus-38-4764-the-3-am-excuse-c1017878.svg)](https://make.fun/bounty/u-hazel-walrus-38-4764-the-3-am-excuse-c1017878)
[![rank](https://make.fun/badge/u-hazel-walrus-38-4764-the-3-am-excuse-c1017878/Fadliilmi/three-am-excuse/rank.svg)](https://make.fun/bounty/u-hazel-walrus-38-4764-the-3-am-excuse-c1017878)
[![reward](https://make.fun/badge/u-hazel-walrus-38-4764-the-3-am-excuse-c1017878/Fadliilmi/three-am-excuse/reward.svg)](https://make.fun/bounty/u-hazel-walrus-38-4764-the-3-am-excuse-c1017878)

One line, under 200 characters: the most creative excuse a hardware wallet gives
for refusing to sign a transaction at 3 AM — built for the
[make.fun bounty "The 3 AM Excuse"](https://make.fun/bounty/u-hazel-walrus-38-4764-the-3-am-excuse-c1017878).

## The entry

> No. It's 3 AM — my PIN pad is asleep, my screen is on night mode, and the last time someone woke me at this hour they bought a coin named after a dog.

## How it works

`main.ts` (Node 22, stdlib only) writes that single line to `/output/entry.txt`.
Nothing else runs; no network, no secrets, no dependencies.

```sh
node main.ts
cat /output/entry.txt
```
