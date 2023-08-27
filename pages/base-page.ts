import { Page, test } from '@playwright/test';

export abstract class BasePage {
    constructor(public page: Page) {
    }

    async visit(url: string): Promise<void> {
        await test.step(`Opening with url ${url}`, async () => {
            await this.page.goto(url, { waitUntil: 'domcontentloaded' });
        })
    }
}