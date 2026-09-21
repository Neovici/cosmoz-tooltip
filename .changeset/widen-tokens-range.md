---
"@neovici/cosmoz-tooltip": minor
---

Allow `@neovici/cosmoz-tokens` ^4 (light-dark() adoption)

The JS surface used by the component (`normalize`) is unchanged between
tokens v3 and v4, so the widened range keeps the component compatible
with hosts on either major.

The `@neovici/cfg` devDependency points at the
`feat/dev-deps-excluded` branch until cfg releases the dev-flag-aware
duplicate check (2.7.0) — the demo-story `cosmoz-button@^1` devDep
creates a dev-only nested tokens copy that only that version tolerates.
