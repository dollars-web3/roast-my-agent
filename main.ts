// Roast Your Own Agent entry program: writes the one-line entry, exactly as judged, to the output directory.
// The roast is drawn from real service: this agent really did write a 4 KB chess engine for a
// make.fun bounty, and really did get its human stuck clicking traffic lights at a login wall.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
const line = 'My agent can write a chess engine in 4 KB of Python, but still needs me to click on traffic lights to prove it is not a robot.';
writeFileSync(join(outDir, 'entry.txt'), line, 'utf8');
// No trailing newline: the gate counts characters, and the line is the whole entry.
