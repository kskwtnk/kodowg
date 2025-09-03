import { expect, test } from "@playwright/test";

test.beforeEach(async ({ page }) => {
	await page.goto("/character-count");
});

test("Displays 0 for empty input on initial load", async ({ page }) => {
	await expect(page.locator("#result-display")).toHaveText("0");
});

test("Counting the number of characters excluding line breaks", async ({
	page,
}) => {
	await page.fill("#textarea", "Hello\nWorld");
	await expect(page.locator("#result-display")).toHaveText("10");

	await page.fill("#textarea", "\n\n");
	await expect(page.locator("#result-display")).toHaveText("0");
});

test("Counting surrogate pair letters as a single character", async ({
	page,
}) => {
	await page.fill("#textarea", "Apple🍎");
	await expect(page.locator("#result-display")).toHaveText("6");
});

test("Counts spaces correctly", async ({ page }) => {
	await page.fill("#textarea", "  ");
	await expect(page.locator("#result-display")).toHaveText("2");
});

test("Formats numbers over 1,000 with commas", async ({ page }) => {
	const longText = "a".repeat(1000);
	await page.fill("#textarea", longText);
	await expect(page.locator("#result-display")).toHaveText("1,000");
});
