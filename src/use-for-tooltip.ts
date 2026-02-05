import { render, useEffect, useRef } from '@pionjs/pion';
import { html } from 'lit-html';
import { when } from 'lit-html/directives/when.js';
import './cosmoz-tooltip-content.js';
import { popoverStyle } from './popover-style.js';

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
}

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
	} = opts;
	const popover = useRef<HTMLElement>();

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
		renderContent(popoverEl, heading, description);

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
		renderContent(popover.current, heading, description);
	}, [heading, description, forAttr]);
};
