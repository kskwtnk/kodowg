import { expect, test } from '@playwright/test';

test.beforeEach(async ({ page }) => {
	await page.goto('/character-count');
});

test('Transition to the top page', async ({ page }) => {
	await page.getByRole('link', { name: 'Return to Top page' }).click();
	await page.waitForURL('**/');
	const h1Text = await page.locator('h1').textContent();
	expect(h1Text).toBe('Kodowg');
});

test('Counting the number of characters excluding line breaks', async ({ page }) => {
	await page.fill('#textarea', 'Hello\nWorld');
	await expect(page.locator('#result-display')).toHaveText('10');

	await page.fill('#textarea', '\n\n');
	await expect(page.locator('#result-display')).toHaveText('0');
});

test('Counting surrogate pair letters as a single character', async ({ page }) => {
	await page.fill('#textarea', 'Apple🍎');
	await expect(page.locator('#result-display')).toHaveText('6');
});
