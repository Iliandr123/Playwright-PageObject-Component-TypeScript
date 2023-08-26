import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
    await page.goto("https://demo.playwright.dev/todomvc/#/")
})

test.describe("Test todo", () => {
    test('create todo', async ({ page }) => {
        const todoHeader = page.getByRole('heading', { name: "todos" });
        console.log("test!!!!")
        await expect(todoHeader).toBeVisible();
    })
})