import { test, expect } from '@playwright/test';
import { TodoPage } from '../pages/toDo-page';

test.beforeEach(async ({ page }) => {
    const todoPage = new TodoPage(page);
    await todoPage.visit("https://demo.playwright.dev/todomvc/#/");
})

test.describe("Test todo", () => {
    test('create todo', async ({ page }) => {
        const todoPage = new TodoPage(page);
        await todoPage.titleHaveText("todo");
        await todoPage.titleToBeVisible();
    })
})