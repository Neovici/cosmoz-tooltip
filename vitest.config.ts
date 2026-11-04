import { storybookTest } from '@storybook/addon-vitest/vitest-plugin';
import { playwright } from '@vitest/browser-playwright';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import type { Frame } from 'playwright-core';
import { defineConfig } from 'vitest/config';

const dirname = path.dirname(fileURLToPath(import.meta.url));

/**
 * Taps an element with Playwright from the server side: `locator.tap()` in a
 * `hasTouch` context drives the real input pipeline - pointer events with
 * `pointerType: 'touch'`, compatibility mouse events, and the focus a tap
 * dispatches after `pointerup`. The element is found in the story frame by
 * `[data-testid]`.
 */
const realTap = async (
	{ frame }: { frame: () => Promise<Frame> },
	selector: string
) => {
	await (await frame()).locator(selector).tap();
};

export default defineConfig({
	test: {
		browser: {
			commands: { realTap },
		},
		projects: [
			{
				extends: true,
				plugins: [
					storybookTest({
						configDir: path.join(dirname, '.storybook'),
						storybookScript: 'npm run storybook:start -- --no-open',
					}),
				],
				test: {
					name: 'storybook',
					browser: {
						enabled: true,
						provider: playwright({ contextOptions: { hasTouch: true } }),
						headless: true,
						instances: [{ browser: 'chromium' }],
					},
					setupFiles: ['./.storybook/vitest.setup.ts'],
				},
			},
		],
	},
});
