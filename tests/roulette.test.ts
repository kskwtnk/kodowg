import { expect, test } from "@playwright/test";

test.beforeEach(async ({ page }) => {
	await page.goto("/roulette");
});

test("Roulette functionality with item input", async ({ page }) => {
	await page.fill("#textarea", "Item 1\nItem 2\nItem 3");
	await page.getByRole("button", { name: "スタート" }).click();
	// Wait until the roulette finishes turning.
	await page.waitForTimeout(3000);
	const result = await page.locator("#result-display").textContent();
	expect(result).not.toContain("選ばれたのは……");
});

test("No action is taken if input is empty and the Start button is clicked", async ({
	page,
}) => {
	await page.getByRole("button", { name: "スタート" }).click();
	const result = await page.locator("#result-display").textContent();
	expect(result).toContain("選ばれたのは……");
});

test("The start button is disabled while the roulette is spinning", async ({
	page,
}) => {
	await page.fill("#textarea", "Item 1\nItem 2\nItem 3");
	const button = page.getByRole("button", { name: "スタート" });
	await button.click();
	const isDisabled = await button.isDisabled();
	expect(isDisabled).toBeTruthy();
	// Wait until the roulette finishes turning.
	await page.waitForTimeout(3000);
	const isEnabledAfterSpin = await button.isEnabled();
	expect(isEnabledAfterSpin).toBeTruthy();
});
