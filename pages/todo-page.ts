import { Page } from '@playwright/test';
import { Title } from "../page-factory/title";
import { BasePage } from './base-page';

export class TodoPage extends BasePage {
    private readonly title: Title

    constructor(public page: Page) {
        super(page);
        this.title = new Title({ page, locator: 'body > section > div > header > h1', name: 'Todo title' });
    }

    async titleHaveText(titleText: string): Promise<void> {
        await this.title.shouldHaveText(titleText);
    }

    async titleToBeVisible(): Promise<void> {
        await this.title.shouldBeVisible();
    }
}