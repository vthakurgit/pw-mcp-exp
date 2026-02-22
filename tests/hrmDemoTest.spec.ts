/**
 * HRM Demo App - Login and Dashboard Validation
 * This test suite covers the login functionality and dashboard validation for the OrangeHRM demo application.
 * It includes tests for successful login, dashboard element visibility, and logout functionality.
 */

import { test, expect } from "@playwright/test";

test.describe("HRM Demo App", () => {
  // Annotate all tests in this file as serial
  //test.describe.configure({ mode: "serial" })
  test("HRM Demo App - Login and Dashboard Validation", async ({ page }) => {
    await test.step("Login HRM test", async () => {
      await page.goto("https://opensource-demo.orangehrmlive.com");
      await page.locator('//input[@name="username"]').fill("admin"); // fill username
      await page.locator('//input[@name="password"]').fill("admin123"); // fill password
      await page.locator('//button[@type="submit"]').click(); //click on login button
    });

    await test.step("Dashboard Validation for HRM test", async () => {
      // wait for dashboard to load and validate core elements
      await page.waitForLoadState("networkidle");
      await expect(page).toHaveURL(/dashboard/);

      // Page title / breadcrumb
      await expect(
        page.getByRole("heading", { name: "Dashboard" }),
      ).toBeVisible();

      // Top navigation items (key sections)
      await expect(page.getByRole("link", { name: "Admin" })).toBeVisible();
      await expect(page.locator("text=PIM")).toBeVisible();
      await expect(page.getByText("Leave", { exact: true })).toBeVisible();

      // User menu / username
      const userMenu = page.locator("p.oxd-userdropdown-name");
      await expect(userMenu).toBeVisible();
      await expect(userMenu).not.toHaveText("Emma");

      // Quick Launch / common tiles
      await expect(page.locator("text=Quick Launch")).toBeVisible();
      await expect(page.locator("text=Assign Leave")).toBeVisible();

      // Dashboard widgets container (general presence)
      await expect(page.locator(".oxd-layout-context")).toBeVisible();
    });

    await test.step("HRM Logout Test", async () => {
      // Logout (clean up)
      await page.locator("p.oxd-userdropdown-name").click(); //after login click on menu
      await page.locator("text=Logout").click();
      await page.close();
    });
  });
});
