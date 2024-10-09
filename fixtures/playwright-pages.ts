import { Fixtures } from '@playwright/test';
import { TodoPage } from '../pages/toDo-page';
import { ContextPagesFixture } from './context-pages';

export type PlaywrightPagesFixture = {
  todoPage: TodoPage;
};

export const playwrightPagesFixture: Fixtures<PlaywrightPagesFixture, ContextPagesFixture> = {
  todoPage: async ({ contextPage }, use) => {
    const todoPage = new TodoPage(contextPage);

    await use(todoPage);
  },
};
