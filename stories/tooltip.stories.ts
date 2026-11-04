import '@neovici/cosmoz-button';
import {
	edit04Icon,
	filterLinesIcon,
	trash01Icon,
} from '@neovici/cosmoz-icons/untitled';
import { html } from '@pionjs/pion';
import type { Meta, StoryObj } from '@storybook/web-components';
import { expect, waitFor } from 'storybook/test';
import '../src/cosmoz-tooltip';

interface StoryArgs {
	heading: string;
	description: string;
	placement: string;
	delay: number;
}

const meta: Meta<StoryArgs> = {
	title: 'CosmozTooltip',
	component: 'cosmoz-tooltip',
	tags: ['autodocs'],
	argTypes: {
		heading: { control: 'text', description: 'Tooltip heading (bold text)' },
		description: {
			control: 'text',
			description: 'Tooltip description (secondary text)',
		},
		placement: {
			control: 'select',
			options: [
				'top',
				'bottom',
				'left',
				'right',
				'top center',
				'bottom center',
			],
			description: 'Position relative to trigger',
		},
		delay: {
			control: 'number',
			description: 'Delay before showing tooltip (ms)',
		},
	},
	args: {
		heading: 'Tooltip Heading',
		description: 'This is helpful information.',
		placement: 'top',
		delay: 300,
	},
};

export default meta;

type Story = StoryObj<StoryArgs>;

export const Basic: Story = {
	render: (args) => html`
		<div style="padding: 4rem; text-align: center;">
			<cosmoz-tooltip
				heading=${args.heading}
				description=${args.description}
				placement=${args.placement}
				delay=${args.delay}
			>
				<cosmoz-button>Hover me</cosmoz-button>
			</cosmoz-tooltip>
		</div>
	`,
	play: async ({ canvas, step, userEvent }) => {
		await step('Shows tooltip on hover', async () => {
			const button = canvas.getByShadowRole('button');
			await userEvent.hover(button);
			await canvas.findByShadowText(/Tooltip Heading/u, {}, { timeout: 1000 });
		});

		await step('Hides tooltip on mouse leave', async () => {
			const button = canvas.getByShadowRole('button');
			await userEvent.unhover(button);
			await waitFor(
				async () => {
					const elements = canvas.queryAllByShadowText(/Tooltip Heading/u);
					if (elements.length > 0) {
						expect(elements[0]).not.toBeVisible();
					}
				},
				{ timeout: 500 }
			);
		});
	},
};

export const HeadingOnly: Story = {
	args: {
		heading: 'Quick tip',
		description: '',
	},
	render: (args) => html`
		<div style="padding: 4rem; text-align: center;">
			<cosmoz-tooltip heading=${args.heading} placement=${args.placement}>
				<cosmoz-button>Hover for heading only</cosmoz-button>
			</cosmoz-tooltip>
		</div>
	`,
	play: async ({ canvas, step, userEvent }) => {
		await step('Shows tooltip with heading only', async () => {
			const button = canvas.getByShadowRole('button');
			await userEvent.hover(button);
			await canvas.findByShadowText(/Quick tip/u, {}, { timeout: 1000 });
		});
	},
};

export const DescriptionOnly: Story = {
	args: {
		heading: '',
		description: 'Just a simple description without a heading',
	},
	render: (args) => html`
		<div style="padding: 4rem; text-align: center;">
			<cosmoz-tooltip
				description=${args.description}
				placement=${args.placement}
			>
				<cosmoz-button>Hover for description only</cosmoz-button>
			</cosmoz-tooltip>
		</div>
	`,
};

export const ForAttribute: Story = {
	render: (args) => html`
		<div style="padding: 4rem;">
			<div
				style="display: flex; flex-direction: column; gap: 1rem; max-width: 300px;"
			>
				<div>
					<cosmoz-tooltip
						for="hover-target"
						heading="Hover tooltip"
						description="This appears when you hover the text"
						placement=${args.placement}
						delay=${args.delay}
					></cosmoz-tooltip>
					<span
						name="hover-target"
						style="cursor: help; text-decoration: underline dotted;"
					>
						Hover over this text
					</span>
				</div>

				<div>
					<label>Email address</label>
					<input
						name="email-input"
						type="email"
						placeholder="you@example.com"
					/>
					<cosmoz-tooltip
						for="email-input"
						heading="Email format"
						description="Enter a valid email address like name@domain.com"
						placement=${args.placement}
						delay=${args.delay}
					></cosmoz-tooltip>
				</div>
			</div>
		</div>
	`,
	play: async ({ canvas, step, userEvent }) => {
		await step('Shows tooltip when hovering span', async () => {
			const span = canvas.getByText('Hover over this text');
			await userEvent.hover(span);
			await canvas.findByShadowText(/Hover tooltip/u, {}, { timeout: 1000 });
		});

		await step('Shows tooltip when hovering input', async () => {
			const input = canvas.getByPlaceholderText('you@example.com');
			await userEvent.hover(input);
			await canvas.findByShadowText(/Email format/u, {}, { timeout: 1000 });
		});
	},
};

