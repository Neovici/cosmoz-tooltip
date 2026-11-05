---
"@neovici/cosmoz-tooltip": minor
---

Hide the tooltip while the trigger is pressed (also cancels pending show timers) and never show it for touch pointers. Pressing stays suppressed until the pointer is released, so tooltips do not pop up during drags, e.g. on `cosmoz-resize-handle`. Applies to both wrapping and `for=""` modes.
