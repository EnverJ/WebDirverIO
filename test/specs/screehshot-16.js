describe("Screenshot demo", () => {
  it("save screenshot", async () => {
    await browser.url("https://webdriver.io/docs/api/element/saveScreenshot/");
    await browser.saveScreenshot("./screenshots/wdio.png");
  });
});
