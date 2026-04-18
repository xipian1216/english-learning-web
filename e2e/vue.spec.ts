import { test, expect } from '@playwright/test'
import { randomUUID } from 'crypto';

test.describe("测试注册", () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('/sign-up');
    });

    const uuid = randomUUID();

    test('注册成功', async ({ page }) => {
        await page.fill('input[name="email"]', `test+${uuid}@example.com`);
        await page.fill('input[name="password"]', 'password');
        await page.fill('input[name="confirmPassword"]', 'password');
        await page.click('button[type="submit"]');
        await expect(page.locator('h1')).toHaveText('注册成功');
    });

    
});