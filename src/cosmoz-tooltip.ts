import { normalize } from '@neovici/cosmoz-tokens/normalize';
import { component, css, useCallback, useEffect, useRef } from '@pionjs/pion';
import { html, nothing } from 'lit-html';
import { ref } from 'lit-html/directives/ref.js';
import { when } from 'lit-html/directives/when.js';
import './cosmoz-tooltip-content.js';
import { popoverStyle } from './popover-style.js';
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
	const popover = useRef<HTMLElement>();
	const timeoutId = useRef<number>();
	const pressed = useRef(false);
	const suppressFocus = useRef(false);
	const contentSlotRef = useRef<HTMLSlotElement>();
	const hasSlottedContent = useHasSlottedContent(contentSlotRef);
	const hasContent = !!(heading || description || hasSlottedContent);
	const shouldRenderTooltip = hasContent && !disabled;

	const show = useCallback(() => {
		if (pressed.current || !shouldRenderTooltip) return;
		clearTimeout(timeoutId.current);
		timeoutId.current = window.setTimeout(() => {
			popover.current?.showPopover();
		}, delay);
	}, [delay, shouldRenderTooltip]);

	// Immediately hide if disabled while visible
	useEffect(() => {
		if (!disabled) return;
		clearTimeout(timeoutId.current);
		popover.current?.hidePopover();
	}, [disabled]);

	const hide = useCallback(() => {
		clearTimeout(timeoutId.current);
		popover.current?.hidePopover();
	}, []);

	// Use pointerover/pointerout on the host — they bubble through shadow DOM,
	// unlike pointerenter/pointerleave on <slot>.
	useEffect(() => {
		if (forAttr) return;
		const root = host.getRootNode() as Document | ShadowRoot;

		const onPointerOver = (e: Event) => {
			// Touch pointers have no hover, so they never trigger tooltips.
			if ((e as PointerEvent).pointerType === 'touch') return;
			// Mouse re-entry clears any leftover tap-focus suppression.
			suppressFocus.current = false;
			show();
		};

		const onPointerDown = (e: Event) => {
			// A non-mouse tap focuses its target after pointerup (too late
			// for `pressed`), so the focus that follows is swallowed once.
			if ((e as PointerEvent).pointerType !== 'mouse') {
				suppressFocus.current = true;
			}
			pressed.current = true;
			hide();
		};

		// Pointerup on the root, not the host: the pointer may leave the
		// trigger (or be released outside it) before a drag ends.
		const onPointerUp = () => {
			pressed.current = false;
		};

		const onPointerOut = (e: PointerEvent) => {
			const related = e.relatedTarget as Element | null;
			if (related && host.contains(related)) return;
			hide();
		};

		const onKeydown = () => {
			suppressFocus.current = false;
		};

		// In the order the browser fires them: enter, press, release, leave; the
		// template's focusin/focusout stay the keyboard fallback.
		host.addEventListener('pointerover', onPointerOver);
		host.addEventListener('pointerdown', onPointerDown);
		root.addEventListener('pointerup', onPointerUp);
		host.addEventListener('pointerout', onPointerOut as EventListener);
		// Keydown means the focus the user makes is theirs, not a tap's.
		root.addEventListener('keydown', onKeydown);

		return () => {
			host.removeEventListener('pointerover', onPointerOver);
			host.removeEventListener('pointerdown', onPointerDown);
			root.removeEventListener('pointerup', onPointerUp);
			host.removeEventListener('pointerout', onPointerOut as EventListener);
			root.removeEventListener('keydown', onKeydown);
		};
	}, [forAttr, show, hide]);

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

	// Keyboard focus shows the tooltip; tap focus is swallowed instead.
	const onFocusIn = () => {
		if (suppressFocus.current) {
			suppressFocus.current = false;
			return;
		}
		show();
	};

	// Pass-through when disabled or no content
	if (!shouldRenderTooltip) {
		return html`
			<slot></slot>
			<slot name="content" ${ref(contentSlotRef)} hidden></slot>
		`;
	}

	// Wrapping mode: render slot + popover in shadow DOM
	return html`
		<slot @focusin=${onFocusIn} @focusout=${hide}></slot>
		<div
			class="cosmoz-tooltip-popover"
			popover="manual"
			role="tooltip"
			style="position-area: ${placement}"
			${ref(popover)}
		>
			<cosmoz-tooltip-content>
				${when(heading, () => html`<strong slot="heading">${heading}</strong>`)}
				${when(
					description,
					() => html`<p slot="description">${description}</p>`
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
	})
);

export { CosmozTooltip };
