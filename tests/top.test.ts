import { expect, test } from '@playwright/test';

test.beforeEach(async ({ page }) => {
	await page.goto('/');
});

test.describe('Verify link navigates to the correct URL', () => {
	test('Roulette page', async ({ page }) => {
		await page.getByRole('link', { name: 'Roulette' }).click();
		await page.waitForURL('**/roulette');
		expect(page.url()).toContain('/roulette');
	});

	test('Character count page', async ({ page }) => {
		await page.getByRole('link', { name: 'Character Count' }).click();
		await page.waitForURL('**/character-count');
		expect(page.url()).toContain('/character-count');
	});
});

test.describe('Responsive design testing', () => {
	test('Desktop view', async ({ page }) => {
		await page.setViewportSize({ width: 1280, height: 720 });
		const h1Text = await page.locator('h1').textContent();
		expect(h1Text).toBe('Kodowg');
	});

	test('Mobile view', async ({ page }) => {
		await page.setViewportSize({ width: 360, height: 800 });
		const h1Text = await page.locator('h1').textContent();
		expect(h1Text).toBe('Kodowg');
	});
});
