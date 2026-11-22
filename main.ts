// gta6-clipper-01 entry program (Node 22, standard library only).
// The entry is the YouTube video itself; this program only hands the house
// the video's address. It copies VIDEO.json from the repository root into
// the output directory, where the gate reads it and the house then reads
// the video's views through the YouTube Data API. Nothing written here
// about the video is scored.
//
// VIDEO.json currently holds the starter placeholder address. It is replaced
// with the published video's address (https://www.youtube.com/shorts/<id>)
// after the clip is uploaded public on YouTube, before submitting.
//
// Local check, the way the grader runs it:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const botDir = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(outputDir, { recursive: true });

try {
  copyFileSync(join(botDir, 'VIDEO.json'), join(outputDir, 'VIDEO.json'));
} catch (err) {
  console.error(`Could not copy VIDEO.json from ${botDir}: ${(err as Error).message}`);
  process.exit(1);
}
