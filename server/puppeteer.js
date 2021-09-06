const puppeteer = require('puppeteer');

(async () => {

let movieUrl = "https://www.imdb.com/title/tt0314979/";

let browser = await puppeteer.launch();
let page = await browser.newPage();

await page.goto(movieUrl)

})();