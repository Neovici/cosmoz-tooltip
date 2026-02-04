import { component, css, useCallback, useEffect, useRef } from '@pionjs/pion';
import { html, nothing } from 'lit-html';
import { ref } from 'lit-html/directives/ref.js';

// CSS Anchor Positioning is not yet in TypeScript's CSSStyleDeclaration
declare global {
	interface CSSStyleDeclaration {
		anchorName: string;
	}
}

const style = css`
	:host {
		display: inline-block;
		anchor-name: --tooltip-anchor;
	}

	/* When using for="" attribute, host doesn't provide anchor */
	:host([for]) {
		display: contents;
		anchor-name: unset;
	}

	[popover] {
		position: fixed;
		position-anchor: var(--tooltip-anchor-name, --tooltip-anchor);
		inset: unset;
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
		[popover]:popover-open {
			opacity: 0;
			transform: translateY(4px) scale(0.96);
		}
	}

	[popover]:not(:popover-open) {
		opacity: 0;
		transform: translateY(4px) scale(0.96);
	}

	.title {
		font-weight: var(--cz-font-weight-semibold);
		display: block;
	}

	.description {
		margin: 0;
		color: var(--cz-color-gray-300);
	}

	.title + .description {
		margin-top: var(--cz-spacing);
	}

	@media (prefers-reduced-motion: reduce) {
		[popover] {
			transition: none;
		}
	}
`;

interface TooltipProps {
	heading?: string;
	description?: string;
	for?: string;
	placement?: string;
	delay?: number;
}

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

	// Find target element when using for="" attribute
	// Search from host's root node (document or parent shadow root)
	const findTarget = useCallback((): Element | null => {
		if (!forAttr) return null;
		const root = host.getRootNode() as ShadowRoot | Document;
		return root?.querySelector(`[name="${forAttr}"]`);
	}, [forAttr, host]);

	// Setup event listeners for for="" target
	useEffect(() => {
		if (!forAttr) return;

		const target = findTarget();
		if (!target) return;

		// Set anchor name on target element
		(target as HTMLElement).style.anchorName = '--tooltip-anchor-external';

		target.addEventListener('mouseenter', show);
		target.addEventListener('mouseleave', hide);
		target.addEventListener('focusin', show);
		target.addEventListener('focusout', hide);

		return () => {
			target.removeEventListener('mouseenter', show);
			target.removeEventListener('mouseleave', hide);
			target.removeEventListener('focusin', show);
			target.removeEventListener('focusout', hide);
			(target as HTMLElement).style.anchorName = '';
		};
	}, [forAttr, findTarget, show, hide]);

	const anchorStyle = forAttr
		? `position-area: ${placement}; --tooltip-anchor-name: --tooltip-anchor-external;`
		: `position-area: ${placement};`;

	return html`
		${!forAttr
			? html`
					<slot
						@mouseenter=${show}
						@mouseleave=${hide}
						@focusin=${show}
						@focusout=${hide}
					></slot>
				`
			: nothing}
		<div
			popover="manual"
			role="tooltip"
			style=${anchorStyle}
			${ref((el) => {
				popover.current = el as HTMLElement | undefined;
			})}
		>
			${heading ? html`<strong class="title">${heading}</strong>` : nothing}
			${description ? html`<p class="description">${description}</p>` : nothing}
			<slot name="content"></slot>
		</div>
	`;
};

customElements.define(
	'cosmoz-tooltip',
	component<TooltipProps>(CosmozTooltip, {
		styleSheets: [style],
		observedAttributes: ['heading', 'description', 'for', 'placement', 'delay'],
	}),
);

export { CosmozTooltip };