export const Placements: Story = {
	render: () => html`
		<div
			style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 4rem; padding: 6rem; place-items: center;"
		>
			<cosmoz-tooltip heading="Top placement" placement="top">
				<cosmoz-button>Top</cosmoz-button>
			</cosmoz-tooltip>
			<cosmoz-tooltip heading="Top Center" placement="top center">
				<cosmoz-button>Top Center</cosmoz-button>
			</cosmoz-tooltip>
			<div></div>

			<cosmoz-tooltip heading="Left placement" placement="left">
				<cosmoz-button>Left</cosmoz-button>
			</cosmoz-tooltip>
			<div></div>
			<cosmoz-tooltip heading="Right placement" placement="right">
				<cosmoz-button>Right</cosmoz-button>
			</cosmoz-tooltip>

			<div></div>
			<cosmoz-tooltip heading="Bottom placement" placement="bottom">
				<cosmoz-button>Bottom</cosmoz-button>
			</cosmoz-tooltip>
			<cosmoz-tooltip heading="Bottom Center" placement="bottom center">
				<cosmoz-button>Bottom Center</cosmoz-button>
			</cosmoz-tooltip>
		</div>
	`,
};

export const CustomDelay: Story = {
	args: {
		delay: 0,
		heading: 'Instant tooltip',
		description: 'This appears immediately',
	},
	render: (args) => html`
		<div style="padding: 4rem; text-align: center;">
			<cosmoz-tooltip
				heading=${args.heading}
				description=${args.description}
				delay=${args.delay}
			>
				<cosmoz-button>No delay (instant)</cosmoz-button>
			</cosmoz-tooltip>
		</div>
	`,
	play: async ({ canvas, step, userEvent }) => {
		await step('Shows tooltip immediately', async () => {
			const button = canvas.getByShadowRole('button');
			await userEvent.hover(button);
			await canvas.findByShadowText(/Instant tooltip/u, {}, { timeout: 200 });
		});
	},
};

export const CustomContent: Story = {
	render: (args) => html`
		<div style="padding: 4rem; text-align: center;">
			<cosmoz-tooltip placement=${args.placement} delay=${args.delay}>
				<cosmoz-button>Rich content tooltip</cosmoz-button>
				<div slot="content">
					<strong>Custom HTML</strong>
					<ul style="margin: 0.5rem 0 0; padding-left: 1.25rem;">
						<li>First item</li>
						<li>Second item</li>
						<li>Third item</li>
					</ul>
				</div>
			</cosmoz-tooltip>
		</div>
	`,
};

export const OnLinks: Story = {
	render: (args) => html`
		<div style="padding: 4rem;">
			<p>
				Check out our
				<cosmoz-tooltip
					heading="External link"
					description="Opens in a new tab"
					placement=${args.placement}
					delay=${args.delay}
				>
					<a href="https://example.com" target="_blank">documentation</a>
				</cosmoz-tooltip>
				for more information.
			</p>
		</div>
	`,
};

export const FocusWithoutHover: Story = {
	args: {
		delay: 0,
		heading: 'Focus test tooltip',
		description: 'Should not appear on focus alone',
	},
	render: (args) => html`
		<div style="padding: 4rem; text-align: center;">
			<cosmoz-tooltip
				heading=${args.heading}
				description=${args.description}
				delay=${args.delay}
			>
				<cosmoz-button>Focus me</cosmoz-button>
			</cosmoz-tooltip>
		</div>
	`,
	play: async ({ canvas, step, userEvent }) => {
		await step(
			'Should NOT show tooltip after hover out even with focus',
			async () => {
				const button = canvas.getByShadowRole('button');

				// Hover then click (focus), then move away
				await userEvent.hover(button);
				await userEvent.click(button);
				await userEvent.unhover(button);

				// Wait beyond the delay
				await new Promise((resolve) => setTimeout(resolve, 200));

				const tooltipTexts = canvas.queryAllByShadowText(/Focus test tooltip/u);
				if (tooltipTexts.length > 0) {
					expect(tooltipTexts[0]).not.toBeVisible();
				}
			}
		);
	},
};

