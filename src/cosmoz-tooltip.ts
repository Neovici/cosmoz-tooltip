import { normalize } from '@neovici/cosmoz-tokens/normalize';
import { component, css, useCallback, useEffect, useRef } from '@pionjs/pion';
import { html, nothing } from 'lit-html';
import { ref } from 'lit-html/directives/ref.js';
import { when } from 'lit-html/directives/when.js';
import './cosmoz-tooltip-content.js';
import { popoverStyle } from './popover-style.js';
import { useForTooltip } from './use-for-tooltip.js';

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

	// Use pointerover/pointerout on the host — they bubble through shadow DOM,
	// unlike pointerenter/pointerleave on <slot>.
	useEffect(() => {
		if (forAttr) return;

		const onPointerOut = (e: PointerEvent) => {
			const related = e.relatedTarget as Element | null;
			if (related && host.contains(related)) return;
			hide();
		};

		host.addEventListener('pointerover', show);
		host.addEventListener('pointerout', onPointerOut as EventListener);

		return () => {
			host.removeEventListener('pointerover', show);
			host.removeEventListener('pointerout', onPointerOut as EventListener);
		};
	}, [forAttr, show, hide]);

	// Delegate for="" mode to hook
	useForTooltip(host, { for: forAttr, heading, description, placement, delay });

	// For attribute mode: nothing to render in shadow DOM
	if (forAttr) return nothing;

	// Wrapping mode: render slot + popover in shadow DOM
	return html`
		<slot @focusin=${show} @focusout=${hide}></slot>
		<div
			class="cosmoz-tooltip-popover"
			popover="manual"
			role="tooltip"
			style="position-area: ${placement}"
			${ref((el) => {
				popover.current = el as HTMLElement | undefined;
			})}
		>
			<cosmoz-tooltip-content>
				${when(heading, () => html`<strong slot="heading">${heading}</strong>`)}
				${when(
					description,
					() => html`<p slot="description">${description}</p>`,
				)}
				<slot name="content"></slot>
			</cosmoz-tooltip-content>
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
