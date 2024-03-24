import { expect, test } from "@playwright/test";

test.beforeEach(async ({ page }) => {
	await page.goto("/roulette");
});

test("Transition to the top page", async ({ page }) => {
	await page.getByRole("link", { name: "Return to Top page" }).click();
	await page.waitForURL("**/");
	const h1Text = await page.locator("h1").textContent();
	expect(h1Text).toBe("Kodowg");
});

test("Roulette functionality with item input", async ({ page }) => {
	await page.fill("#textarea", "Item 1\nItem 2\nItem 3");
	await page.getByRole("button", { name: "Start" }).click();
	// Wait until the roulette finishes turning.
	await page.waitForTimeout(3000);
	const result = await page.locator("#result-display").textContent();
	expect(result).toMatch(/Item 1|Item 2|Item 3/);
});

test("No action is taken if input is empty and the Start button is clicked", async ({
	page,
}) => {
	await page.getByRole("button", { name: "Start" }).click();
	const result = await page.locator("#result-display").textContent();
	expect(result).toBe("The chosen one is...");
});

test("The start button is disabled while the roulette is spinning", async ({
	page,
}) => {
	await page.fill("#textarea", "Item 1\nItem 2\nItem 3");
	const button = page.getByRole("button", { name: "Start" });
	await button.click();
	const isDisabled = await button.isDisabled();
	expect(isDisabled).toBeTruthy();
	await button.click();
	// Wait until the roulette finishes turning.
	await page.waitForTimeout(3000);
	const isEnabledAfterSpin = await button.isEnabled();
	expect(isEnabledAfterSpin).toBeTruthy();
});
