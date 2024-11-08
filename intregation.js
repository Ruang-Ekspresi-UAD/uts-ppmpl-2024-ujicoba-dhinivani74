const puppeteer = require('puppeteer');

test('Should apply CSS styles correctly', async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(`file://${path.resolve(__dirname, 'index.html')}`);

    const backgroundColor = await page.evaluate(() => {
        return window.getComputedStyle(document.body).backgroundColor;
    });

    expect(backgroundColor).toBe('rgba(206, 217, 222, 0.603)');
    await browser.close();
});
