import { expect, test, type Page } from '@playwright/test';

async function setupRoulettePage(page: Page, items = '') {
	await page.goto('/roulette');
	await page.fill('#item', items);
}

async function clickStartAndWait(page: Page, waitTime = 2000) {
	await page.getByRole('button', { name: 'Start' }).click();
	await page.waitForTimeout(waitTime);
}

test('Verify link navigates to the correct URL', async ({ page }) => {
	await page.goto('/');
	const h1Text = await page.locator('h1').textContent();
	expect(h1Text).toBe('Kodowg');
});

test('Roulette functionality with item input', async ({ page }) => {
	await setupRoulettePage(page, 'Item 1\nItem 2\nItem 3');
	await clickStartAndWait(page);

	const result = await page.locator('#result-display').textContent();
	expect(result).toMatch(/Item 1|Item 2|Item 3/);
});

test('No action is taken if input is empty and the "Start" button is clicked', async ({ page }) => {
	await setupRoulettePage(page);
	await clickStartAndWait(page, 500);

	const result = await page.locator('#result-display').textContent();
	expect(result).toBe('The chosen one is...');
});

test('The "Start" button is disabled while the roulette is spinning', async ({ page }) => {
	await setupRoulettePage(page, 'Item 1\nItem 2\nItem 3');
	await page.getByRole('button', { name: 'Start' }).click();

	const isDisabled = await page.getByRole('button', { name: 'Start' }).isDisabled();
	expect(isDisabled).toBeTruthy();

	await page.waitForTimeout(3000);
	const isEnabledAfterSpin = await page.getByRole('button', { name: 'Start' }).isEnabled();
	expect(isEnabledAfterSpin).toBeTruthy();
});
