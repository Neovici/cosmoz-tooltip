/**
 * The pointer/focus state machine shared by the wrapping and `for=""` tooltip
 * modes. `matchTarget` resolves the mode difference — root-delegated `[name]`
 * lookup for `for=""` mode, host containment for wrapping — and returns the
 * element the tooltip interacts with, or `undefined` when the event is
 * unrelated. Hovering or focusing the target queues a delayed show; leaving
 * (or blurring) cancels a queued show and hides again.
 *
 * Listeners register and deregister in the order the browser fires the
 * events: enter, leave; focus is the keyboard fallback.
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

	const cancelShow = () => {
		clearTimeout(showTimer);
		showTimer = undefined;
	};

	const queueShow = (target: Element | undefined) => {
		cancelShow();
		showTimer = window.setTimeout(() => {
			showTimer = undefined;
			show(target);
		}, delay);
	};

	const onPointerover = (event: PointerEvent) => {
		const target = matchTarget(event);
		if (target) queueShow(target);
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

	const onFocusin = (event: FocusEvent) => {
		const target = matchTarget(event);
		if (target) queueShow(target);
	};

	const onFocusout = (event: FocusEvent) => {
		if (!matchTarget(event)) return;
		cancelShow();
		hide();
	};

	root.addEventListener('pointerover', onPointerover as EventListener);
	root.addEventListener('pointerout', onPointerout as EventListener);
	root.addEventListener('focusin', onFocusin as EventListener);
	root.addEventListener('focusout', onFocusout as EventListener);

	return {
		dispose() {
			cancelShow();
			root.removeEventListener('pointerover', onPointerover as EventListener);
			root.removeEventListener('pointerout', onPointerout as EventListener);
			root.removeEventListener('focusin', onFocusin as EventListener);
			root.removeEventListener('focusout', onFocusout as EventListener);
		},
	};
};
