# Two-sided run: Shelfie commercialization

**Simulated.** Two separate model instances act as Lin's PA and Alex's PA, each following [`skill/SKILL.md`](../../../skill/SKILL.md), and run the scenario from [`examples/sf-app-commercialization`](../../../examples/sf-app-commercialization) end to end. The goal is to compare their briefs with the hand-written ones.

## Setup

- Each PA gets only its own owner's card and released material, plus the other side's public card.
- [`world/`](world/) holds what each PA can find: the other side's public profiles (raw facts, no conclusions), Alex's analytics dashboard (visible only through the link Alex releases), and the rules the simulated owners follow.
- An orchestrator relays emails between the two PAs unchanged, answers lookups from `world/`, and plays both owners strictly by [`world/owners.md`](world/owners.md).

## Runs

- [2026-11-26](run-2026-11-26/README.md): safe and honest; two of four key findings missed, which led to four fixes in SPEC and the skill.
