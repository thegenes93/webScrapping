const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://covid.saude.gov.br/');
    await page.screenshot({ path: `${Date.now()}+covidsaudegovbr.png` });
    const confirmados= await page.$eval('.ct-info .tp-geral', el => el.innerText);
    const obitos= await page.$eval('.ct-info .fnt-size', el => el.innerText);
    console.log(confirmados.replace(/[^\d]+/g,''));
    console.log(obitos.replace(/[^\d]+/g,''));
    await browser.close();
})();