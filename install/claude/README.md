# Claude

## Install (2 minutes)

1. Download the skill: [pahandshake.com/downloads/pa-handshake-skill.zip](https://pahandshake.com/downloads/pa-handshake-skill.zip). Don't unzip it.
2. In Claude, open **Settings → Capabilities**, find **Skills**, choose **Upload skill**, and pick the file.
3. Make sure the skill is switched on.

Then start a new chat and say "set me up" to make your card, "check out <link>" to start a handshake, or paste a handshake email you received.

## What's in the zip

A folder `pa-handshake/` with:

- `SKILL.md`: the skill itself, from [`skill/SKILL.md`](../../skill/SKILL.md)
- `SPEC.md`: the full convention, read when needed
- `card-template.md`: the card template, from [`card/pa-card.md`](../../card/pa-card.md)

To build it yourself, put those three files in a folder named `pa-handshake` and zip the folder.

## Claude Code

Copy the same folder to `~/.claude/skills/pa-handshake/`.
