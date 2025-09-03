import { expect, test } from "@playwright/test";

test.beforeEach(async ({ page }) => {
	await page.goto("/random-order");
});

test("Shuffle functionality with item input", async ({ page }) => {
	await page.fill("#textarea", "Item 1\nItem 2\nItem 3");
	await page.getByRole("button", { name: "シャッフル" }).click();
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
	await page.getByRole("button", { name: "シャッフル" }).click();
	const waitingText = await page.locator("#result-display").textContent();
	expect(waitingText?.trim()).toBe("順番は……");
});

test("The start button is disabled while the roulette is spinning", async ({
	page,
}) => {
	await page.fill("#textarea", "Item 1\nItem 2\nItem 3");
	const button = page.getByRole("button", { name: "シャッフル" });
	await button.click();
	const isDisabled = await button.isDisabled();
	expect(isDisabled).toBeTruthy();
	await page.click("button:has-text('シャッフル')"); // Click again to stop the spinning
	// Wait until the roulette finishes turning.
	await page.waitForTimeout(3000);
	const isEnabledAfterSpin = await button.isEnabled();
	expect(isEnabledAfterSpin).toBeTruthy();
});

test("Input trimming works correctly", async ({ page }) => {
	await page.fill("#textarea", "Item 1\n\n  Item 2\nItem 3  \n\n");
	await page.getByRole("button", { name: "シャッフル" }).click();
	await page.waitForTimeout(3000);
	const resultItems = await page
		.locator("#result-display li")
		.allTextContents();
	expect(resultItems).toHaveLength(3);
	expect(resultItems).toContain("Item 1");
	expect(resultItems).toContain("Item 2");
	expect(resultItems).toContain("Item 3");
});

test("Handles single item input", async ({ page }) => {
	await page.fill("#textarea", "Single Item");
	await page.getByRole("button", { name: "シャッフル" }).click();
	await page.waitForTimeout(3000);
	const resultItems = await page
		.locator("#result-display li")
		.allTextContents();
	expect(resultItems).toHaveLength(1);
	expect(resultItems).toContain("Single Item");
});

test("Maintains duplicate items", async ({ page }) => {
	await page.fill("#textarea", "A\nB\nA");
	await page.getByRole("button", { name: "シャッフル" }).click();
	await page.waitForTimeout(3000);
	const resultItems = await page
		.locator("#result-display li")
		.allTextContents();
	expect(resultItems).toHaveLength(3);
	const aCount = resultItems.filter((item) => item === "A").length;
	const bCount = resultItems.filter((item) => item === "B").length;
	expect(aCount).toBe(2);
	expect(bCount).toBe(1);
});

test("Shuffles items into a different order", async ({ page }) => {
	const initialItems = ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"];
	await page.fill("#textarea", initialItems.join("\n"));

	let isShuffled = false;
	for (let i = 0; i < 5; i++) {
		// Try a few times to ensure shuffling
		await page.getByRole("button", { name: "シャッフル" }).click();
		await page.waitForTimeout(3000);
		const resultItems = await page
			.locator("#result-display li")
			.allTextContents();
		if (JSON.stringify(resultItems) !== JSON.stringify(initialItems)) {
			isShuffled = true;
			break;
		}
	}
	expect(isShuffled).toBeTruthy();
});
