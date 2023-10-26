const subScrape = async (page, arr1, n) => {
  const element1 = await page.waitForSelector("iframe");
  const frame1 = await element1.contentFrame();
  await frame1.waitForSelector("#chart_div");
  const data1 = await frame1.evaluate(() => {
    const tds = Array.from(document.querySelectorAll(".facet_values td"));

    return tds.map((td) => td.textContent);
  });
  const response1 = [];

  for (let i = 0; i < data1.length / n; i++) {
    const obj = {};
    for (let j = 0; j < n; j++) {
      obj[arr1[j]] = data1[i * n + j];
    }
    response1.push(obj);
  }
  return response1;
};
module.exports = { subScrape };
