# FMGE Mock Test — Live Simulation (June 2026)

A self-contained, browser-based **full-length FMGE mock exam** that mirrors the real NBEMS
computer-based test: two timed parts, a question palette, mark-for-review, auto-submit on
timeout, and a detailed end-of-test result with **per-question explanations**.

**Live link:** https://shivdeep1.github.io/fmge-mock-2026/

> Share the link with anyone. Each person takes the test in their own browser and sees their
> own score, accuracy, timing, weak subjects, and full answer review. Nothing is sent anywhere —
> it runs entirely on the device (no login, no backend, progress saved locally so a refresh resumes).

## Exam format simulated

| | |
|---|---|
| Total | 300 single-best-answer MCQs |
| Part A | 150 questions · 150 minutes (pre & para-clinical) |
| Part B | 150 questions · 150 minutes (clinical) |
| Negative marking | None |
| Pass mark | 150 / 300 (50%) |

Subject weightage follows recurring FMGE / NEET / INI-CET trends, with a moderate-to-hard,
clinical-vignette-heavy style. Questions are original but aligned to commonly tested themes.

## How to use

1. Open the live link.
2. Enter a name (optional) and **Begin Part A**.
3. Use the palette to navigate; **Mark for Review** to flag; **Save & Next** to move on.
   Keyboard: `1`–`4` select options, `←` / `→` move between questions.
4. **Submit Part** (or let the timer auto-submit) → a short break screen → **Begin Part B**.
5. After Part B you get your **result** (score, accuracy, time, subject-wise breakdown) and can
   **Review all answers & explanations**, filtered by Incorrect / Correct / Unattempted / Marked.

## Project structure

```
index.html     # all screens (start, exam, transition, result, review)
styles.css     # exam-style UI
app.js         # engine: state, timer, palette, scoring, analytics, localStorage
questions.js   # the question bank (one JS array)
validate.js    # dev check: run `node validate.js` to verify counts & structure
```

## Editing / adding questions

Each item in `questions.js`:

```js
{ id: 1, part: "A", subject: "Pharmacology", topic: "Antidiabetics", difficulty: "moderate",
  question: "stem…", options: ["…","…","…","…"], answer: 1, explanation: "why…" }
```

`part` is `"A"` or `"B"`; `answer` is the 0-based index of the correct option.
Run `node validate.js` to confirm the bank matches the 150 + 150 blueprint before publishing.

## Note

This is an independent practice simulation and is **not affiliated with or endorsed by NBEMS**.
Because the site is fully static, the answer key lives in `questions.js` — fine for self-practice,
but it means a determined viewer could read the source.
