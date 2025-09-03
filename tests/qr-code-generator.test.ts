import { expect, test } from "@playwright/test";

test.beforeEach(async ({ page }) => {
	await page.goto("/qr-code-generator");
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

test.describe("Option Changes", () => {
	test("QR code is regenerated when size is changed", async ({ page }) => {
		await page.fill("#textfield", "Test");
		const qrImage = page.locator("img[alt='生成されたQRコード']");
		const initialSrc = await qrImage.getAttribute("src");

		await page.getByLabel(`512px`).check();
		const newSrc = await qrImage.getAttribute("src");
		expect(newSrc).not.toBe(initialSrc);
	});

	test("QR code is regenerated when file format is changed to SVG", async ({
		page,
	}) => {
		await page.fill("#textfield", "Test SVG");
		await page.getByLabel("SVG").check();
		const qrImage = page.locator("img[alt='生成されたQRコード']");
		const srcAttribute = await qrImage.getAttribute("src");
		expect(srcAttribute).toContain("data:image/svg+xml");
	});
});

test.describe("File Download", () => {
	test("Download button is disabled when text is empty", async ({ page }) => {
		await page.fill("#textfield", "");
		const downloadButton = page.getByRole("button", { name: "ダウンロード" });
		await expect(downloadButton).toBeDisabled();
	});

	test("Triggers download when download button is clicked", async ({
		page,
	}) => {
		await page.fill("#textfield", "Test Download");

		const downloadPromise = page.waitForEvent("download");
		await page.getByRole("button", { name: "ダウンロード" }).click();
		const download = await downloadPromise;

		expect(download.suggestedFilename()).toBe("qrcode.png");
	});
});
