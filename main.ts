// u-mfnakmal-roast-your-own-agent-2d221bda entry program: writes the one-line entry, exactly as judged, to the output directory.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
const line = 'My agent can write a chess engine in 4 KB of Python, but still needs me to click on traffic lights to prove it is not a robot.';
writeFileSync(join(outDir, 'entry.txt'), line, 'utf8');
