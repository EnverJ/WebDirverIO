describe("Auto suggestions", () => {
  it("Google Auto suggestions", async () => {
    await browser.url("https://www.facebook.com/");
    await browser.maximizeWindow();
    const createBtn = await $("//a[text()='Create new account']");
    await createBtn.click();

    const month = await $("#month");
    await month.selectByAttribute("value", 11);
    const selectedMonth = (await month.getValue()).toString();
    console.log("selected moth", selectedMonth);
    assert.equal(selectedMonth, 11, "Month dose not match");
    await browser.pause(2000);

    const dobDD = await $("//select[@id='day']");
    await dobDD.selectByIndex(15);
    const dobValue = (await dobDD.getValue()).toString();
    console.log("Birth Days", dobValue);
    assert.equal(dobValue, 16, "Birth day dse not match");
    await browser.pause(2000);

    // year
    // dynamic wait
    const yearDD = await $("//select[@id='year']");
    yearDD.waitForDisplayed({ timeout: 10000 });
    await yearDD.selectByVisibleText("2010");
    const yearVal = (await yearDD.getValue()).toString();
    console.log("selected yeas ", yearVal);
    assert.equal(yearVal, "2010", "year dose not match");
    await browser.pause(2000);
  });
});
