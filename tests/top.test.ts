import { expect, test } from "@playwright/test";

test.beforeEach(async ({ page }) => {
	await page.goto("/en");
});

test.describe("Verify link navigates to the correct URL", () => {
	test("Roulette page", async ({ page }) => {
		await page.getByRole("link", { name: "Roulette" }).click();
		await page.waitForURL("**/en/roulette");
		expect(page.url()).toContain("/en/roulette");
	});

	test("Character count page", async ({ page }) => {
		await page.getByRole("link", { name: "Character Count" }).click();
		await page.waitForURL("**/en/character-count");
		expect(page.url()).toContain("/en/character-count");
	});
});

test.describe("Responsive design testing", () => {
	test("Desktop view", async ({ page }) => {
		await page.setViewportSize({ width: 1280, height: 720 });
		const h1Text = await page.locator("h1").textContent();
		expect(h1Text).toBe("Kodowg");
	});

	test("Mobile view", async ({ page }) => {
		await page.setViewportSize({ width: 360, height: 800 });
		const h1Text = await page.locator("h1").textContent();
		expect(h1Text).toBe("Kodowg");
	});
});
