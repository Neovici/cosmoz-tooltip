---
"@neovici/cosmoz-tooltip": minor
---

Allow `@neovici/cosmoz-tokens` ^4 (light-dark() adoption)

The JS surface used by the component (`normalize`) is unchanged between
tokens v3 and v4, so the widened range keeps the component compatible
with hosts on either major.

Bumps the `@neovici/cfg` devDependency to ^2.14.0, whose
`check-duplicate-components` tolerates the dev-only nested tokens copy
created by the demo-story `cosmoz-button@^1` devDep.
