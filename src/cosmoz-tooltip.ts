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
		margin: var(--tooltip-spacing, 0.5rem);
		position-try-fallbacks:
			flip-block,
			flip-inline,
			flip-block flip-inline;

		/* Reset popover defaults */
		border: none;
		padding: 0.5rem 0.75rem;
		background: var(--tooltip-bg, #1f2937);
		color: var(--tooltip-color, #fff);
		border-radius: var(--tooltip-radius, 0.375rem);
		font-size: var(--tooltip-font-size, 0.875rem);
		max-width: var(--tooltip-max-width, 20rem);
		box-shadow: var(--tooltip-shadow, 0 4px 6px -1px rgb(0 0 0 / 0.1));

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
		font-weight: 600;
		display: block;
	}

	.description {
		margin: 0;
		opacity: 0.9;
	}

	.title + .description {
		margin-top: 0.25rem;
	}

	@media (prefers-reduced-motion: reduce) {
		[popover] {
			transition: none;
		}
	}
`;

interface TooltipProps {
	title?: string;
	description?: string;
	for?: string;
	placement?: string;
	delay?: number;
}

const CosmozTooltip = ({
	title,
	description,
	for: forAttr,
	placement = 'top',
	delay = 300,
}: TooltipProps) => {
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
	const findTarget = useCallback((): Element | null => {
		if (!forAttr) return null;
		const root = popover.current?.getRootNode() as ShadowRoot | Document;
		return root?.querySelector(`[name="${forAttr}"]`);
	}, [forAttr]);

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
			${title ? html`<strong class="title">${title}</strong>` : nothing}
			${description ? html`<p class="description">${description}</p>` : nothing}
			<slot name="content"></slot>
		</div>
	`;
};

customElements.define(
	'cosmoz-tooltip',
	component<TooltipProps>(CosmozTooltip, {
		styleSheets: [style],
		observedAttributes: ['title', 'description', 'for', 'placement', 'delay'],
	}),
);

export { CosmozTooltip };
