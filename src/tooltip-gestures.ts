/**
 * The pointer/focus state machine shared by the wrapping and `for=""` tooltip
 * modes. Each rule is anchored in observed behavior:
 *
 * - Touch pointers never show tooltips via hover — they have no hover.
 * - Pressing the target hides the tooltip and suppresses shows until the
 *   pointer is released, so drags never pop it mid-gesture.
 * - A tap dispatches focus *after* pointerup, outside the press window, so
 *   the focus of a non-mouse tap is swallowed once. Keyboard focus is real:
 *   a keydown (or mouse re-entry) restores it.
 *
 * `matchTarget` resolves the mode difference — root-delegated `[name]`
 * lookup for `for=""` mode, host containment for wrapping — and returns the
 * element the tooltip interacts with, or `undefined` when the event is
 * unrelated. Listeners register and deregister in the order the browser
 * fires the events: enter, press, release, leave; keyboard is the fallback.
 */
interface GestureOptions {
	readonly root: Document | ShadowRoot;
	readonly delay: number;
	readonly matchTarget: (event: Event) => Element | undefined;
	readonly show: (target: Element | undefined) => void;
	readonly hide: () => void;
}

export const createGestureTooltips = ({
	root,
	delay,
	matchTarget,
	show,
	hide,
}: GestureOptions) => {
	let showTimer: number | undefined;
	let pressed = false;
	let suppressFocus = false;

	const cancelShow = () => {
		clearTimeout(showTimer);
		showTimer = undefined;
	};

	const queueShow = (target: Element | undefined) => {
		if (pressed) return;
		cancelShow();
		showTimer = window.setTimeout(() => {
			showTimer = undefined;
			show(target);
		}, delay);
	};

	const onPointerover = (event: PointerEvent) => {
		// Touch pointers have no hover, so they never trigger tooltips.
		if (event.pointerType === 'touch') return;
		// Mouse re-entry clears any leftover tap-focus suppression.
		suppressFocus = false;
		const target = matchTarget(event);
		if (target) queueShow(target);
	};

	const onPointerdown = (event: PointerEvent) => {
		const target = matchTarget(event);
		if (!target) return;
		// A non-mouse tap focuses its target after pointerup — too late for
		// `pressed` — so the focus that follows is swallowed once.
		suppressFocus = event.pointerType !== 'mouse';
		pressed = true;
		cancelShow();
		hide();
	};

	// Pointerup at the root: the pointer may leave the target (or be
	// released outside it) before a drag ends.
	const onPointerup = () => {
		pressed = false;
	};

	const onPointerout = (event: PointerEvent) => {
		const target = matchTarget(event);
		if (!target) return;
		// Still inside the target? Ignore.
		if (
			event.relatedTarget instanceof Node &&
			target.contains(event.relatedTarget)
		) {
			return;
		}
		cancelShow();
		hide();
	};

	// Keydown means the focus the user makes next is theirs, not a tap's.
	const onKeydown = () => {
		suppressFocus = false;
	};

	const onFocusin = (event: FocusEvent) => {
		const target = matchTarget(event);
		if (!target) return;
		if (suppressFocus) {
			suppressFocus = false;
			return;
		}
		queueShow(target);
	};

	const onFocusout = (event: FocusEvent) => {
		if (!matchTarget(event)) return;
		cancelShow();
		hide();
	};

	root.addEventListener('pointerover', onPointerover as EventListener);
	root.addEventListener('pointerdown', onPointerdown as EventListener);
	root.addEventListener('pointerup', onPointerup);
	root.addEventListener('pointerout', onPointerout as EventListener);
	root.addEventListener('keydown', onKeydown);
	root.addEventListener('focusin', onFocusin as EventListener);
	root.addEventListener('focusout', onFocusout as EventListener);

	return {
		dispose() {
			cancelShow();
			root.removeEventListener('pointerover', onPointerover as EventListener);
			root.removeEventListener('pointerdown', onPointerdown as EventListener);
			root.removeEventListener('pointerup', onPointerup);
			root.removeEventListener('pointerout', onPointerout as EventListener);
			root.removeEventListener('keydown', onKeydown);
			root.removeEventListener('focusin', onFocusin as EventListener);
			root.removeEventListener('focusout', onFocusout as EventListener);
		},
	};
};
