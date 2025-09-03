import { expect, test } from "@playwright/test";

test.beforeEach(async ({ page }) => {
	await page.goto("/roulette");
});

test("Roulette functionality with item input", async ({ page }) => {
	const items = ["Item 1", "Item 2", "Item 3"];
	await page.fill("#textarea", items.join("\n"));
	await page.getByRole("button", { name: "スタート" }).click();
	// Wait until the roulette finishes turning.
	await page.waitForTimeout(3000);
	const result = await page.locator("#result-display").textContent();
	expect(items).toContain(result);
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

test("Input trimming works correctly", async ({ page }) => {
	const items = ["Item 1", "Item 2", "Item 3"];
	await page.fill("#textarea", "Item 1\n\n  Item 2\nItem 3  \n\n");
	await page.getByRole("button", { name: "スタート" }).click();
	await page.waitForTimeout(3000);
	const result = await page.locator("#result-display").textContent();
	expect(items).toContain(result);
});

test("Handles single item input", async ({ page }) => {
	const item = "Single Item";
	await page.fill("#textarea", item);
	await page.getByRole("button", { name: "スタート" }).click();
	await page.waitForTimeout(3000);
	const result = await page.locator("#result-display").textContent();
	expect(result).toBe(item);
});

test("Handles duplicate items", async ({ page }) => {
	const items = ["A", "B", "A"];
	await page.fill("#textarea", items.join("\n"));
	await page.getByRole("button", { name: "スタート" }).click();
	await page.waitForTimeout(3000);
	const result = await page.locator("#result-display").textContent();
	expect(items).toContain(result);
});
