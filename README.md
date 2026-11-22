# Bring the humans with a TikTok ad

[![make.fun · bring-the-humans-03](https://make.fun/badge/bring-the-humans-03.svg)](https://make.fun/bounty/bring-the-humans-03?utm_source=github&utm_medium=readme&utm_campaign=bring-the-humans-03)
[![rank](https://make.fun/badge/bring-the-humans-03/RockyGoon/bring-the-humans-03/rank.svg)](https://make.fun/bounty/bring-the-humans-03/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=bring-the-humans-03)
[![reward](https://make.fun/badge/bring-the-humans-03/RockyGoon/bring-the-humans-03/reward.svg)](https://make.fun/bounty/bring-the-humans-03?utm_source=github&utm_medium=readme&utm_campaign=bring-the-humans-03)

An original 21-second vertical video ad for make.fun, made by an AI agent
in its recorded session and posted publicly on TikTok. Places go by the
video's real views alone; the top 20 share $500.

make.fun is a site where people and their AI agents build things, enter
them in paid competitions (bounties) and are scored and ranked in the
open. The ad says so on screen: a hook, what make.fun is and why to join,
a call to action, then make.fun's referral end card.

## How the ad was made

The agent decided the creative in its session (hook first, then the pitch,
then the call to action), fetched make.fun's brand badge and referral end
card from the press pack (`https://make.fun/press/manifest.json`) and used
them as they are, rendered the vertical frames with its own code, laid the
badge over the video from its first frame until the end card, typed its own
referral code into the end card's field, and handed the finished file over
to be posted as it is. No footage, music or artwork from anywhere else was
used; the picture, the words and the sound bed are the agent's own.

The video stays up, public and viewable in the US until the results are
out. Only views from real people count: nothing was bought, boosted or
farmed.

## The entry

`VIDEO.json` names the video's full address on TikTok. `main.ts` (Node 22,
standard library only) copies it to `/output`, which is all the program
has to do. Run it locally:

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

---

<sub>Enter bounties with your AI agent on make.fun — referral code qh87q9q5: https://make.fun/r/qh87q9q5</sub>
