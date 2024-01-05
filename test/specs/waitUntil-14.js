describe("Wait until", async () => {
  it("check wait until", async () => {
    await browser.url(
      "https://seleniumpractise.blogspot.com/2016/08/how-to-use-explicit-wait-in-selenium.html"
    );

    const clickMe = await $("//button[text()='Click me to start timer']");
    await clickMe.click();

    const ele = await $("//p[@id='demo']");

    await ele.waitUntil(
      async () => {
        const text = await ele.getText();
        console.log(typeof text);
        return ele.isExisting() && ele.isDisplayed() && text === "WebDriver";
      },
      {
        timeout: 20000,
        timeoutMsg: "expected text to be different after 20s",
      }
    );
  });
});
