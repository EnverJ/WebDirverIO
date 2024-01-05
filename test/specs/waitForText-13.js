describe("Dynamic wait", () => {
  it("Wait for text", async () => {
    await browser.url("https://seleniumpractise.blogspot.com/2016/");
    const showMe = await $("//input[@value='Show me']");
    await showMe.click();
    const passNew = await $("//input[@id='passnew']");
    await passNew.waitForEnabled({ timeout: 18000 });
    await passNew.setValue("Hi!!!");
    await browser.pause(2000);
  });
});
