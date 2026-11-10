import { normalize } from '@neovici/cosmoz-tokens/normalize';
import { component, css, useEffect, useRef } from '@pionjs/pion';
import { html, nothing } from 'lit-html';
import { ref } from 'lit-html/directives/ref.js';
import { when } from 'lit-html/directives/when.js';
import './cosmoz-tooltip-content.js';
import { popoverStyle } from './popover-style.js';
import { createGestureTooltips } from './tooltip-gestures';
import { useForTooltip } from './use-for-tooltip.js';
import { useHasSlottedContent } from './use-has-slotted-content.js';

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
	disabled?: boolean;
}

const CosmozTooltip = (host: HTMLElement & TooltipProps) => {
	const {
		heading,
		description,
		for: forAttr,
		placement = 'top',
		delay = 300,
		disabled = false,
	} = host;
	const contentSlotRef = useRef<HTMLSlotElement>();
	const hasSlottedContent = useHasSlottedContent(contentSlotRef);
	const hasContent = !!(heading || description || hasSlottedContent);
	const shouldRenderTooltip = hasContent && !disabled;

	// Wrapping mode: hover, press and focus rules live in the shared gesture
	// factory; the popover is rendered by the template below and opened here.
	useEffect(() => {
		if (forAttr || !shouldRenderTooltip) return;
		const root = host.getRootNode() as Document | ShadowRoot;
		// Looked up on use: with only slotted content, the popover renders after this effect runs.
		const popover = () =>
			host.shadowRoot?.querySelector<HTMLElement>('.cosmoz-tooltip-popover');

		const gestures = createGestureTooltips({
			root,
			delay,
			matchTarget: (event) => {
				const target = event.target as Node;
				return target === host || host.contains(target) ? host : undefined;
			},
			show: () => popover()?.showPopover(),
			hide: () => popover()?.hidePopover(),
		});
		return () => {
			gestures.dispose();
			popover()?.hidePopover();
		};
	}, [forAttr, shouldRenderTooltip, delay]);

	// Delegate for="" mode to hook
	useForTooltip(host, {
		for: forAttr,
		heading,
		description,
		placement,
		delay,
		disabled,
	});

	// For attribute mode: nothing to render in shadow DOM
	if (forAttr) return nothing;

	// Pass-through when disabled or no content
	if (!shouldRenderTooltip) {
		return html`
			<slot></slot>
			<slot name="content" ${ref(contentSlotRef)} hidden></slot>
		`;
	}

	// Wrapping mode: render slot + popover in shadow DOM
	return html`
		<slot></slot>
		<div
			class="cosmoz-tooltip-popover"
			popover="manual"
			role="tooltip"
			style="position-area: ${placement}"
		>
			<cosmoz-tooltip-content>
				${when(heading, () => html`<strong slot="heading">${heading}</strong>`)}
				${when(
					description,
					() => html`<p slot="description">${description}</p>`,
				)}
				<slot name="content" ${ref(contentSlotRef)}></slot>
			</cosmoz-tooltip-content>
		</div>
	`;
};

customElements.define(
	'cosmoz-tooltip',
	component<TooltipProps>(CosmozTooltip, {
		styleSheets: [normalize, popoverStyle, style],
		observedAttributes: [
			'heading',
			'description',
			'for',
			'placement',
			'delay',
			'disabled',
		],
	}),
);

export { CosmozTooltip };
