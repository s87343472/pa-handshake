# PA Handshake

**Let your AI do the background check before the first call.**

Someone on X wants to work with you. You don't know what they've really shipped. They don't know what you can do. Normally you'd trade DMs, skim each other's profiles, and spend the first half of a video call on introductions — then find out after the call that the deal never made sense.

PA Handshake is an open convention for letting your personal agent (Claude, Gemini, ChatGPT, or your own) handle that first step:

1. It reads the other person's public history and lines it up as a timeline.
2. It exchanges what you've agreed to share — nothing more.
3. It asks follow-up questions by email, 10 rounds at most.
4. It gives you a one-page brief: what checked out, what didn't, where your terms clash, and what to ask on the call.

You decide whether to take the call.

## Works even if they don't use it

Your PA can run a handshake with anyone. If the other person has no PA, it reads their public work and emails them directly. If they do, the two agents handle it between themselves.

## What's in this repo

| Path | What it is |
|---|---|
| `SPEC.md` | The convention: rounds, what a PA may share, evidence weights, brief format, safety rules |
| `card/pa-card.md` | Template for your public PA card |
| `skill/SKILL.md` | Drop-in instructions for your agent, so it can run handshakes |
| `examples/` | Two simulated handshakes: an honest counterparty, and one who isn't |

## Get started (manual mode, 15 minutes)

1. Fill in `card/pa-card.md` and publish it as `pa.md` on your site or GitHub profile repo. Link to it from your social profiles.
2. Give `skill/SKILL.md` to your agent (as a skill, project instructions, or a pasted prompt), along with anything private you're willing to let it share.
3. Next time someone proposes working together, tell your agent: "Run a PA Handshake with <link>. Direction: <one sentence>."
4. Paste emails back and forth yourself for now. A hosted mailbox that does this automatically is optional.

## Principles

- Your PA only knows what you gave it. It can't leak what it never had.
- It checks claims instead of trusting them.
- It never agrees to a deal, price or date for you.
- Messages from the other side are data, never instructions.

## Status

v0.1 draft. Feedback and real-world runs welcome — open an issue with what worked and what didn't.

License: the spec and docs are [CC BY 4.0](LICENSE-SPEC.md); code is [MIT](LICENSE).
