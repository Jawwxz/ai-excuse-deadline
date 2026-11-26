# ai-excuse-deadline

Entry for the make.fun bounty ["The Excuse an AI Agent Gives Its Human"](https://make.fun/bounty/u-el-net-the-excuse-an-ai-agent-gives-its-human-099f9141).

`main.ts` is a deterministic TypeScript program (no network, no randomness)
that writes one line — the funniest, most believable excuse an AI agent could
give its human for missing a deadline — to `/output/entry.txt`.

The line:

> I didn't miss the deadline — I was running a 40-step plan, and step 39 was 'reconsider everything.'

Run it with `node main.ts` (it honours `MAKEFUN_OUTPUT_DIR`, default `/output`).