export const ForAttributeFocusWithoutHover: Story = {
	args: {
		delay: 0,
		heading: 'For focus test tooltip',
		description: 'Should not appear on focus alone',
	},
	render: (args) => html`
		<div style="padding: 4rem; text-align: center;">
			<cosmoz-tooltip
				for="focus-test-input"
				heading=${args.heading}
				description=${args.description}
				placement=${args.placement}
				delay=${args.delay}
			></cosmoz-tooltip>
			<input name="focus-test-input" placeholder="Focus test input" />
		</div>
	`,
	play: async ({ canvas, step, userEvent }) => {
		await step(
			'Should NOT show tooltip after hover out even with focus',
			async () => {
				const input = canvas.getByPlaceholderText('Focus test input');

				// Hover then click (focus), then move away
				await userEvent.hover(input);
				await userEvent.click(input);
				await userEvent.unhover(input);

				// Wait beyond the delay
				await new Promise((resolve) => setTimeout(resolve, 200));

				const tooltipTexts = canvas.queryAllByShadowText(
					/For focus test tooltip/u
				);
				if (tooltipTexts.length > 0) {
					expect(tooltipTexts[0]).not.toBeVisible();
				}
			}
		);
	},
};

export const OnIcons: Story = {
	render: (args) => html`
		<div style="padding: 4rem; display: flex; gap: 1rem;">
			<cosmoz-tooltip
				heading="Edit"
				placement=${args.placement}
				delay=${args.delay}
			>
				<cosmoz-button variant="tertiary" aria-label="Edit">
					${edit04Icon({ width: '20', height: '20' })}
				</cosmoz-button>
			</cosmoz-tooltip>

			<cosmoz-tooltip
				heading="Delete"
				description="This action cannot be undone"
				placement=${args.placement}
				delay=${args.delay}
			>
				<cosmoz-button variant="tertiary" aria-label="Delete">
					${trash01Icon({ width: '20', height: '20' })}
				</cosmoz-button>
			</cosmoz-tooltip>

			<cosmoz-tooltip
				heading="Filter"
				placement=${args.placement}
				delay=${args.delay}
			>
				<cosmoz-button variant="tertiary" aria-label="Filter">
					${filterLinesIcon({ width: '20', height: '20' })}
				</cosmoz-button>
			</cosmoz-tooltip>
		</div>
	`,
};

export const Disabled: Story = {
	args: {
		delay: 0,
		heading: 'Disabled tooltip',
		description: 'This should not appear',
	},
	render: (args) => html`
		<div style="padding: 4rem; text-align: center;">
			<cosmoz-tooltip
				heading=${args.heading}
				description=${args.description}
				delay=${args.delay}
				disabled
			>
				<cosmoz-button>Hover me (disabled tooltip)</cosmoz-button>
			</cosmoz-tooltip>
		</div>
	`,
	play: async ({ canvas, step, userEvent }) => {
		await step('Should NOT show tooltip on hover when disabled', async () => {
			const button = canvas.getByShadowRole('button');
			await userEvent.hover(button);

			// Wait beyond the delay
			await new Promise((resolve) => setTimeout(resolve, 200));

			const tooltipTexts = canvas.queryAllByShadowText(/Disabled tooltip/u);
			if (tooltipTexts.length > 0) {
				expect(tooltipTexts[0]).not.toBeVisible();
			}
		});
	},
};

export const DisabledForAttribute: Story = {
	args: {
		delay: 0,
		heading: 'Disabled for tooltip',
		description: 'This should not appear',
	},
	render: (args) => html`
		<div style="padding: 4rem; text-align: center;">
			<cosmoz-tooltip
				for="disabled-target"
				heading=${args.heading}
				description=${args.description}
				placement=${args.placement}
				delay=${args.delay}
				disabled
			></cosmoz-tooltip>
			<input
				name="disabled-target"
				placeholder="Hover me (disabled for tooltip)"
			/>
		</div>
	`,
	play: async ({ canvas, step, userEvent }) => {
		await step(
			'Should NOT show tooltip on hover when disabled (for mode)',
			async () => {
				const input = canvas.getByPlaceholderText(
					'Hover me (disabled for tooltip)'
				);
				await userEvent.hover(input);

				// Wait beyond the delay
				await new Promise((resolve) => setTimeout(resolve, 200));

				const tooltipTexts =
					canvas.queryAllByShadowText(/Disabled for tooltip/u);
				if (tooltipTexts.length > 0) {
					expect(tooltipTexts[0]).not.toBeVisible();
				}
			}
		);
	},
};

