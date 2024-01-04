import assert from "assert";

//var assert = require("assert"); -- imported it
describe("Find multiple elements, ", function () {
  it("Count number of icon", async () => {
    await browser.url("https://opensource-demo.orangehrmlive.com");
    await browser.pause(3000);
    const allSocialIcons = await $$("//div/a");
    console.log("count of links is", allSocialIcons.length);
    assert.strictEqual(allSocialIcons.length, 4, "count mismatch");
  });

  it("Click on twitter", async () => {
    await browser.url("https://opensource-demo.orangehrmlive.com");
    await browser.pause(3000);
    const allSocialIcons = await $$("//div/a");
    console.log("count of links is", allSocialIcons.length);
    for (let i = 0; i < allSocialIcons.length; i++) {
      console.log(
        "Values of Images: ",
        await allSocialIcons[i].getAttribute("href")
      );
      if (
        (await allSocialIcons[i].getAttribute("href")) ===
        "https://twitter.com/orangehrm?lang=en"
      ) {
        await allSocialIcons[i].click();
        await browser.pause(5000);
        break;
      }
    }
  });
});
