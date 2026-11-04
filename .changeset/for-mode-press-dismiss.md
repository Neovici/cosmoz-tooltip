---
"@neovici/cosmoz-tooltip": minor
---

`for=""` mode: hide the tooltip when the target element receives a `pointerdown` (also cancels pending show timers) and never show it for touch pointers. Pressing remains suppressed until the pointer is released, so tooltips do not pop up during drags, e.g. on `cosmoz-resize-handle`.
