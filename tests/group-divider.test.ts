import { expect, test } from "@playwright/test";

test("has title", async ({ page }) => {
	await page.goto("/group-divider");
	await expect(page).toHaveTitle(/グループ分け/);
	await expect(page.locator("h1")).toContainText("グループ分け");
});

test("divide into groups", async ({ page }) => {
	await page.goto("/group-divider");

	const textarea = page.locator("textarea"); // ユーザーの要望通り locator を使用
	await textarea.fill("Apple\nBanana\nOrange\nGrape\nMelon\nStrawberry");

	const groupCountInput = page.locator('input[type="number"]'); // ユーザーの要望通り locator を使用
	await groupCountInput.fill("3");

	await page.getByRole("button", { name: "グループ分け" }).click();

	// 各グループのヘッディングが表示されていることを確認
	await expect(page.getByRole("group", { name: "グループ 1" })).toBeVisible();
	await expect(page.getByRole("group", { name: "グループ 2" })).toBeVisible();
	await expect(page.getByRole("group", { name: "グループ 3" })).toBeVisible();

	// 各グループ内のリストアイテムを取得
	const group1Items = page
		.getByRole("group", { name: "グループ 1" })
		.locator("li");
	const group2Items = page
		.getByRole("group", { name: "グループ 2" })
		.locator("li");
	const group3Items = page
		.getByRole("group", { name: "グループ 3" })
		.locator("li");
	await expect(group3Items).toHaveCount(2);

	const allItems = new Set();
	for (const item of await group1Items.allTextContents()) {
		allItems.add(item);
	}
	for (const item of await group2Items.allTextContents()) {
		allItems.add(item);
	}
	for (const item of await group3Items.allTextContents()) {
		allItems.add(item);
	}

	expect(allItems).toContain("Apple");
	expect(allItems).toContain("Banana");
	expect(allItems).toContain("Orange");
	expect(allItems).toContain("Grape");
	expect(allItems).toContain("Melon");
	expect(allItems).toContain("Strawberry");
});

test("should not divide when textarea is empty", async ({ page }) => {
	await page.goto("/group-divider");

	await page.getByRole("button", { name: "グループ分け" }).click();
	// グループ1が表示されていないことを確認
	await expect(
		page.getByRole("group", { name: "グループ 1" }),
	).not.toBeVisible();
});
