import { Page, Locator } from '@playwright/test';

export type LocatorProps = {
    locator?: string
} & LocatorContext

export type ComponentProps = {
    page: Page;
    locator: string;
    name?: string | undefined;
};

// for option objects in locator
export type LocatorContext = { [key: string]: string | boolean | number };