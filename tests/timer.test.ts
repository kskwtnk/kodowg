import { expect, test } from "@playwright/test";

test.beforeEach(async ({ page }) => {
	await page.goto("/timer");
});

test("Transition to the top page", async ({ page }) => {
	await page.getByRole("link", { name: "Return to Top page" }).click();
	await page.waitForURL("**/");
	const h1Text = await page.locator("h1").textContent();
	expect(h1Text).toBe("Kodowg");
});

test.describe("Initial state of the timer", async () => {
	test("Input fields are editable", async ({ page }) => {
		await expect(page.getByRole("spinbutton", { name: "min" })).toBeEditable();
		await expect(page.getByRole("spinbutton", { name: "sec" })).toBeEditable();
	});

	test("Start button is enabled", async ({ page }) => {
		await expect(page.getByRole("button", { name: "Start" })).toBeEnabled();
	});

	test("Cancel button is disabled", async ({ page }) => {
		await expect(page.getByRole("button", { name: "Cancel" })).toBeDisabled();
	});
});

test.describe("Input fields do not accept wrong values", () => {
	test("Values greater than 59 cannot be entered", async ({ page }) => {
		await page.getByRole("spinbutton", { name: "min" }).fill("60");
		await page.getByRole("spinbutton", { name: "sec" }).fill("60");
		await expect(page.getByRole("spinbutton", { name: "min" })).toHaveValue(
			"59",
		);
		await expect(page.getByRole("spinbutton", { name: "sec" })).toHaveValue(
			"59",
		);
	});

	test("Negative values cannot be entered", async ({ page }) => {
		await page.getByRole("spinbutton", { name: "min" }).fill("-1");
		await page.getByRole("spinbutton", { name: "sec" }).fill("-1");
		await expect(page.getByRole("spinbutton", { name: "min" })).toHaveValue(
			"0",
		);
		await expect(page.getByRole("spinbutton", { name: "sec" })).toHaveValue(
			"0",
		);
	});
});

test("Timer starts, pauses and resumes, cancels", async ({ page }) => {
	// Timer starts
	await page.getByRole("spinbutton", { name: "min" }).fill("1");
	await page.getByRole("spinbutton", { name: "sec" }).fill("1");
	await page.getByRole("button", { name: "Start" }).click();
	await page.waitForTimeout(1500);
	const minutes = await page.getByRole("timer", { name: "min" }).textContent();
	const seconds = await page.getByRole("timer", { name: "sec" }).textContent();
	expect(minutes).toBe("1");
	expect(seconds).toBe("0");
	// Timer pauses
	await page.getByRole("button", { name: "Pause" }).click();
	const minutesAfterPause = await page
		.getByRole("timer", { name: "min" })
		.textContent();
	const secondsAfterPause = await page
		.getByRole("timer", { name: "sec" })
		.textContent();
	expect(minutesAfterPause).toBe("1");
	expect(secondsAfterPause).toBe("0");
	// Timer resumes
	await page.getByRole("button", { name: "Resume" }).click();
	await page.waitForTimeout(1500);
	const minutesAfterResume = await page
		.getByRole("timer", { name: "min" })
		.textContent();
	const secondsAfterResume = await page
		.getByRole("timer", { name: "sec" })
		.textContent();
	expect(minutesAfterResume).toBe("0");
	expect(secondsAfterResume).toBe("59");
	// Timer cancels
	await page.getByRole("button", { name: "Cancel" }).click();
	await expect(page.getByRole("spinbutton", { name: "min" })).toHaveValue("1");
	await expect(page.getByRole("spinbutton", { name: "sec" })).toHaveValue("1");
});

test("Timer finishes", async ({ page }) => {
	await page.getByRole("spinbutton", { name: "min" }).fill("0");
	await page.getByRole("spinbutton", { name: "sec" }).fill("1");
	await page.getByRole("button", { name: "Start" }).click();
	await page.waitForTimeout(1500);
	const minutes = await page.getByRole("timer", { name: "min" }).textContent();
	const seconds = await page.getByRole("timer", { name: "sec" }).textContent();
	expect(minutes).toBe("0");
	expect(seconds).toBe("0");
});
