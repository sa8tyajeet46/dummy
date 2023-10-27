import { subScrape } from "./subScrape";
let chromium = {};
let puppeteer;

if (process.env.AWS_LAMBDA_FUNCTION_VERSION) {
  chromium = require("chrome-aws-lambda");
  puppeteer = require("puppeteer-core");
} else {
  puppeteer = require("puppeteer");
}

export async function scrapeSmartChart(url) {
  try {
    let browser = {};
    if (process.env.AWS_LAMBDA_FUNCTION_VERSION) {
      browser = await chromium.puppeteer.launch({
        args: chromium.args,
        defaultViewport: chromium.defaultViewport,
        executablePath: await chromium.executablePath,
        headless: chromium.headless,
        ignoreHTTPSErrors: true,
      });
    } else {
      browser = await puppeteer.launch({
        headless: true,
      });
    }

    const page = await browser.newPage();

    await Promise.all([
      page.goto(process.env.URL),
      page.waitForNavigation({ waitUntil: "networkidle0" }),
    ]);
    await page.type("#edit-name", "meredith@meredithfogle.com");
    await page.type("#edit-pass", "Cfogle123");
    await page.click("#edit-submit");
    await Promise.all([
      page.goto(process.env.URL2),
      page.waitForNavigation({ waitUntil: "networkidle0" }),
    ]);

    await page.click(".table");
    const check = await page.$$(".series_controls.series_12 > label");

    for (let i = 1; i < 5; i++) {
      await check[i].click();
    }

    const response = await subScrape(
      page,
      [
        "id",
        "month",
        "allHome",
        "detachedHome",
        "attachedHome",
        "tHome",
        "coopHome",
      ],
      7
    );
    await page.click(".tax.heading_3");
    const check1 = await page.$$(".series_controls.series_13 > label");

    for (let i = 1; i < 14; i++) {
      await check1[i].click();
    }
    const response1 = await subScrape(
      page,
      [
        "id",
        "month",
        "allHome",
        "u_$50k",
        "u_$50Kto$99,999",
        "u_$100Kto$149,999",
        "u_$150Kto$199,999",
        "u_$200Kto$299,999",
        "u_$300Kto$399,999",
        "u_$400Kto$499,999",
        "u_$500Kto$599,999",
        "u_$600Kto$799,999",
        "u_$800Kto$999,999",
        "u_$1Mto$2,499,999",
        "u_$2.5Mto$4,999,999",
        "u_$5,000,000+",
      ],
      16
    );
    await page.click(".sold_only.heading_4");
    const check2 = await page.$$(
      ".sold_only.series_controls.series_14 > label"
    );

    for (let i = 1; i < 14; i++) {
      await check2[i].click();
    }
    const response2 = await subScrape(
      page,
      [
        "id",
        "month",
        "allHome",
        "u_$50k",
        "u_$50Kto$99,999",
        "u_$100Kto$149,999",
        "u_$150Kto$199,999",
        "u_$200Kto$299,999",
        "u_$300Kto$399,999",
        "u_$400Kto$499,999",
        "u_$500Kto$599,999",
        "u_$600Kto$799,999",
        "u_$800Kto$999,999",
        "u_$1Mto$2,499,999",
        "u_$2.5Mto$4,999,999",
        "u_$5,000,000+",
      ],
      16
    );
    await page.click(".sold_only.tax.heading_5");
    const check3 = await page.$$(
      ".sold_only.tax.series_controls.series_15 > label"
    );

    for (let i = 1; i < 12; i++) {
      await check3[i].click();
    }
    const response3 = await subScrape(
      page,
      [
        "id",
        "month",
        "allHome",
        "0days",
        "1to10days",
        "11to20days",
        "21to30days",
        "31to60days",
        "61to90days",
        "91to120days",
        "121to180days",
        "181to360days",
        "361to720days",
        "720+days",
      ],
      14
    );
    await page.click(".heading_6");
    const check4 = await page.$$(".series_controls.series_16 > label");

    for (let i = 1; i < 13; i++) {
      await check4[i].click();
    }
    const response4 = await subScrape(
      page,
      [
        "id",
        "month",
        "allHome",
        "u_800sqft",
        "800to999sqft",
        "1000to1199sqft",
        "1200to1399sqft",
        "1400to1599sqft",
        "1600to1799sqft",
        "1800to1999sqft",
        "2000to2499sqft",
        "2500to2999sqft",
        "3000to4000sqft",
        "4000to4999sqft",
        "5000+sqft",
      ],
      15
    );
    await page.click(".heading_7");
    const check5 = await page.$$(".series_controls.series_17 > label");

    for (let i = 1; i < 8; i++) {
      await check5[i].click();
    }
    const response5 = await subScrape(
      page,
      [
        "id",
        "month",
        "allHome",
        "0bedroom",
        "1bedroom",
        "2bedrooms",
        "3bedrooms",
        "4bedrooms",
        "5bedrooms",
        "6+bedrooms",
      ],
      10
    );

    await page.click(".heading_8");
    const check6 = await page.$$(".series_controls.series_18 > label");

    for (let i = 1; i < 7; i++) {
      await check6[i].click();
    }

    const response6 = await subScrape(
      page,
      [
        "id",
        "month",
        "allHome",
        "0bathroom",
        "1bathroom",
        "2bathrooms",
        "3bathrooms",
        "4bathrooms",
        "5+bathrooms",
      ],
      9
    );

    await page.click(".heading_9");
    const check7 = await page.$$(".series_controls.series_19 > label");

    for (let i = 1; i < 5; i++) {
      await check7[i].click();
    }
    const response7 = await subScrape(
      page,
      [
        "id",
        "month",
        "allHome",
        "allBank-Mediated",
        "Foreclosures(REO)",
        "ShortSales",
        "Non-Bank-Mediated",
      ],
      7
    );

    return {
      ownership: response,
      listPrice: response1,
      soldprice: response2,
      daysOnMarket: response3,
      livingArea: response4,
      bedrooms: response5,
      bathrooms: response6,
      BankMediated: response7,
    };
  } catch (err) {
    console.log(err);
    throw new Error(err.message);
  }
}
