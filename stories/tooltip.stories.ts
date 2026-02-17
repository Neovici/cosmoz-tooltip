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
				{ timeout: 500 },
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
			},
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
					/For focus test tooltip/u,
				);
				if (tooltipTexts.length > 0) {
					expect(tooltipTexts[0]).not.toBeVisible();
				}
			},
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
					'Hover me (disabled for tooltip)',
				);
				await userEvent.hover(input);

				// Wait beyond the delay
				await new Promise((resolve) => setTimeout(resolve, 200));

				const tooltipTexts =
					canvas.queryAllByShadowText(/Disabled for tooltip/u);
				if (tooltipTexts.length > 0) {
					expect(tooltipTexts[0]).not.toBeVisible();
				}
			},
		);
	},
};
