import { test } from "@playwright/test";

test('YouTube Search', async ({ page }) => {

  await page.goto('https://youtube.com');
  let searchbox = page.locator("//input[@id='search']");
  await searchbox.click();
  await searchbox.fill('cydeo');
  await searchbox.press('Enter');
  let firstResult = page.locator("(//a[@id='video-title'])[1]");





});

////*[@id="search"]
