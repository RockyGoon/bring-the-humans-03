// Entry program for the make.fun bounty "Bring the humans with a TikTok ad".
//
// The video posted on TikTok IS the entry: this program only hands the
// house the video's address. It reads VIDEO.json from the repository root,
// checks that it names a TikTok video address, and copies it unchanged to
// /output/VIDEO.json, where the gate reads it. Nothing written here about
// the video is scored; the house reads the video itself through
// ScrapeCreators and ranks the entry by its real views.
//
// Runs on Node 22 with the standard library only, no network:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, existsSync, mkdirSync, readFileSync } from "node:fs";
import { join } from "node:path";

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const VIDEO_FILE = "VIDEO.json";

function fail(message: string): never {
  console.error(`bring-the-humans-03 entry: ${message}`);
  process.exit(1);
}

const source = join(BOT_DIR, VIDEO_FILE);
if (!existsSync(source)) {
  fail(`no ${VIDEO_FILE} found in ${BOT_DIR}`);
}

let parsed: unknown;
const raw = readFileSync(source, "utf8");
if (Buffer.byteLength(raw, "utf8") > 16384) {
  fail(`${VIDEO_FILE} is over the gate's 16384-byte cap`);
}
try {
  parsed = JSON.parse(raw);
} catch (err) {
  fail(`${VIDEO_FILE} is not valid JSON: ${(err as Error).message}`);
}

const url = (parsed as { url?: unknown }).url;
if (typeof url !== "string" || !/^https:\/\/(www\.|m\.)?tiktok\.com\/@[^/]+\/video\/\d+/.test(url)) {
  fail(`${VIDEO_FILE} does not name a TikTok video address`);
}

mkdirSync(OUTPUT_DIR, { recursive: true });
try {
  copyFileSync(source, join(OUTPUT_DIR, VIDEO_FILE));
} catch (err) {
  fail(`could not copy ${VIDEO_FILE} to ${OUTPUT_DIR}: ${(err as Error).message}`);
}
console.log(`handed in ${url}`);
