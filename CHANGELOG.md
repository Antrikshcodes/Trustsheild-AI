# Changelog

All notable changes to this project. Format: [Keep a Changelog](https://keepachangelog.com/en/1.1.0/).

## [Unreleased]

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
