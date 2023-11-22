const { Builder, Browser, By, until } = require("selenium-webdriver");

let driver;

beforeEach(async () => {
  driver = await new Builder().forBrowser(Browser.CHROME).build();
});

afterEach(async () => {
  await driver.quit();
});

describe("Duel Duo tests", () => {
  test("page loads with title", async () => {
    await driver.get("http://localhost:8000");
    await driver.wait(until.titleIs("Duel Duo"), 1000);
  });

  test("clicking the Draw button displays the choices div", async () => {
    await driver.get("http://localhost:8000");
    
    const drawButton = await driver.findElement(By.id("draw"));
    await drawButton.click();
    
    const choicesDiv = await driver.findElement(By.id("choices"));
    await driver.wait(until.elementIsVisible(choicesDiv), 1000);

    const isChoicesDivVisible = await choicesDiv.isDisplayed();
    expect(isChoicesDivVisible).toBe(true);
  });

  test("clicking Add to Duo button displays the player duo div", async () => {
    await driver.get("http://localhost:8000");

    const addButton = await driver.findElement(By.id("bot-btn"));
    await addButton.click();

    const playerDuoDiv = await driver.findElement(By.id("player-duo"));
    await driver.wait(until.elementIsVisible(playerDuoDiv), 1000);

    const isPlayerDuoDivVisible = await playerDuoDiv.isDisplayed();
    expect(isPlayerDuoDivVisible).toBe(true);
  });
});