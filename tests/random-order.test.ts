import { expect, test } from "@playwright/test";

test.beforeEach(async ({ page }) => {
	await page.goto("/en/random-order");
});

test("Shuffle functionality with item input", async ({ page }) => {
	await page.fill("#textarea", "Item 1\nItem 2\nItem 3");
	await page.getByRole("button", { name: "Shuffle" }).click();
	// Wait until the shuffle finishes turning.
	await page.waitForTimeout(3000);
	const resultItems = await page
		.locator("#result-display li")
		.allTextContents();
	expect(resultItems).toHaveLength(3);
	expect(resultItems).toContain("Item 1");
	expect(resultItems).toContain("Item 2");
	expect(resultItems).toContain("Item 3");
});

test("No action is taken if input is empty and the Shuffle button is clicked", async ({
	page,
}) => {
	await page.getByRole("button", { name: "Shuffle" }).click();
	const waitingText = await page.locator("#result-display").textContent();
	expect(waitingText?.trim()).toBe("The order is...");
});

test("The start button is disabled while the roulette is spinning", async ({
	page,
}) => {
	await page.fill("#textarea", "Item 1\nItem 2\nItem 3");
	const button = page.getByRole("button", { name: "Shuffle" });
	await button.click();
	const isDisabled = await button.isDisabled();
	expect(isDisabled).toBeTruthy();
	await button.click();
	// Wait until the roulette finishes turning.
	await page.waitForTimeout(3000);
	const isEnabledAfterSpin = await button.isEnabled();
	expect(isEnabledAfterSpin).toBeTruthy();
});
