import { expect, test, type Page } from '@playwright/test';

async function setupPage(page: Page, viewportSize?: { width: number; height: number }) {
	await page.goto('/');
	if (viewportSize) await page.setViewportSize(viewportSize);
}

test('Verify link navigates to the correct URL', async ({ page }) => {
	await setupPage(page);
	await page.getByRole('link', { name: 'Roulette' }).click();
	expect(page.url()).toContain('/roulette');
});

async function checkH1Text(page: Page) {
	const h1Text = await page.locator('h1').textContent();
	expect(h1Text).toBe('Kodowg');
}

test.describe('Responsive design testing', () => {
	test('Desktop view', async ({ page }) => {
		await setupPage(page, { width: 1280, height: 720 });
		await checkH1Text(page);
	});

	test('Mobile view', async ({ page }) => {
		await setupPage(page, { width: 360, height: 800 });
		await checkH1Text(page);
	});
});
