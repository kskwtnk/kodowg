import { expect, test } from "@playwright/test";

test.beforeEach(async ({ page }) => {
	await page.goto("/qr-code-generator");
});

test("Transition to the top page", async ({ page }) => {
	await page.getByRole("link", { name: "Return to top page" }).click();
	await page.waitForURL("**/");
	const h1Text = await page.locator("h1").textContent();
	expect(h1Text).toBe("Kodowg");
});

test.describe("Basic QR Code Generation", () => {
	test("Generates QR code when text is entered", async ({ page }) => {
		await page.fill("#textfield", "Hello World");
		const qrImage = page.locator("img[alt='生成されたQRコード']");
		await expect(qrImage).toBeVisible();
		const srcAttribute = await qrImage.getAttribute("src");
		expect(srcAttribute).toContain("data:image");
	});

	test("Does not generate QR code when text is empty", async ({ page }) => {
		await page.fill("#textfield", "");
		const qrImage = page.locator("img[alt='生成されたQRコード']");
		await expect(qrImage).not.toBeVisible();
	});
});

test.describe("Size Selection", () => {
	test("Can select different sizes", async ({ page }) => {
		await page.fill("#textfield", "Test");

		for (const size of [256, 512, 1024]) {
			await page.getByLabel(`${size}px`).check();
			const qrImage = page.locator("img[alt='生成されたQRコード']");
			await expect(qrImage).toHaveAttribute("width", String(256));
		}
	});
});

test.describe("File Format and Download", () => {
	test("Can download in PNG format", async ({ page }) => {
		await page.fill("#textfield", "Test PNG");
		await page.getByLabel("PNG").check();
		const downloadButton = page.getByRole("button", { name: "Download" });
		await expect(downloadButton).toBeEnabled();
	});

	test("Can download in SVG format", async ({ page }) => {
		await page.fill("#textfield", "Test SVG");
		await page.getByLabel("SVG").check();
		const downloadButton = page.getByRole("button", { name: "Download" });
		await expect(downloadButton).toBeEnabled();
	});

	test("Download button is disabled when text is empty", async ({ page }) => {
		await page.fill("#textfield", "");
		const downloadButton = page.getByRole("button", { name: "Download" });
		await expect(downloadButton).toBeDisabled();
	});
});
