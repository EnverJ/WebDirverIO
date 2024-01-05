import { assert } from "chai";
describe("Alert handling", () => {
  it("Capture text and accept alert", async () => {
    await browser.url("https://mail.rediff.com/cgi-bin/login.cgi");

    // const loginBox = await $("//input[@name='login']");
    // await loginBox.setValue("mmm");
    // const passwordBtn = await $("//input[@name='passwd']");

    const loginBtn = await $("//input[@name='proceed']");
    await loginBtn.click();
    const alert_text = await browser.getAlertText();
    await assert.deepEqual(alert_text, "Please enter a valid user name");
    await browser.pause(2000);
    await browser.acceptAlert();
  });
});
