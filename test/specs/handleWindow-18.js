describe("Handle multiple windows ", () => {
  it("Switch to tab/windows", async () => {
    await browser.url(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );

    const faceBookBtn = await $(
      "//a[@href='https://www.facebook.com/OrangeHRM/']"
    );

    await faceBookBtn.click();
    await browser.switchWindow("https://www.facebook.com/OrangeHRM/");

    const fbUserName = await $("//label[@aria-label='Email or phone number']");
    await fbUserName.waitForDisplayed({ timeout: 5000 });
    await fbUserName.waitForEnabled({ timeout: 5000 });
    await fbUserName.setValue("xxxxx");
    await browser.pause(3000);
  });
});
