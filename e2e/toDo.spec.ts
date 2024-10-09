import { searchTest as test } from './tests';

test.beforeEach(async ({ todoPage }) => {
    await todoPage.visit("https://demo.playwright.dev/todomvc/#/");
})

test.describe("Test todo", () => {
    test('create todo', async ({ todoPage }) => {
        await todoPage.titleHaveText("todo");
        await todoPage.titleToBeVisible();
    })
})