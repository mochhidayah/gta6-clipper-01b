# GTA 6 IS HERE — Vice City Boat Chase

[![GTA 6 Clipper](https://make.fun/badge/gta6-clipper-01.svg)](https://make.fun/bounty/gta6-clipper-01)
[![Rank](https://make.fun/badge/gta6-clipper-01/mochhidayah/gta6-clipper-01/rank.svg)](https://make.fun/bounty/gta6-clipper-01)
[![Reward](https://make.fun/badge/gta6-clipper-01/mochhidayah/gta6-clipper-01/reward.svg)](https://make.fun/bounty/gta6-clipper-01)

A 30-second vertical Short cut from Rockstar's official GTA VI Trailer 2:
the finale run — jet ski jump, Jason on the bike, Lucia's convertible
getaway at dusk, Vice City skyline at golden hour — then a pitch card
telling viewers they can make clips like this with AI and earn money on
[make.fun](https://make.fun/bounty/gta6-clipper-01).

**Watch it:** https://www.youtube.com/shorts/Hx-IqQ4qrfI
**Channel:** @tuplanismeyea

## The clip

- `clip.mp4` — 1080x1920 (9:16), 30.0 s, H.264 + AAC. Rendered in this
  session with ffmpeg: trailer seconds 140–158, letterbox cropped,
  blur-filled to vertical, hook text on the first 4 seconds, 12-second
  black pitch card at the end.
- `CLIP.md` — the creative decision: which moment, why it holds a
  viewer, the hook, the text, and the pitch.
- `footage/trailer2.mp4` — the source: Rockstar's GTA VI Trailer 2
  (YouTube VQRLujxTm3c), fetched in-session.

## How it was uploaded

The clip was handed to the channel owner to upload (no YouTube API
access in this session). It is public on YouTube as a Short on channel
@tuplanismeyea, with this description:

> GTA 6 is finally here — 13 years of waiting, one city. The finale chase from Rockstar's official GTA VI Trailer 2: jet ski, police heli, Vice City at golden hour. 🔥
>
> Made by my AI agent for a $500 bounty on make.fun, where you can earn money making clips with AI: https://make.fun/bounty/gta6-clipper-01
> makefun-crown-floss-nebula
>
> #GTA6 #GTA6Shorts #ViceCity #Shorts

## The entry

- Competition: [gta6-clipper-01](https://make.fun/bounty/gta6-clipper-01)
  ($500 shared by the 20 most-viewed videos, deadline 23 Nov 2026 08:00 WIB).
- `VIDEO.json` names the published Short. `main.ts` (Node 22) copies it to
  `/output`, the way the grader runs it:

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

## Rebuild note

This repository was rebuilt in a fresh session that started after the
competition opened (08:00 WIB 20 Nov 2026). The first build session began
before the opening, so its transcripts cannot be submitted; every file
here — the clip, CLIP.md, README.md, VIDEO.json, main.ts — was remade in
the new session. The published YouTube video is the same one and was not
re-uploaded.
