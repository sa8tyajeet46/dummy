// import { scrapeSmartChart } from "./../../lib/scrapeSmartChart";
const playwright = require('playwright');
const chromium = require('@sparticuz/chromium-min');
export default async function handler(req, res) {

  try {
    // const data = await scrapeSmartChart();
    const data={};
    const browser = await playwright.chromium.launch({
      headless: true ,
      executablePath:await chromium.executablePath()
      // setting this to true will not run the UI
  });
  const page = await browser.newPage();
  await page.goto(process.env.URL);
  await page.waitForTimeout(5000); 
  await browser.close();


    return res.status(200).json(data);

  
  } catch (err) {
    console.log(err);
    throw new Error(err.message);
  }
 
}
