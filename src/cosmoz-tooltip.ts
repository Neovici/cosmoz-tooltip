import { normalize } from '@neovici/cosmoz-tokens/normalize';
import {
	component,
	css,
	render,
	sheet,
	useCallback,
	useEffect,
	useRef,
} from '@pionjs/pion';
import { html, nothing } from 'lit-html';
import { ref } from 'lit-html/directives/ref.js';

// CSS Anchor Positioning is not yet in TypeScript's CSSStyleDeclaration
declare global {
	interface CSSStyleDeclaration {
		anchorName: string;
		positionAnchor: string;
		positionArea: string;
	}
}

/**
 * Shared popover styles used in both shadow DOM (wrapping mode)
 * and light DOM (for="" mode).
 */
const popoverStyle = sheet(css`
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
		font-family: var(--cz-font-body);
		font-size: var(--cz-text-sm);
		line-height: var(--cz-text-sm-line-height);
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

	.cosmoz-tooltip-popover .title {
		font-weight: var(--cz-font-weight-semibold);
		display: block;
	}

	.cosmoz-tooltip-popover .description {
		margin: 0;
		color: var(--cz-color-gray-300);
	}

	.cosmoz-tooltip-popover .title + .description {
		margin-top: var(--cz-spacing);
	}

	@media (prefers-reduced-motion: reduce) {
		.cosmoz-tooltip-popover {
			transition: none;
		}
	}
`);

/**
 * Host-specific styles (shadow DOM only).
 * The wrapping mode popover binds to the host's anchor name.
 */
const style = css`
	:host {
		display: inline-block;
		anchor-name: --tooltip-anchor;
	}

	:host([for]) {
		display: contents;
		anchor-name: unset;
	}

	.cosmoz-tooltip-popover {
		position-anchor: --tooltip-anchor;
	}
`;

interface TooltipProps {
	heading?: string;
	description?: string;
	for?: string;
	placement?: string;
	delay?: number;
}

/** Tooltip content template (shared between wrapping and for="" modes). */
const tooltipContent = (heading?: string, description?: string) => html`
	${heading ? html`<strong class="title">${heading}</strong>` : nothing}
	${description ? html`<p class="description">${description}</p>` : nothing}
`;

const CosmozTooltip = (host: HTMLElement & TooltipProps) => {
	const {
		heading,
		description,
		for: forAttr,
		placement = 'top',
		delay = 300,
	} = host;
	const popover = useRef<HTMLElement>();
	const timeoutId = useRef<number>();

	const show = useCallback(() => {
		clearTimeout(timeoutId.current);
		timeoutId.current = window.setTimeout(() => {
			popover.current?.showPopover();
		}, delay);
	}, [delay]);

	const hide = useCallback(() => {
		clearTimeout(timeoutId.current);
		popover.current?.hidePopover();
	}, []);

	// For attribute mode: create light-DOM popover with event delegation
	useEffect(() => {
		if (!forAttr) return;

		const root = host.getRootNode() as Document | ShadowRoot;

		// Adopt shared popover stylesheet on root (idempotent)
		const sheets = root.adoptedStyleSheets ?? [];
		if (!sheets.includes(popoverStyle)) {
			root.adoptedStyleSheets = [...sheets, popoverStyle];
		}

		// Create light-DOM popover element
		const popoverEl = document.createElement('div');
		popoverEl.setAttribute('popover', 'manual');
		popoverEl.setAttribute('role', 'tooltip');
		popoverEl.classList.add('cosmoz-tooltip-popover');

		// Insert after host to keep it in the same container scope
		host.after(popoverEl);
		popover.current = popoverEl;

		// Render initial content
		render(tooltipContent(heading, description), popoverEl);

		const selector = `[name="${forAttr}"]`;
		const anchorName = `--tooltip-anchor-${forAttr}`;
		let showTimeout: number | undefined;

		const showForTarget = (target: Element) => {
			clearTimeout(showTimeout);

			// Set CSS anchor positioning
			(target as HTMLElement).style.anchorName = anchorName;
			popoverEl.style.positionAnchor = anchorName;
			popoverEl.style.positionArea = placement;

			showTimeout = window.setTimeout(() => popoverEl.showPopover(), delay);
		};

		const hidePopover = () => {
			clearTimeout(showTimeout);
			popoverEl.hidePopover();
		};

		const onPointerover = (e: Event) => {
			const target = (e.target as Element).closest?.(selector);
			if (!target) return;
			showForTarget(target);
		};

		const onPointerout = (e: Event) => {
			const target = (e.target as Element).closest?.(selector);
			if (!target) return;
			const related = (e as PointerEvent).relatedTarget as Element | null;
			// Still inside the target element? Ignore.
			if (related && target.contains(related)) return;
			hidePopover();
		};

		const onFocusin = (e: Event) => {
			const target = (e.target as Element).closest?.(selector);
			if (!target) return;
			showForTarget(target);
		};

		const onFocusout = (e: Event) => {
			const target = (e.target as Element).closest?.(selector);
			if (!target) return;
			hidePopover();
		};

		root.addEventListener('pointerover', onPointerover);
		root.addEventListener('pointerout', onPointerout);
		root.addEventListener('focusin', onFocusin);
		root.addEventListener('focusout', onFocusout);

		return () => {
			clearTimeout(showTimeout);
			root.removeEventListener('pointerover', onPointerover);
			root.removeEventListener('pointerout', onPointerout);
			root.removeEventListener('focusin', onFocusin);
			root.removeEventListener('focusout', onFocusout);
			popoverEl.hidePopover();
			popoverEl.remove();
			popover.current = undefined;
		};
	}, [forAttr, placement, delay]);

	// Re-render light-DOM popover content when heading/description change
	useEffect(() => {
		if (!forAttr || !popover.current) return;
		render(tooltipContent(heading, description), popover.current);
	}, [heading, description, forAttr]);

	// For attribute mode: nothing to render in shadow DOM
	if (forAttr) return html``;

	// Wrapping mode: render slot + popover in shadow DOM
	return html`
		<slot
			@pointerenter=${show}
			@pointerleave=${hide}
			@focusin=${show}
			@focusout=${hide}
		></slot>
		<div
			class="cosmoz-tooltip-popover"
			popover="manual"
			role="tooltip"
			style="position-area: ${placement}"
			${ref((el) => {
				popover.current = el as HTMLElement | undefined;
			})}
		>
			${tooltipContent(heading, description)}
			<slot name="content"></slot>
		</div>
	`;
};

customElements.define(
	'cosmoz-tooltip',
	component<TooltipProps>(CosmozTooltip, {
		styleSheets: [normalize, popoverStyle, style],
		observedAttributes: ['heading', 'description', 'for', 'placement', 'delay'],
	}),
);

export { CosmozTooltip };
