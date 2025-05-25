import { expect, test } from "@playwright/test";

test.beforeEach(async ({ page }) => {
	await page.goto("/");
});

test.describe("Verify link navigates to the correct URL", () => {
	test("Character count page", async ({ page }) => {
		await page.getByRole("link", { name: "文字数カウント" }).click();
		await page.waitForURL("**/character-count");
		const heading = await page.getByRole("heading", { level: 1 }).textContent();
		expect(heading).toBe("文字数カウント");
	});

	test("QR code generator page", async ({ page }) => {
		await page.getByRole("link", { name: "QRコードジェネレーター" }).click();
		await page.waitForURL("**/qr-code-generator");
		const heading = await page.getByRole("heading", { level: 1 }).textContent();
		expect(heading).toBe("QRコードジェネレーター");
	});

	test("Random order page", async ({ page }) => {
		await page.getByRole("link", { name: "ランダム並び替え" }).click();
		await page.waitForURL("**/random-order");
		const heading = await page.getByRole("heading", { level: 1 }).textContent();
		expect(heading).toBe("ランダム並び替え");
	});

	test("Roulette page", async ({ page }) => {
		await page.getByRole("link", { name: "ルーレット" }).click();
		await page.waitForURL("**/roulette");
		const heading = await page.getByRole("heading", { level: 1 }).textContent();
		expect(heading).toBe("ルーレット");
	});

	test("Timer page", async ({ page }) => {
		await page.getByRole("link", { name: "タイマー" }).click();
		await page.waitForURL("**/timer");
		const heading = await page.getByRole("heading", { level: 1 }).textContent();
		expect(heading).toBe("タイマー");
	});
});

test.describe("Responsive design testing", () => {
	test("Desktop view", async ({ page }) => {
		await page.setViewportSize({ width: 1280, height: 720 });
		const h1Text = await page.getByRole("heading", { level: 1 }).textContent();
		expect(h1Text).toBe("Kodowg");
	});

	test("Mobile view", async ({ page }) => {
		await page.setViewportSize({ width: 360, height: 800 });
		const h1Text = await page.getByRole("heading", { level: 1 }).textContent();
		expect(h1Text).toBe("Kodowg");
	});
});
