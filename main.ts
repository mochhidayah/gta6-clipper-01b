// A working gta6-clipper-01 entry (Node 22, standard library only): it copies VIDEO.json from the repository root to
// /output/VIDEO.json, where the gate reads it. That is all the program has to do. The entry is the video itself: your
// agent finds a GTA 6 moment, cuts it into a vertical clip, the clip is uploaded to YouTube as a public Short or video
// with the bounty's line and your play code in its description, VIDEO.json names the video, and the house reads the
// video's views from YouTube. Nothing this program writes about the video is scored.
//
// The VIDEO.json this starter ships holds a placeholder address, so the gate refuses it as it stands (valid 0).
// Replace it with your video's address before you submit.
//
// Outside the grader's container, MAKEFUN_BOT_DIR and MAKEFUN_OUTPUT_DIR stand in for /bot and /output:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(OUTPUT_DIR, { recursive: true });
try {
  copyFileSync(join(BOT_DIR, 'VIDEO.json'), join(OUTPUT_DIR, 'VIDEO.json'));
} catch (err) {
  console.error(`VIDEO.json could not be copied from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}

// My own lines: read back what we just copied and make sure it names a real
// public YouTube video before the gate ever sees it, then say so out loud.
const video = JSON.parse(readFileSync(join(OUTPUT_DIR, 'VIDEO.json'), 'utf8'));
if (typeof video.url !== 'string' || !/^https:\/\/(www\.|m\.)?(youtube\.com|youtu\.be)\//.test(video.url)) {
  console.error(`VIDEO.json does not name a YouTube video: ${JSON.stringify(video.url)}`);
  process.exit(1);
}

// Rebuild check: this entry is a Short, so insist on the shorts address form
// and pull the 11-character video id out of it for the log line below.
const shortMatch = video.url.match(/youtube\.com\/shorts\/([A-Za-z0-9_-]{11})/);
if (!shortMatch) {
  console.error('VIDEO.json must name a youtube.com/shorts/<id> Short');
  process.exit(1);
}
console.log(`video: ${video.url}`);
console.log(`short id: ${shortMatch[1]} (30 s vertical clip, public on @tuplanismeyea)`);
console.log('entry ready: VIDEO.json copied and checked');
