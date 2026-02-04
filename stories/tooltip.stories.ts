import { deleteIcon, editIcon, filterIcon } from '@neovici/cosmoz-icons';
import { html } from '@pionjs/pion';
import type { Meta, StoryObj } from '@storybook/web-components';
import { expect, waitFor } from 'storybook/test';
import '../src/cosmoz-tooltip';

interface StoryArgs {
	title: string;
	description: string;
	placement: string;
	delay: number;
}

const meta: Meta<StoryArgs> = {
	title: 'CosmozTooltip',
	component: 'cosmoz-tooltip',
	tags: ['autodocs'],
	argTypes: {
		title: { control: 'text', description: 'Tooltip title (bold heading)' },
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
		title: 'Tooltip Title',
		description: 'This is helpful information about the element.',
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
				title=${args.title}
				description=${args.description}
				placement=${args.placement}
				delay=${args.delay}
			>
				<button>Hover me</button>
			</cosmoz-tooltip>
		</div>
	`,
	play: async ({ canvas, step, userEvent }) => {
		await step('Shows tooltip on hover', async () => {
			const button = canvas.getByRole('button');
			await userEvent.hover(button);
			// Wait for the title text to become visible (popover opened)
			await canvas.findByShadowText(/Tooltip Title/u, {}, { timeout: 1000 });
		});

		await step('Hides tooltip on mouse leave', async () => {
			const button = canvas.getByRole('button');
			await userEvent.unhover(button);
			// Give time for popover to close
			await waitFor(
				async () => {
					const elements = canvas.queryAllByShadowText(/Tooltip Title/u);
					// Element exists but should not be visible
					if (elements.length > 0) {
						expect(elements[0]).not.toBeVisible();
					}
				},
				{ timeout: 500 },
			);
		});
	},
};

export const TitleOnly: Story = {
	args: {
		title: 'Quick tip',
		description: '',
	},
	render: (args) => html`
		<div style="padding: 4rem; text-align: center;">
			<cosmoz-tooltip title=${args.title} placement=${args.placement}>
				<button>Hover for title only</button>
			</cosmoz-tooltip>
		</div>
	`,
	play: async ({ canvas, step, userEvent }) => {
		await step('Shows tooltip with title only', async () => {
			const button = canvas.getByRole('button');
			await userEvent.hover(button);
			await canvas.findByShadowText(/Quick tip/u, {}, { timeout: 1000 });
		});
	},
};

export const DescriptionOnly: Story = {
	args: {
		title: '',
		description: 'Just a simple description without a title',
	},
	render: (args) => html`
		<div style="padding: 4rem; text-align: center;">
			<cosmoz-tooltip
				description=${args.description}
				placement=${args.placement}
			>
				<button>Hover for description only</button>
			</cosmoz-tooltip>
		</div>
	`,
};

export const ForAttribute: Story = {
	render: () => html`
		<div style="padding: 4rem;">
			<div
				style="display: flex; flex-direction: column; gap: 0.5rem; max-width: 300px;"
			>
				<label for="email-input">Email address</label>
				<input name="email-input" type="email" placeholder="you@example.com" />
				<cosmoz-tooltip
					for="email-input"
					title="Email format"
					description="Enter a valid email address like name@domain.com"
				></cosmoz-tooltip>
			</div>
		</div>
	`,
	play: async ({ canvas, step, userEvent }) => {
		await step('Shows tooltip when input is focused', async () => {
			const input = canvas.getByPlaceholderText('you@example.com');
			await userEvent.click(input);
			await canvas.findByShadowText(/Email format/u, {}, { timeout: 1000 });
		});
	},
};

export const Placements: Story = {
	render: () => html`
		<div
			style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 4rem; padding: 6rem; place-items: center;"
		>
			<cosmoz-tooltip title="Top placement" placement="top">
				<button style="padding: 1rem 2rem;">Top</button>
			</cosmoz-tooltip>
			<cosmoz-tooltip title="Top Center" placement="top center">
				<button style="padding: 1rem 2rem;">Top Center</button>
			</cosmoz-tooltip>
			<div></div>

			<cosmoz-tooltip title="Left placement" placement="left">
				<button style="padding: 1rem 2rem;">Left</button>
			</cosmoz-tooltip>
			<div></div>
			<cosmoz-tooltip title="Right placement" placement="right">
				<button style="padding: 1rem 2rem;">Right</button>
			</cosmoz-tooltip>

			<div></div>
			<cosmoz-tooltip title="Bottom placement" placement="bottom">
				<button style="padding: 1rem 2rem;">Bottom</button>
			</cosmoz-tooltip>
			<cosmoz-tooltip title="Bottom Center" placement="bottom center">
				<button style="padding: 1rem 2rem;">Bottom Center</button>
			</cosmoz-tooltip>
		</div>
	`,
};

export const CustomDelay: Story = {
	args: {
		delay: 0,
		title: 'Instant tooltip',
		description: 'This appears immediately',
	},
	render: (args) => html`
		<div style="padding: 4rem; text-align: center;">
			<cosmoz-tooltip
				title=${args.title}
				description=${args.description}
				delay=${args.delay}
			>
				<button>No delay (instant)</button>
			</cosmoz-tooltip>
		</div>
	`,
	play: async ({ canvas, step, userEvent }) => {
		await step('Shows tooltip immediately', async () => {
			const button = canvas.getByRole('button');
			await userEvent.hover(button);
			// With 0 delay, should appear almost immediately
			await canvas.findByShadowText(/Instant tooltip/u, {}, { timeout: 200 });
		});
	},
};

export const CustomContent: Story = {
	render: () => html`
		<div style="padding: 4rem; text-align: center;">
			<cosmoz-tooltip>
				<button>Rich content tooltip</button>
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
	render: () => html`
		<div style="padding: 4rem;">
			<p>
				Check out our
				<cosmoz-tooltip
					title="External link"
					description="Opens in a new tab"
					placement="top"
				>
					<a href="https://example.com" target="_blank">documentation</a>
				</cosmoz-tooltip>
				for more information.
			</p>
		</div>
	`,
};

export const OnIcons: Story = {
	render: () => html`
		<div style="padding: 4rem; display: flex; gap: 1rem;">
			<cosmoz-tooltip title="Edit" placement="bottom">
				<button aria-label="Edit" style="padding: 0.5rem;">
					${editIcon({ width: '20', height: '20' })}
				</button>
			</cosmoz-tooltip>

			<cosmoz-tooltip
				title="Delete"
				description="This action cannot be undone"
				placement="bottom"
			>
				<button aria-label="Delete" style="padding: 0.5rem;">
					${deleteIcon({ width: '20', height: '20' })}
				</button>
			</cosmoz-tooltip>

			<cosmoz-tooltip title="Filter" placement="bottom">
				<button aria-label="Filter" style="padding: 0.5rem;">
					${filterIcon({ width: '20', height: '20' })}
				</button>
			</cosmoz-tooltip>
		</div>
	`,
};
