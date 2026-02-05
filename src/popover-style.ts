import { css, sheet } from '@pionjs/pion';

/**
 * Shared popover styles used in both shadow DOM (wrapping mode)
 * and light DOM (for="" mode).
 *
 * Design decision: No arrow/caret pointing to the anchor.
 *
 * CSS Anchor Positioning's position-try-fallbacks can flip the tooltip
 * to the opposite side when constrained by the viewport. There is no
 * pure CSS way to detect when a flip occurs (@position-try descriptors
 * cannot set custom properties or pseudo-element styles), so the arrow
 * direction cannot reliably match the actual tooltip position.
 * A JS-based detection (getBoundingClientRect) was considered but
 * rejected to keep the component purely CSS-positioned.
 */
export const popoverStyle = sheet(css`
	.cosmoz-tooltip-popover {
		position: fixed;
		inset: unset;
		pointer-events: none;
		text-align: left;
		margin: calc(var(--cz-spacing) * 2);
		position-try-fallbacks:
			flip-block,
			flip-inline,
			flip-block flip-inline;

		/* Reset popover defaults */
		border: none;
		padding: calc(var(--cz-spacing) * 2) calc(var(--cz-spacing) * 3);
		background: var(--cz-color-gray-900);
		color: var(--cz-color-white);
		border-radius: var(--cz-radius-sm);
		max-width: 20rem;
		box-shadow: var(--cz-shadow-lg);

		/* Animation - open state */
		opacity: 1;
		transform: translateY(0) scale(1);

		transition:
			opacity 150ms ease-out,
			transform 150ms ease-out,
			overlay 150ms ease-out allow-discrete,
			display 150ms ease-out allow-discrete;
	}

	@starting-style {
		.cosmoz-tooltip-popover:popover-open {
			opacity: 0;
			transform: translateY(4px) scale(0.96);
		}
	}

	.cosmoz-tooltip-popover:not(:popover-open) {
		opacity: 0;
		transform: translateY(4px) scale(0.96);
	}

	@media (prefers-reduced-motion: reduce) {
		.cosmoz-tooltip-popover {
			transition: none;
		}
	}
`);
