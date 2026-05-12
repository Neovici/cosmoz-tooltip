import { useEffect, useState } from '@pionjs/pion';

export const useHasSlottedContent = (slotRef: {
	current: HTMLSlotElement | undefined;
}): boolean => {
	const [hasContent, setHasContent] = useState(false);

	useEffect(() => {
		const slot = slotRef.current;
		if (!slot) return;

		const check = () => {
			setHasContent(slot.assignedElements().length > 0);
		};

		check();
		slot.addEventListener('slotchange', check);
		return () => slot.removeEventListener('slotchange', check);
	}, [slotRef.current]);

	return hasContent;
};