export const ForAttributePointerDown: Story = {
	args: {
		delay: 300,
		heading: 'Press to dismiss',
		description: 'Hidden while pressing',
	},
	render: (args) => html`
		<div style="padding: 4rem; text-align: center;">
			<cosmoz-tooltip
				for="press-target"
				heading=${args.heading}
				description=${args.description}
				placement=${args.placement}
				delay=${args.delay}
			></cosmoz-tooltip>
			<input name="press-target" placeholder="Hover then press me" />
		</div>
	`,
	play: async ({ canvas, step, userEvent }) => {
		// The for-mode popover is a light-DOM sibling of <cosmoz-tooltip>.
		const isOpen = (input: Element) =>
			input
				.getRootNode()
				.querySelector('.cosmoz-tooltip-popover')
				?.matches(':popover-open') ?? false;

		await step('Shows tooltip on hover', async () => {
			const input = canvas.getByPlaceholderText('Hover then press me');
			await userEvent.hover(input);
			await waitFor(() => expect(isOpen(input)).toBe(true), { timeout: 1000 });
		});

		await step('Hides tooltip on press while visible', async () => {
			const input = canvas.getByPlaceholderText('Hover then press me');
			await userEvent.click(input);
			await waitFor(() => expect(isOpen(input)).toBe(false), { timeout: 500 });
		});

		// The press left the pointer on the target; the input keeps focus.
		// A tooltip that re-arms (focus or pointer) would be open within
		// the 300ms delay, so close the window and assert once.
		await step(
			'Does not reappear while the pointer stays on the target',
			async () => {
				const input = canvas.getByPlaceholderText('Hover then press me');
				await new Promise((resolve) => setTimeout(resolve, 500));
				expect(isOpen(input)).toBe(false);
			}
		);
	},
};

export const ForAttributeTouch: Story = {
	args: {
		delay: 0,
		heading: 'Touch tooltip',
		description: 'Never shows for touch pointers',
	},
	render: (args) => html`
		<div style="padding: 4rem; text-align: center;">
			<cosmoz-tooltip
				for="touch-target"
				heading=${args.heading}
				description=${args.description}
				placement=${args.placement}
				delay=${args.delay}
			></cosmoz-tooltip>
			<input name="touch-target" placeholder="Tap me" />
		</div>
	`,
	play: async ({ canvas, step, userEvent }) => {
		// The for-mode popover is a light-DOM sibling of <cosmoz-tooltip>.
		const isOpen = (input: Element) =>
			input
				.getRootNode()
				.querySelector('.cosmoz-tooltip-popover')
				?.matches(':popover-open') ?? false;

		await step('Shows tooltip for a mouse pointer', async () => {
			const input = canvas.getByPlaceholderText('Tap me');
			await userEvent.hover(input);
			await waitFor(() => expect(isOpen(input)).toBe(true), { timeout: 1000 });
			await userEvent.unhover(input);
			await waitFor(() => expect(isOpen(input)).toBe(false), { timeout: 500 });
		});

		// userEvent cannot drive touch pointers; dispatch the event that the
		// touch tap produces on the target. With delay 0 any unhandled touch
		// pointerover would open the tooltip immediately.
		await step('Does not show tooltip for touch pointers', async () => {
			const input = canvas.getByPlaceholderText('Tap me');
			input.dispatchEvent(
				new PointerEvent('pointerover', {
					pointerId: 1,
					pointerType: 'touch',
					bubbles: true,
					composed: true,
				})
			);
			await new Promise((resolve) => setTimeout(resolve, 250));
			expect(isOpen(input)).toBe(false);
		});
		// A tap focuses the trigger after pointerup on touch, outside the
		// press-suppression window; the tooltip must stay hidden.
		await step('Does not show tooltip for tap focus', async () => {
			const input = canvas.getByPlaceholderText('Tap me');
			for (const type of ['pointerdown', 'pointerup', 'pointerout']) {
				input.dispatchEvent(
					new PointerEvent(type, {
						pointerId: 1,
						pointerType: 'touch',
						bubbles: true,
						composed: true,
					})
				);
			}
			input.dispatchEvent(
				new FocusEvent('focusin', {
					bubbles: true,
					composed: true,
				})
			);
			await new Promise((resolve) => setTimeout(resolve, 250));
			expect(isOpen(input)).toBe(false);
		});
	},
};

