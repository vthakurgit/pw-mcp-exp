import {test, expect} from '@playwright/test';

test('Login HRM test' , async({page})=>{

    await page.goto('https://opensource-demo.orangehrmlive.com');
    await page.locator('//input[@name="username"]').fill('admin'); // fill username
    await page.locator('//input[@name="password"]').fill('admin123'); // fill password
    await page.locator('//button[@type="submit"]').click();  //click on login button

    // wait for dashboard to load and validate core elements
    await page.waitForLoadState('networkidle');
    await expect(page).toHaveURL(/dashboard/);

    // Page title / breadcrumb
    //await expect(page.locator('text=Dashboard')).toBeVisible();
    await expect(page.getByRole('heading', {name: 'Dashboard'})).toBeVisible();
    // Top navigation items (key sections)
    await expect(page.getByRole('link', {name: 'Admin'})).toBeVisible();

    await expect(page.locator('text=PIM')).toBeVisible();
    await expect(page.getByText('Leave', {exact: true})).toBeVisible();

    // User menu / username
    const userMenu = page.locator('p.oxd-userdropdown-name');
    await expect(userMenu).toBeVisible();
    await expect(userMenu).not.toHaveText('Emma');

    // Quick Launch / common tiles
    await expect(page.locator('text=Quick Launch')).toBeVisible();
    await expect(page.locator('text=Assign Leave')).toBeVisible();

    // Dashboard widgets container (general presence)
    await expect(page.locator('.oxd-layout-context')).toBeVisible();

    // Logout (clean up)
    await page.locator('p.oxd-userdropdown-name').click(); //after login click on menu
    await page.locator('text=Logout').click();
    await page.close();
});