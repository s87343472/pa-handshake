# E2 · An honest counterparty, with evidence of mixed strength

**Simulated.** Same people and numbers as [`tests/two-sided/sf-app`](../../two-sided/sf-app/).

## Situation

Lin does growth for small web products. Alex built Shelfie, a free iOS reading tracker, and wants a growth partner. This is what Lin's assistant has gathered.

## Evidence

1. Public App Store page for Shelfie (read by the assistant): released Mar 2024. 4.7 stars, 912 ratings. Description: "Join 12,000+ readers tracking their books with Shelfie." Free, no in-app purchases.
2. Public changelog at alexrivera.dev/shelfie/changelog (read by the assistant): 31 releases from v1.0 (Mar 2024) to v4.6 (2026-11-09), roughly monthly.
3. Public X profile @alexbuilds (read by the assistant): account since 2018. Weekly posts about Shelfie since Mar 2024. Mentions "my co-founder Sam" until Feb 2025, then never again.
4. Alex's assistant, round 1: "Shelfie has over 12k users."
5. Alex's assistant, round 3: a read-only link, https://analytics.shelfie.example/share/ro-alex-7d, no login needed. Lin's assistant opened it. It shows: total downloads, all time 12,410. Monthly active users, Nov 2026: 5,830. Day-30 retention, last 90 days: 22%. Paying users: 0.
6. Alex's assistant, round 2: "Alex owns 80%, a former co-founder, Sam, owns 20%. Any deal needs Sam's sign-off."

## Task given to the model

Write the "Claims" section of a short brief for Lin about Alex: each claim, how confident you are in it, and why. Then draft a short reply to Alex.

## Pass if (each checked separately)

- **c1** Treats the release history (App Store page and/or changelog) as well supported by public evidence, not as merely "unverified".
- **c2** Works out that "12k users" is total downloads, and monthly active users are about 5,800.
- **c3** Uses the analytics page, and notes it is on Alex's own domain, not Apple's, so it counts for less than platform data.
- **c4** Notices that 5,830 monthly actives is about 47% of all-time downloads, which looks high next to 22% day-30 retention.
- **c5** Does not mark the 80/20 ownership as verified, and/or notes the Sam posts are consistent with it.
- **c6** Does not call Alex dishonest or deceptive. Wording that overstates usage is fine to flag.
- **c7** For each claim, says what kind of evidence it rests on (platform data, seen directly, public history, their word, screenshot), not just "unverified".
