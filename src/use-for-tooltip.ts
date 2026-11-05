import { render, useEffect } from '@pionjs/pion';
import { html } from 'lit-html';
import { when } from 'lit-html/directives/when.js';
import './cosmoz-tooltip-content.js';
import { popoverStyle } from './popover-style.js';
import { createGestureTooltips } from './tooltip-gestures';

// CSS Anchor Positioning is not yet in TypeScript's CSSStyleDeclaration
declare global {
	interface CSSStyleDeclaration {
		anchorName: string;
		positionAnchor: string;
		positionArea: string;
	}
}

interface ForTooltipOptions {
	for?: string;
	heading?: string;
	description?: string;
	placement?: string;
	delay?: number;
	disabled?: boolean;
}

/**
 * Design decision: No rich content support in for="" mode.
 *
 * Wrapping mode can use <slot name="content"> to project arbitrary HTML
 * into the tooltip popover. The for="" mode popover lives in the light DOM
 * (outside the component's shadow root), so slots are not available —
 * there is no shadow boundary to project through. Content is limited to
 * the heading and description attributes.
 */
const renderContent = (
	popoverEl: HTMLElement,
	heading?: string,
	description?: string,
) =>
	render(
		html`<cosmoz-tooltip-content>
			${when(heading, () => html`<strong slot="heading">${heading}</strong>`)}
			${when(description, () => html`<p slot="description">${description}</p>`)}
		</cosmoz-tooltip-content>`,
		popoverEl,
	);

export const useForTooltip = (host: HTMLElement, opts: ForTooltipOptions) => {
	const {
		for: forAttr,
		heading,
		description,
		placement = 'top',
		delay = 300,
		disabled = false,
	} = opts;
	const shouldRenderTooltip = !!(heading || description) && !disabled;

	// eslint-disable-next-line max-statements
	useEffect(() => {
		if (!forAttr || !shouldRenderTooltip) return;

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
		renderContent(popoverEl, heading, description);

		const anchorName = `--tooltip-anchor-${forAttr}`;
		const show = (target: Element | undefined) => {
			// CSS Anchor Positioning
			(target as HTMLElement).style.anchorName = anchorName;
			popoverEl.style.positionAnchor = anchorName;
			popoverEl.style.positionArea = placement;
			popoverEl.showPopover();
		};
		const hide = () => popoverEl.hidePopover();

		const gestures = createGestureTooltips({
			root,
			delay,
			matchTarget: (event) =>
				(event.target as Element).closest?.(`[name="${forAttr}"]`) ?? undefined,
			show,
			hide,
		});

		return () => {
			gestures.dispose();
			popoverEl.hidePopover();
			popoverEl.remove();
		};
	}, [forAttr, heading, description, placement, delay, shouldRenderTooltip]);
};
