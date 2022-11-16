const puppeteer = require('puppeteer');

try {
  (async () => {
    const defualtChrome = await puppeteer.launch(
      {
        headless: false,
        defaultViewport: null,
      }
    );
    const page = await defualtChrome.newPage();
    await page.goto('https://www.google.com');
    await page.type('input[title="Search"]', 'lichess.org', { delay: 400 });
    await page.click('input[value="Google Search"]');
    await page.waitForNavigation();
    await page.goto('https://www.lichess.org');
    await defualtChrome.close();
  })();
} catch (err) {
  console.error(err);
}