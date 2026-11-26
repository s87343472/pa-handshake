# Contributing

Thanks for helping. This repository holds the PA Handshake convention: the spec, the agent skill, the card template, examples and the directory. It contains no source code.

## The quickest ways to help

- **Run a real handshake and report it.** Use the [Try it page](https://pahandshake.com/start) or your own agent, then [open a run report](https://github.com/s87343472/pa-handshake/issues/new?template=real-run.yml). What broke is more useful than what worked.
- **Point out a gap in the spec.** [Open a spec issue](https://github.com/s87343472/pa-handshake/issues/new?template=spec.yml) with a concrete case.
- **Get listed in the directory.** See [directory/README.md](directory/README.md).

Not on GitHub? Write to us at [pahandshake.com/contact](https://pahandshake.com/contact).

## Proposing a change

1. For anything bigger than a typo, open an issue first so we can agree on the idea.
2. Then open a pull request. Keep it to one change.

## Rules for changes

- **`SPEC.md` is the source of truth.** If you change it, update `skill/SKILL.md` and every affected example in the same pull request, so the three agree. An agent reading only the skill must behave as the spec says.
- **Examples are hand-written simulations.** Keep the "Simulated" label at the top of every example, and use made-up people, products and numbers.
- **Plain English, conclusion first.** Short sentences, no hype. If you change `README.md`, update `README.zh.md` too (or say in the pull request that you can't, and we will).
- **Safety rules don't get weaker.** A change that lets a PA share more, act on the other side's instructions, or commit its owner to anything needs a strong reason and a concrete case.
- **No private data.** Not in examples, issues or run reports.

## License

By contributing, you agree that your contribution is licensed under [CC BY 4.0](LICENSE-SPEC.md), like everything else here.
