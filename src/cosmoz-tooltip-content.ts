import { normalize } from '@neovici/cosmoz-tokens/normalize';
import { component, css } from '@pionjs/pion';
import { html } from 'lit-html';

const style = css`
	:host {
		display: flex;
		flex-direction: column;
		gap: var(--cz-spacing);
		font-family: var(--cz-font-body);
		font-size: var(--cz-text-xs);
		line-height: var(--cz-text-xs-line-height);
	}

	::slotted([slot='heading']) {
		font-weight: var(--cz-font-weight-semibold);
		display: block;
	}

	::slotted([slot='description']) {
		margin: 0;
		color: var(--cz-color-gray-300);
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
