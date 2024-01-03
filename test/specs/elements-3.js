describe("Elements commands", function () {
  it("Filling form", async () => {
    await browser.url("https://opensource-demo.orangehrmlive.com");
    await browser.maximizeWindow();
    await browser.pause(3000);
    const userName = await $("//input[@name='username']");
    await userName.setValue("admin555");
    await browser.pause(3000);
    await userName.clearValue();
    await browser.pause(3000);
    await userName.setValue("admin");
    await browser.pause(3000);

    const value = await userName.getValue();
    console.log("user name is ", value);

    // login button
    const loginBtn = await $("//button[normalize-space()='Login']");
    const clickStatus = await loginBtn.isClickable();
    const enableStatus = await loginBtn.isEnabled();
    const displayStatus = await loginBtn.isDisplayed();
    console.log("Clickable ", clickStatus);
    console.log("Enabled ", enableStatus);
    console.log("Displayed ", displayStatus);

    const password = await $("//input[@placeholder='Password']");
    await password.setValue("admin123");
  });
});
