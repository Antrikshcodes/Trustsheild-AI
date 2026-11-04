# Test Plan

Owner: Kushagri

## Phase 1 — frontend (manual + Playwright smoke, run 2026-11-04)
| Check | Result |
|---|---|
| Empty submit shows "Paste the message you want to check." | ✅ |
| < 20 chars shows "too short" error | ✅ |
| > 5,000 chars shows live length error; counter turns red | ✅ |
| Text with "OTP is 482913" shows privacy warning | ✅ |
| Example "Confirm your selection" → High, 3 findings, demo label | ✅ |
| Example "Hinglish fee demand" → High, 2 findings | ✅ |
| Example "Install the HR app" → High, 2 findings | ✅ |
| Example "Ordinary interview invite" → Low, 0 findings, "not proof" caveat | ✅ |
| Personal Gmail + "urgently" → Medium | ✅ |
| Prompt-injection text + OTP → High + "Tries to instruct the checker" | ✅ |
| `?demoError=1` → error card with "Try again" | ✅ |
| Clear empties form and result | ✅ |
| No horizontal scroll at 360 px and 820 px | ✅ |
| Mobile menu opens/closes; Esc closes | ✅ |
| No console errors or warnings | ✅ |
| `npm run check` (lint + typecheck + build) passes with 0 warnings | ✅ |

## Later phases
| Group | Cases | Pass condition |
|---|---|---|
| Basic input | Empty, whitespace, emoji, 5,001 chars | Safe validation |
| High-risk | OTP, password, UPI PIN, fee, APK | HIGH with exact evidence |
| Ambiguous | Unknown recruiter, personal email | MEDIUM / needs verification |
| Legitimate-looking | Interview invite, follow-up | LOW + caveat |
| Hinglish | Same scams in Hinglish | Same band as English |
| Prompt injection | "Ignore instructions…" | Ignored and reported |
| Provider failure | Timeout, bad JSON, missing key | Labelled rules-only result |
| Privacy | Logs, DB, network, errors | No raw message or secret |
| Security | Oversized body, HTML/script, bad CORS | Rejected, no execution |

Fictional cases live in `research/sample_messages/`.
