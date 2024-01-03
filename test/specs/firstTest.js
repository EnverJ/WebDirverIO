describe("Smoke test", function () {
  it("Verify url", async function () {
    browser.url("https://opensource-demo.orangehrmlive.com");
    await expect(browser).toHaveUrlContaining("opensource");
  });
  it("verify title", async function () {
    browser.url("https://opensource-demo.orangehrmlive.com");
    await expect(browser).toHaveTitle("OrangeHRM");
  });
  it("Verify login ", async function () {
    browser.url("https://opensource-demo.orangehrmlive.com");
    await expect(browser).toHaveTitle("OrangeHRM");
    const username = await $("//input[@placeholder='Username']");
    await username.setValue("admin");
    // or
    // await $("//input[@placeholder='Username']").setValue("admin");
    await (await $("//input[@placeholder='Password']")).setValue("admin123");
    await (await $("//button[normalize-space()='Login']")).click();
    await expect(browser).toHaveUrlContaining("dashboard");
  });
});
