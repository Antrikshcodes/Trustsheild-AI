# Changelog

All notable changes to this project. Format: [Keep a Changelog](https://keepachangelog.com/en/1.1.0/).

## [Unreleased]

### Fixed (Phase 1 QA audit, 2026-11-04)
- Analyzer: a validation error no longer stays on screen after picking an example message.
- Analyzer: fast repeated clicks on **Analyze Message** start only one analysis (previously up to one per click).
- Analyzer: the 5,000-character limit is checked after trimming whitespace, as API_CONTRACT.md specifies.
- Analyzer (api mode): network failures show the friendly "service unavailable" message instead of "Failed to fetch".
- Analyzer: focus moves to the error card when an analysis fails (it was lost to the page body).
- Demo rules: payment requests written as "2500 rupees" or "transfer the training charges", and threats
  ("offer will be cancelled", "legal action", "blacklisted", "final notice"), are no longer rated Low risk.
- Navbar: at tablet widths (768–1023 px) the menu button is used, so links and the CTA no longer wrap.
- Global focus outline moved into the CSS base layer so component focus styles (`focus:outline-none` + ring) apply;
  reduced-motion now correctly shows scroll-reveal content without the fade.
- "How it works": decorative line moved out of the `<ol>` (lists may only contain `<li>`).
- Channel selector: removed an unnamed `role="radiogroup"` (the fieldset + legend already label the group).
- Footer links have larger tap targets on mobile.
- Evidence highlighting prefers an exact-case match before falling back to case-insensitive.

### Changed
- Removed duplicate channel icon/label maps (shared from `ChannelSelector` / `CHANNELS`) and an unused `RiskBadge` size.
- README clone URL now points at the actual repository.

### Security
- `postcss` forced to `^8.5.32` via npm `overrides`, removing the high-severity advisory in the copy bundled with
  `next`. `npm audit --omit=dev` now reports 0 vulnerabilities.

## [0.1.0] — 2026-11-04 — Phase 1: Frontend
### Added
- Monorepo structure: `frontend/`, `backend/` (placeholder), `research/`, `docs/`, `.github/`.
- Root docs: CLAUDE.md, README, PRODUCT_SPEC, ARCHITECTURE, API_CONTRACT (draft v1), SECURITY_AND_PRIVACY,
  RISK_RULES, TEST_PLAN, TEAM_WORKFLOW.
- Pull request template and bug / feature issue templates; root `.gitignore`.
- Frontend (Next.js 15.5 App Router, React 19, TypeScript, Tailwind v4):
  - Landing page: navbar, hero, problem, message analyzer, example messages, how it works, features,
    privacy & security, footer.
  - Analyzer: channel selector, message box with live character count, optional sender, validation,
    soft OTP / card-number privacy warning, loading, error + retry, and empty states.
  - Result panel: risk badge (text + icon), highlighted evidence in the original message, warning cards,
    safe next steps, uncertainty note.
  - In-browser demo analyzer (`lib/mock/mockAnalyzer.ts`) with results labelled "Demonstration data".
  - `lib/analyzer.ts` switch for a future backend (`NEXT_PUBLIC_ANALYZER_MODE=api`).
  - Self-hosted fonts (Inter, Sora, JetBrains Mono) — no network needed at build time.
  - Accessibility: skip link, labelled controls, focus management, reduced-motion support.

### Security
- Upgraded to `next@15.5.29` to pick up security patches for the scaffolded 15.5.4.
