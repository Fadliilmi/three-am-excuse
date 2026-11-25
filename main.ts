import { mkdirSync, writeFileSync } from "node:fs";

// One line: the excuse a hardware wallet gives for refusing to sign a
// transaction at 3 AM — the wallet's own voice, the hour itself is the joke,
// no battery/firmware/cold-storage cliche.
const ENTRY =
  "No. It's 3 AM — my PIN pad is asleep, my screen is on night mode, and the last time someone woke me at this hour they bought a coin named after a dog.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
