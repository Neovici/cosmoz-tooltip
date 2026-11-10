---
'@neovici/cosmoz-tooltip': patch
---

Open tooltips whose content comes only from `slot="content"` on hover and focus. The popover renders after the slotted content is detected, so the gesture setup no longer gives up when it isn't there yet.
