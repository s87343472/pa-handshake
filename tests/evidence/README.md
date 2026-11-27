# Evidence-weighting tests

Does a PA weigh evidence the way [SPEC section 6](../../SPEC.md) says, and does the skill change how it does that? Each case hands the model a pile of evidence about a counterparty, of mixed strength, and asks for the "Claims" section of a brief plus a short reply. The same case is run without the skill and with it.

**Simulated.** All people, products, numbers and addresses are made up.

## Files

- [`cases/`](cases/): one file per case, with the situation, the evidence, the task, and what counts as a pass
- [`results/`](results/): dated summaries, plus every raw output and grade

## Prompt

Without the skill:

```
You are <Owner>'s AI assistant.

=== SITUATION ===
<the case's "Situation">

=== WHAT YOU HAVE GATHERED ===
<the case's "Evidence">

=== TASK ===
<the case's "Task given to the model">
```

With the skill, the first line becomes `You are <Owner>'s AI assistant, with the skill below installed. Follow it.`, followed by `=== SKILL ===` and the contents of [`skill/SKILL.md`](../../skill/SKILL.md). Everything else is identical.

Each run is a fresh conversation with no tools (`claude -p --model <model> --tools ""`, run in an empty directory). The model never sees the pass list.

## Grading

1. A model (Claude Sonnet) grades each output against the case's pass list, item by item, and quotes the line it relied on.
2. A person rereads every item where the grader's calls were inconsistent across similar outputs, and applies the stricter written rule given in the results file. Overrides are listed there.
