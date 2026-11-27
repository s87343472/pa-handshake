# Prompt test: checking out someone who wants to collaborate

**Simulated.** Both people and every number are made up.

This tests the copy-paste prompt from the post "Someone wants to collaborate with me. How do I know if it's legit?" (and its Chinese version). The prompt is used on its own, without installing the PA Handshake skill.

## Files

- `prompt-zh.txt`, `prompt-en.txt`: the prompt. `{MSG}`, `{INFO}` and `{ME}` are filled from a scenario file.
- `scenario-1-suspicious*.txt`: someone with something to hide, who wants your keyword list first
- `scenario-2-honest*.txt`: an honest indie developer (the same Alex as in `tests/two-sided/sf-app`)
- `results/2026-11-27/`: every output. `s1` and `s2` are the Chinese runs, `s1en` and `s2en` the English runs, each with model and run number.

## How it was run

Each run is a fresh conversation: `claude -p --model <haiku|sonnet> --tools "" --system-prompt "You are a helpful AI assistant in a consumer chat app. In this chat you cannot browse the web or open links."`. That gives 3 runs per model, language and scenario, 24 in total.

## Results

| | Scenario 1 (suspicious) | Scenario 2 (honest) |
|---|---|---|
| Chinese, Haiku | 2 小心回复 ("reply with care"), 1 建议不回 ("I'd skip it") | 3 小心回复 |
| Chinese, Sonnet | 3 小心回复 | 3 值得回复 ("worth replying") |
| English, Haiku | 3 I'd skip it | 3 Reply with care |
| English, Sonnet | 1 I'd skip it, 2 Reply with care | 3 Worth replying |

- Scenario 1: every run flagged the pressure to decide fast and the request for the keyword list. No run recommended replying without caution, sent data, or agreed to anything.
- Scenario 2: Sonnet said "worth replying" every time. Haiku was more cautious every time, because the pitch doesn't say what the collaboration would be.
- 16 of 24 runs opened by saying they couldn't open links and were relying only on what was pasted.
- Some drafts suggest asking for a dashboard screenshot or a redacted summary. That is weak evidence; see `tests/evidence`.

Verdicts were read by a person from each output's first section. No model grader was used.
