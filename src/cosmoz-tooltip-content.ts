import { normalize } from '@neovici/cosmoz-tokens/normalize';
import { component, css } from '@pionjs/pion';
import { html } from 'lit-html';

const style = css`
	:host {
		display: flex;
		flex-direction: column;
		gap: var(--cosmoz-tooltip-gap, var(--cz-spacing));
		font-family: var(--cz-font-body);
	}

	::slotted([slot='heading']) {
		display: block;
	}

	::slotted([slot='description']) {
		margin: 0;
	}
`;

customElements.define(
	'cosmoz-tooltip-content',
	component(
		() => html`
			<slot name="heading"></slot>
			<slot name="description"></slot>
			<slot></slot>
		`,
		{ styleSheets: [normalize, style] },
	),
);
