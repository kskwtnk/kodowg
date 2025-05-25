import { expect, test } from "@playwright/test";

test.beforeEach(async ({ page }) => {
	await page.goto("/timer");
});

test.describe("Initial state of the timer", async () => {
	test("Input fields are editable", async ({ page }) => {
		await expect(page.getByRole("spinbutton", { name: "分" })).toBeEditable();
		await expect(page.getByRole("spinbutton", { name: "秒" })).toBeEditable();
	});

	test("Start button is enabled", async ({ page }) => {
		await expect(page.getByRole("button", { name: "スタート" })).toBeEnabled();
	});

	test("Cancel button is disabled", async ({ page }) => {
		await expect(
			page.getByRole("button", { name: "キャンセル" }),
		).toBeDisabled();
	});
});

test.describe("Input fields do not accept wrong values", () => {
	test("Values greater than 59 cannot be entered", async ({ page }) => {
		await page.getByRole("spinbutton", { name: "分" }).fill("60");
		await page.getByRole("spinbutton", { name: "秒" }).fill("60");
		await expect(page.getByRole("spinbutton", { name: "分" })).toHaveValue(
			"59",
		);
		await expect(page.getByRole("spinbutton", { name: "秒" })).toHaveValue(
			"59",
		);
	});

	test("Negative values cannot be entered", async ({ page }) => {
		await page.getByRole("spinbutton", { name: "分" }).fill("-1");
		await page.getByRole("spinbutton", { name: "秒" }).fill("-1");
		await expect(page.getByRole("spinbutton", { name: "分" })).toHaveValue("0");
		await expect(page.getByRole("spinbutton", { name: "秒" })).toHaveValue("0");
	});
});

test("Timer starts, pauses and resumes, cancels", async ({ page }) => {
	// Timer starts
	await page.getByRole("spinbutton", { name: "分" }).fill("1");
	await page.getByRole("spinbutton", { name: "秒" }).fill("1");
	await page.getByRole("button", { name: "スタート" }).click();
	await page.waitForTimeout(1500);
	const minutes = await page.getByRole("timer", { name: "分" }).textContent();
	const seconds = await page.getByRole("timer", { name: "秒" }).textContent();
	expect(minutes).toBe("1");
	expect(seconds).toBe("0");
	// Timer pauses
	await page.getByRole("button", { name: "一時停止" }).click();
	const minutesAfterPause = await page
		.getByRole("timer", { name: "分" })
		.textContent();
	const secondsAfterPause = await page
		.getByRole("timer", { name: "秒" })
		.textContent();
	expect(minutesAfterPause).toBe("1");
	expect(secondsAfterPause).toBe("0");
	// Timer resumes
	await page.getByRole("button", { name: "再開" }).click();
	await page.waitForTimeout(1500);
	const minutesAfterResume = await page
		.getByRole("timer", { name: "分" })
		.textContent();
	const secondsAfterResume = await page
		.getByRole("timer", { name: "秒" })
		.textContent();
	expect(minutesAfterResume).toBe("0");
	expect(secondsAfterResume).toBe("59");
	// Timer cancels
	await page.getByRole("button", { name: "キャンセル" }).click();
	await expect(page.getByRole("spinbutton", { name: "分" })).toHaveValue("1");
	await expect(page.getByRole("spinbutton", { name: "秒" })).toHaveValue("1");
});

test("Timer finishes", async ({ page }) => {
	await page.getByRole("spinbutton", { name: "分" }).fill("0");
	await page.getByRole("spinbutton", { name: "秒" }).fill("1");
	await page.getByRole("button", { name: "スタート" }).click();
	await page.waitForTimeout(1500);
	const minutes = await page.getByRole("timer", { name: "分" }).textContent();
	const seconds = await page.getByRole("timer", { name: "秒" }).textContent();
	expect(minutes).toBe("0");
	expect(seconds).toBe("0");
});
