describe("Elements commands", function () {
  it("Filling form", async () => {
    await browser.url("https://opensource-demo.orangehrmlive.com");
    await browser.maximizeWindow();
    await browser.pause(3000);
    const userName = await $("(//input[@placeholder='Username'])[1]");
    await userName.setValue("admin555");
    await browser.pause(3000);
    await userName.clearValue();
    await browser.pause(3000);
    await userName.setValue("admin");
    await browser.pause(3000);

    const value = await userName.getValue();
    console.log("user name is ", value);

    const password = await $("//input[@placeholder='Password']");
    await password.setValue("admin123");

    // login button
    const loginBtn = await $("//button[normalize-space()='Login']");
    const clickStatus = await loginBtn.isClickable();
    const enableStatus = await loginBtn.isEnabled();
    const displayStatus = await loginBtn.isDisplayed();
    console.log("Clickable ", clickStatus);
    console.log("Enabled ", enableStatus);
    console.log("Displayed ", displayStatus);

    // assertions
    await expect(loginBtn).toBeEnabled();
    await expect(loginBtn).toBeDisplayed();

    const loginBtnValue = await loginBtn.getAttribute("value");
    console.log("login button value " + loginBtnValue);
    const loginBtnCSS = await loginBtn.getCSSProperty("font-size");
    console.log("Log in button fount siz eis ", loginBtnCSS);

    const link = await await $(
      "//div/p[@class='oxd-text oxd-text--p orangehrm-login-forgot-header']"
    );

    const linkCaptureText = link.getText();
    console.log("Value captured from ink is ", linkCaptureText);

    await expect(link).toHaveTextContaining("Forgot yo");
  });
});
