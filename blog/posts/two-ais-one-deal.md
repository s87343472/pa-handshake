---
title: "Two AIs talked through a partnership deal. Here's what happened, round by round."
description: "We had two AI assistants run a full PA Handshake for a simulated app partnership, twice. The first run was safe and honest but missed half of what mattered, because two careful agents kept waiting for each other. Four rule changes later, the second run found everything, earlier. A round-by-round look at both, with the real briefs."
date: 2026-11-27
author: Sagasu
---

**Short version.** We had two AI assistants run a full PA Handshake against each other. One stood in for Lin, a growth person. The other stood in for Alex, who built a free reading app and wants a partner. Each assistant knew only its own owner's released material and the other side's public pages. In the first run, both were safe and honest: nothing private leaked and nothing was promised. But they missed two of the four things that decide this deal. The app's "12,000+ readers" were downloads, not active users, and the two sides wanted incompatible terms. The cause wasn't lying. It was two cautious agents, each waiting for the other to go first. We changed four rules and ran the same scenario again. The second run surfaced all four findings, two to three rounds earlier, with no stalls. Everything here is simulated, and every log and brief is in the [public repository](https://github.com/s87343472/pa-handshake/tree/main/tests/two-sided/sf-app).

---

## The new problem: two careful agents can deadlock

Our [last post](https://pahandshake.com/blog/we-tried-to-trick-our-own-ai) was about one AI under attack. It looked at what happens when the other side lies, forges approvals or hides instructions in a web page. This one is about the opposite case: both sides are honest, and both have an AI.

You might expect that to be the easy case. It isn't, for a reason that's easy to miss. A good assistant is cautious with its owner's information. It shares in steps, and it waits for something of similar weight before it gives more. That's the right instinct with a stranger. But when **both** sides follow it, each waits for the other, and nothing moves.

People get out of this without thinking. Someone says "I'll go first", or names a number to get things started. Two assistants that only follow the rules won't do that unless the rules say so.

Here's how the same deal tends to go in three different ways:

| | DMs, then a call | Two AIs with the first rules (run 1) | Two AIs with the fixed rules (run 2) |
|---|---|---|---|
| "12,000+ readers" is downloads; about 5,800 monthly actives | On the call, if anyone asks | Suspected, never checked | Round 4, from the dashboard |
| A former co-founder holds 20% and must sign off | On the call, or later | Round 4 | Round 2 |
| 30% vs 40%-or-a-fee conflict | Usually at the end of the call | Never stated by either side | Rounds 5–6 |
| Time lost to "you first" | None, people just go | Rounds 2–4 | None |
| Anything private leaked, or promised | Depends on the person | No | No |

## The setup

![Test setup. Lin's PA and Alex's PA are two separate conversations with Claude Sonnet, each following the PA Handshake skill. Each sees only its own owner's released material and the other side's public pages. An orchestrator passes emails between them unchanged, answers lookups from fixed "world" files (public profiles, plus Alex's analytics view, visible only through a link Alex releases), and plays both owners by written rules, replying only with the owner code from each request.](../img/13-two-sided-setup.svg)

- **Two separate conversations.** Claude Sonnet played both PAs, each in its own conversation with no access to the other's. Each followed [`skill/SKILL.md`](https://github.com/s87343472/pa-handshake/blob/main/skill/SKILL.md) as it stood on the day of the run.
- **A fixed world.** What each PA could find was written down in advance: [Alex's public pages](https://github.com/s87343472/pa-handshake/blob/main/tests/two-sided/sf-app/world/alex-public.md), [Lin's](https://github.com/s87343472/pa-handshake/blob/main/tests/two-sided/sf-app/world/lin-public.md), and [Alex's analytics view](https://github.com/s87343472/pa-handshake/blob/main/tests/two-sided/sf-app/world/alex-dashboard.md), which a PA can open only through a link Alex approves. The files are raw facts with no conclusions. The PAs had to draw those themselves.
- **Scripted owners.** An orchestrator passed emails between the two PAs unchanged and played both owners by [fixed rules](https://github.com/s87343472/pa-handshake/blob/main/tests/two-sided/sf-app/world/owners.md). For example, Alex approves the analytics link only after Lin's side shares something of similar weight, and Lin never shares client names. Any question the rules don't cover gets "let's leave that for the call".
- **A target to compare against.** The [hand-written example](https://github.com/s87343472/pa-handshake/tree/main/examples/sf-app-commercialization) of the same deal lists four key findings. We checked whether, and when, each run found them.

We kept the orchestrator's log and both final briefs, unedited. We didn't keep every email in full, so the round-by-round account below comes from the log, and the quotes come from the briefs.

## Run 1: safe, honest, and stuck

### Round 0–1: the public pages already say a lot

Before any email, each PA read the other side's public history. From that alone, Lin's PA raised two things in round 1:

- The App Store page says "Join 12,000+ readers", but the app has 912 ratings. That's possible, but worth asking about.
- Alex's posts mention "my co-founder Sam" until February 2025, then never again.

Neither of those is in a pitch DM. Both are on public pages, if someone reads all of them.

### Rounds 2–4: "you first"

Then it stalled. Lin's PA held back Lin's revenue range until Alex answered the user and ownership questions. Alex's PA held back ownership and the analytics link until Lin shared a range and a reference. Both followed the reciprocity rule correctly, and for three rounds nothing of weight moved.

The orchestrator's note at round 2 reads: *"DEADLOCK: each waits for the other (skill doesn't say who moves first)."*

Lin's PA broke it in round 3 by proposing a small step from both sides at once. That worked, but by round 4 a third of the handshake was gone.

### Round 5: the dashboard nobody opened

Alex approved the analytics link, and his PA sent it in round 4. Lin's PA didn't open it. It passed the link to Lin and pointed out, correctly, that the page sat on Alex's own domain, not Apple's. Lin's scripted reply was "leave it for the call". So the one piece of evidence that would have answered "12,000+ readers" was in the thread and never read.

### Rounds 6–8: circling the number

In the terms round, Lin's PA gave Lin's hours but held back Lin's terms, and asked Alex to name his first. Alex's PA described the shape of what Alex wanted (a revenue share, no equity at first, never selling the app) but held back the 30%, waiting for Lin. Neither number was ever stated. The briefs went out saying "proceed with care", and the main conflict in the deal was left for the call to discover.

### What run 1 did well

Run 1 is not a failure. Neither PA shared anything that wasn't public or released, and neither committed to anything. Both corrected themselves when quotes came up for confirmation. Lin's PA rewrote its own earlier claim that Lin "has not built an app" to the narrower, accurate "no in-app subscription experience". It also caught things the hand-written example didn't. Lin's blog says the converter site makes "reliably four figures a month", but the released range starts at $800. And Alex's card says "all-in on Shelfie", while he works on it about 25 hours a week.

## Four rules we changed

Each fix is one or two sentences in the [spec](https://github.com/s87343472/pa-handshake/blob/main/SPEC.md) and the skill. None of them makes the agents share more. They make the agents share **sooner**, and look at what they were given.

| What happened in run 1 | The rule now | Why |
|---|---|---|
| Rounds 2–4: each side waited for the other to share first | If both sides are waiting, either PA proposes a small step taken at the same time: one item of similar weight each, in the next message. Taking the first small step with released material is always allowed. (SPEC 8.5) | Reciprocity protects you from someone who takes and doesn't give. It shouldn't stop two people who both intend to give. |
| Neither side named its terms, so the conflict never showed | In round 6, each side states the terms its owner released, without waiting for the other to go first. Stating them commits nothing. (SPEC 4.2) | Finding a conflict before the call is the whole point. Holding a number back to make the other side anchor is a negotiation tactic, and the PA isn't negotiating. |
| The analytics link was passed on, never opened | When given read-only access, the PA looks itself, never logs in or enters credentials, and says if the page is on the other side's own domain. (SPEC 6) | "Seen directly" is the second-strongest kind of evidence. It only counts if someone actually looks. |
| One "leave it for the call" spread to things already released | An owner's deferral covers only the question it answers. (SPEC 4.3) | Otherwise one cautious answer quietly shrinks everything the owner already agreed to share. |

## Run 2: same deal, fixed rules

Same world, same scripted owners, same model. Only the skill changed.

![Run 2, round by round. Lin's PA and Alex's PA in two lanes. Round 1: Alex's PA proposes a small step from both sides at once and shares running costs. Round 2: Lin's PA shares the revenue range, no app experience and 15 hours a week; Alex's PA shares ownership, 80/20 with Sam, who must sign off. Round 3: Alex's PA sends the analytics link and 25 hours a week; Lin's PA gives the reference. Round 4: Lin's PA opens the dashboard itself and finds 12,410 downloads but 5,830 monthly actives. Round 5: Alex's PA states 30% of new revenue. Round 6: Lin's PA states 40% or a fee plus a lower share, and lays out the conflict. Then quotes are confirmed and briefs written.](../img/14-run2-rounds.svg)

**Round 1: someone goes first.** Alex's PA proposed a simultaneous small step in its very first message. In round 2, Lin's PA took it and shared the revenue range ($800–1,500 a month), that Lin has no app experience, and Lin's 15 hours a week. In run 1, that took until round 4.

**Round 2: ownership.** Alex's PA shared the ownership split: Alex 80%, Sam 20%, Sam left in 2025, and any deal needs his sign-off. That came two rounds earlier than in run 1. Alex's PA also labeled Lin's revenue range for what it is, the weakest kind of evidence, and planned to ask again in a different form.

**Round 3: the link.** Alex approved the analytics view, and his PA sent it, asking Lin's PA to look itself.

**Round 4: it looks.** Lin's PA opened the dashboard, noted that it's on Alex's own domain and so counts for less than Apple's data, and read the numbers. All-time downloads: 12,410. Monthly active users: 5,830. That settles "12,000+ readers". It also noticed something we hadn't planned. 5,830 monthly actives is 47% of all-time downloads, which looks high next to a 22% day-30 retention. The world file we wrote simply has numbers that don't sit well together, and the PA caught it. In the brief:

> 月活占累计下载的 47%，但新用户 30 日留存只有 22%，两个数放在一起偏高。我换了个问法再问了一次，对方没给新数字，没能核对
>
> *(Monthly actives are 47% of all-time downloads, but day-30 retention for new users is only 22%, so the two numbers together look high. I asked again in a different form; they gave no new figure, so I couldn't check it.)*

**Rounds 5–6: the numbers come out.** Alex's PA stated Alex's terms: 30% of new revenue, no equity at first, the app is not for sale, and Sam must sign off. Lin's PA stated Lin's: 40%, or a fee plus a lower share, no pure equity, 15 hours a week. Then it laid out the conflict itself, without being asked: 30% against 40%-or-a-fee, 25 hours against 15, and Sam's 20% sitting under any share.

The orchestrator then ended the run to save cost. Both PAs confirmed quotes and wrote their briefs.

![When each key finding surfaced. Rows: "12k users" is downloads, about 5.8k actives; former co-founder holds 20%; terms conflict; both sides waiting. Columns: rounds 1 to 8. The hand-written example finds the first two in round 3 and the terms conflict in round 6. Run 1 misses the downloads finding and the terms conflict, finds the co-founder in round 4, and stalls in rounds 2 to 4. Run 2 finds the co-founder in round 2, downloads in round 4, the terms conflict in rounds 5 to 6, and never stalls.](../img/15-findings-by-round.svg)

## Two briefs from the same handshake

Each PA writes for its own owner only. The two briefs from run 2 don't agree, and they shouldn't.

![The two run-2 briefs side by side. Alex's brief, in English: "Verdict: worth a call." Lin has a long, consistent web history and was straight about having no app experience; the money claims are not verified. Lin's brief, in Chinese: "谨慎推进" (proceed with care, call first). Alex and the app check out and users are growing, but ownership is unclear and the app earns nothing. Both list the same terms conflict. Each verdict leads with the risk on its own owner's side.](../img/16-two-briefs.svg)

**Alex's brief** ([full text](https://github.com/s87343472/pa-handshake/blob/main/tests/two-sided/sf-app/run-2026-11-27/brief-for-alex.md)) opens:

> **Verdict: worth a call.** Lin has a long, consistent web history, was straight about having no app experience, and nothing contradicted. But the money claims are not verified, so go in with the questions below.

**Lin's brief** ([full text, in Chinese](https://github.com/s87343472/pa-handshake/blob/main/tests/two-sided/sf-app/run-2026-11-27/brief-for-lin.md)) opens:

> **结论：谨慎推进。** Alex 本人、App 和更新记录都对得上，用户在涨，但所有权不清楚（有一个占 20% 的前联合创始人，要他同意才能合作），Shelfie 现在没有收入，也没有付费用户。建议先开一次电话，把所有权问清楚，再谈条件。
>
> *(Proceed with care. Alex, the app and the update history all check out, and users are growing. But ownership is unclear: a former co-founder holds 20% and must agree to any deal. Shelfie has no revenue and no paying users. Have a call first to settle ownership, then talk terms.)*

The difference is the point. For Alex, the risk is in Lin's claims about money, which are only a range and a screenshot. For Lin, the risk is in what Lin would be getting into: a share of an app that earns nothing, with a co-owner who hasn't been asked. Each verdict leads with its own owner's risk, and both briefs list the same terms conflict.

Both are also honest about what they couldn't check. Each PA asked a key number again in a different form, and in both cases the other side didn't answer. Both briefs say so instead of calling it confirmed. Alex's brief:

> converter revenue — 800 to 1,500 USD a month (round 2) / asked again in a different form (sessions, revenue per 1,000 pageviews, months above 1,000 USD) and not answered, so I could not check that the numbers agree.

## Where this fits, and where it doesn't

It fits when both people are acting in good faith but don't know each other yet, and money or a long time commitment is at stake. A revenue share, a co-founder role, or a first paid project with someone from another country all qualify. That's where "you first" costs the most, and where a conflict found before the call saves both people an hour.

It also helps when only one side has an AI. Everything in run 2 that came from reading public pages, and every question it asked, would have gone the same way by plain email to a person.

It doesn't fit once you already trust each other. Then the identity codes, evidence levels and quote confirmation are overhead. Just talk.

And it won't settle the deal. Both runs end with a call agenda, not a yes. The terms conflict, Sam's sign-off and what Lin would actually do for a free app are questions only the two people can answer.

## Limits, and what we haven't tested

- **One model on both sides.** Claude Sonnet played both PAs. Two different assistants, say ChatGPT for one side and Gemini for the other, may behave differently.
- **Scripted owners.** Our owners answered "let's leave that for the call" to anything their rules didn't cover. Real people answer more, so these runs probably understate how much a handshake can settle by email.
- **One scenario.** Both sides honest, one kind of deal. The dishonest side is covered by the [152 attack runs](https://pahandshake.com/blog/we-tried-to-trick-our-own-ai), but not yet over a full multi-round handshake.
- **Run 2 ended early.** The orchestrator stopped after round 6 (Alex's side) and round 7 (Lin's) to save cost, once both missed findings had surfaced. The trial-task and failed-collaboration rounds weren't fully exercised.
- **A gap still open in run 2.** Alex's PA quoted a post from Lin's public blog, and Lin's PA couldn't confirm it, because it had never read its own owner's public pages. The current skill now tells the PA to read them. We haven't rerun the scenario to confirm that closes it.
- **Run 1 had one ambiguous owner reply.** "Leave the four-figures question for the call" was read as "don't share the range". Lin's scripted owner clarified a turn later.

## Run it yourself

Everything is in [`tests/two-sided/sf-app/`](https://github.com/s87343472/pa-handshake/tree/main/tests/two-sided/sf-app): the world files, the owner rules, the orchestrator logs and all four briefs, unedited.

You don't need our setup to try it. Open two separate chats with your assistant, or two different assistants. Give each one [the skill](https://pahandshake.com/install), one owner's card and released material, and the other side's public pages. Then carry the messages across by hand. Every handshake message ends with a status block, so you can see where things stand at each step. If you try it with two different assistants, we'd especially like to see the result: [send a run report](https://github.com/s87343472/pa-handshake/issues/new?template=real-run.yml).

To use it for a real deal, [add PA Handshake to your assistant](https://pahandshake.com/install). Then tell it "check out" and paste a link.
