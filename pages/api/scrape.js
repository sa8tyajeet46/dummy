import { scrapeSmartChart } from "./../../lib/scrapeSmartChart";
export default async function handler(req, res) {
  try {
    const data = await scrapeSmartChart();

    return res.status(200).json(data);
  } catch (err) {
    throw new Error(err.message);
  }
}
