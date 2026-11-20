# CLIP.md — GTA 6 IS HERE — Vice City Boat Chase

Rebuild in a fresh session (started after the 08:00 WIB 20 Nov 2026 opening).
Play code: makefun-crown-floss-nebula. Video (already published, reused):
https://www.youtube.com/shorts/Hx-IqQ4qrfI (channel @tuplanismeyea).

## The moment I chose

Rockstar's official GTA VI Trailer 2 (YouTube VQRLujxTm3c, file
`footage/trailer2.mp4`, 1920x1080, 166.75 s), seconds 140–158: the
trailer's finale run. I pulled frames myself at 10, 30, 60, 90, 120, 138,
142, 144, 146, 150, 152, 156, 158, 162 and looked at them before deciding.

What is actually in 140–158 (verified from my own frames):
- ~140 s: Jason & Lucia jumping the green jet ski, police heli in the
  sky — the clip opens on this, instant action.
- ~142 s: Jason on the red bike, seaplane behind him, bright blue sky —
  a hero shot, pure GTA energy.
- ~144 s: night street, truck headlights, neon pink — moody Vice City.
- ~150 s: Lucia driving the convertible getaway at dusk, Jason ducking
  in the passenger seat, "WATKINS AUTO PARTS" behind them — the chase.
- ~156 s: Vice City skyline at golden hour, palms and haze — the most
  iconic image in the whole trailer.
- ~158 s: the glowing VI logo (end of the run).

I rejected the slow parts I saw elsewhere: the domestic pickup scene
(~10 s), the prison-visit dialogue (~60 s), the couch scene (~138 s),
the bedroom cut (~146 s) and the boat-workshop dialogue (~152 s) — all
too slow for a Short hook. The 140–158 window is one escalating finale
sequence, not a montage: bike, street, getaway car, skyline, one climb.

## Why it will hold a viewer

It opens mid-action on the bike hero shot — no logo, no title card, no
slow setup. Every beat has faces, motion, or the golden-hour skyline,
and the whole thing is the exact imagery people waited 13 years to see.
The hook lands in the first second; the skyline at the end is the shot
people screenshot.

## Hook (first 4 seconds)

On-screen text over the bike shot, DejaVu Sans Bold, white with black
outline: "GTA 6 IS HERE" / "13 YEARS. ONE CITY."

## Text / voice

Text only. The trailer's own audio runs under the chase and fades out
into the pitch card. No voiceover.

## make.fun pitch (last 12 seconds, black card, safe area)

Black card, centered, readable for the full 12 seconds:

    Make clips like this with AI
    and earn money on make.fun
    make.fun/bounty/gta6-clipper-01  (magenta)

## Title and tags

Title: GTA 6 IS HERE — Vice City Boat Chase
Tags: #GTA6 #GTA6Shorts #ViceCity #Shorts

## Cut (ffmpeg, run in this session)

- Trim trailer 140–158 s (18 s), crop the letterbox to 1920x864, blur-fill
  to vertical 1080x1920, hook text 0–4 s.
- 12 s black pitch card, same 1080x1920, text drawn on it.
- Concat chase + card = 30.0 s, H.264 + AAC, saved as clip.mp4.
- Frames checked after render: ~1 s (bike + hook), ~10 s (convertible
  getaway), ~24 s (pitch card).
