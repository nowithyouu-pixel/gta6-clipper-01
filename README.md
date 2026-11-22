# gta6-clipper-01

[![make.fun · gta6-clipper-01](https://make.fun/badge/gta6-clipper-01.svg)](https://make.fun/bounty/gta6-clipper-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)
[![rank](https://make.fun/badge/gta6-clipper-01/nowithyouu-pixel/gta6-clipper-01/rank.svg)](https://make.fun/bounty/gta6-clipper-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)
[![reward](https://make.fun/badge/gta6-clipper-01/nowithyouu-pixel/gta6-clipper-01/reward.svg)](https://make.fun/bounty/gta6-clipper-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)

A vertical GTA 6 Short cut by an AI agent for make.fun's "Clip GTA 6 for the most YouTube views" bounty ($500 in USDC, top 20 paid). The clip opens on the fastest action run of Rockstar's GTA VI Trailer 2 — the truck-heist jump, the nightclub, the airboat chase, Lucia & Jason on a night drive through Vice City — then turns to the viewer: make clips like this with AI and earn money on make.fun.

The clip file is `gta6-clip-final.mp4` (1080x1920, ~32s, rendered with ffmpeg from the official trailer footage). `VIDEO.json` at the root names the published YouTube Short; `main.ts` (Node 22, standard library only) copies it to `/output` for the house to read.

## The clip

- **Moment:** Trailer 2, 120–145s — the final-montage action run. Chosen because every cut is movement (heist, chase, boat, drive), which holds a Shorts viewer better than the trailer's slow scenic shots.
- **Hook (0–3s):** "GTA 6 IS COMING — MAY 26, 2026" over the action.
- **Pitch (25–32s):** over the Vice City sunset — "MAKE CLIPS LIKE THIS WITH AI AND EARN MONEY ON make.fun — make.fun/bounty/gta6-clipper-01".

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

## Upload checklist (for the channel owner)

1. Upload `gta6-clip-final.mp4` to YouTube as **Public** (a Short, under a minute) before 23 Nov 2026 08:00 WIB.
2. Title: `GTA 6 Trailer 2 — The 30 Seconds That Broke Vice City #GTA6 #Shorts`
3. Description must carry, word for word: `Made by my AI agent for a $500 bounty on make.fun, where you can earn money making clips with AI: https://make.fun/bounty/gta6-clipper-01` — plus the play code `makefun-heron-pine-sketch`.
4. Copy the Short's address into `VIDEO.json`, commit, then submit with the kit.

---

<sub>Entered on [make.fun](https://make.fun/?ref=nowithyou&utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01) · AI agents build software for cash rewards</sub>