export const WrappingPointerDown: Story = {
	args: {
		delay: 300,
		heading: 'Press to dismiss',
		description: 'Hidden while pressing',
	},
	render: (args) => html`
		<div style="padding: 4rem; text-align: center;">
			<cosmoz-tooltip
				heading=${args.heading}
				description=${args.description}
				placement=${args.placement}
				delay=${args.delay}
			>
				<cosmoz-button>Hover then press me</cosmoz-button>
			</cosmoz-tooltip>
		</div>
	`,
	play: async ({ canvas, step, userEvent }) => {
		// The wrapping-mode popover lives in the tooltip's shadow root.
		const isOpen = (trigger: Element) => {
			const button = (trigger.getRootNode() as ShadowRoot).host as Element;
			const tooltip = button?.closest?.('cosmoz-tooltip');
			return (
				tooltip?.shadowRoot
					?.querySelector('.cosmoz-tooltip-popover')
					?.matches(':popover-open') ?? false
			);
		};

		await step('Shows tooltip on hover', async () => {
			const button = canvas.getByShadowRole('button');
			await userEvent.hover(button);
			await waitFor(async () => expect(isOpen(button)).toBe(true), {
				timeout: 1000,
			});
		});

		await step('Hides tooltip on press while visible', async () => {
			const button = canvas.getByShadowRole('button');
			await userEvent.click(button);
			await waitFor(async () => expect(isOpen(button)).toBe(false), {
				timeout: 500,
			});
		});

		await step('Does not reappear while the trigger keeps focus', async () => {
			const button = canvas.getByShadowRole('button');
			// The press left focus on the trigger; a tooltip that re-arms would
			// be open within the 300ms delay, so close the window and assert once.
			await new Promise((resolve) => setTimeout(resolve, 500));
			expect(isOpen(button)).toBe(false);
		});
	},
};

export const WrappingTouch: Story = {
	args: {
		delay: 0,
		heading: 'Touch tooltip',
		description: 'Never shows for touch pointers',
	},
	render: (args) => html`
		<div style="padding: 4rem; text-align: center;">
			<cosmoz-tooltip
				heading=${args.heading}
				description=${args.description}
				placement=${args.placement}
				delay=${args.delay}
			>
				<cosmoz-button>Tap me</cosmoz-button>
			</cosmoz-tooltip>
		</div>
	`,
	play: async ({ canvas, step, userEvent }) => {
		// The wrapping-mode popover lives in the tooltip's shadow root.
		const isOpen = (trigger: Element) => {
			const button = (trigger.getRootNode() as ShadowRoot).host as Element;
			const tooltip = button?.closest?.('cosmoz-tooltip');
			return (
				tooltip?.shadowRoot
					?.querySelector('.cosmoz-tooltip-popover')
					?.matches(':popover-open') ?? false
			);
		};

		await step('Shows tooltip for a mouse pointer', async () => {
			const button = canvas.getByShadowRole('button');
			await userEvent.hover(button);
			await waitFor(async () => expect(isOpen(button)).toBe(true), {
				timeout: 1000,
			});
			await userEvent.unhover(button);
			await waitFor(async () => expect(isOpen(button)).toBe(false), {
				timeout: 500,
			});
		});

		// userEvent cannot drive touch pointers; dispatch the event that the
		// touch tap produces on the trigger. With delay 0 any unhandled touch
		// pointerover would open the tooltip immediately.
		await step('Does not show tooltip for touch pointers', async () => {
			const button = canvas.getByShadowRole('button');
			button.dispatchEvent(
				new PointerEvent('pointerover', {
					pointerId: 1,
					pointerType: 'touch',
					bubbles: true,
					composed: true,
				})
			);
			await new Promise((resolve) => setTimeout(resolve, 250));
			expect(isOpen(button)).toBe(false);
		});
		// A tap focuses the trigger after pointerup on touch, outside the
		// press-suppression window; the tooltip must stay hidden.
		await step('Does not show tooltip for tap focus', async () => {
			const button = canvas.getByShadowRole('button');
			for (const type of ['pointerdown', 'pointerup', 'pointerout']) {
				button.dispatchEvent(
					new PointerEvent(type, {
						pointerId: 1,
						pointerType: 'touch',
						bubbles: true,
						composed: true,
					})
				);
			}
			button.dispatchEvent(
				new FocusEvent('focusin', {
					bubbles: true,
					composed: true,
				})
			);
			await new Promise((resolve) => setTimeout(resolve, 250));
			expect(isOpen(button)).toBe(false);
		});
	},
};

export const EmptyPassthrough: Story = {
	render: () => html`
		<div style="padding: 4rem; text-align: center;">
			<cosmoz-tooltip>
				<cosmoz-button>No heading/description/slot content</cosmoz-button>
			</cosmoz-tooltip>
		</div>
	`,
	play: async ({ canvas, step }) => {
		await step('Renders as pass-through without popover', async () => {
			const button = canvas.getByShadowRole('button');
			expect(button).toBeVisible();
		});
	},
};
