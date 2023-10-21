// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import connectDatabase from "./connectDatabase";
export default async function handler(req, res) {
  try {
    await connectDatabase();
    //await User.sync();
    // const jane = await User.create({ name:"satya",email:"xample@gmail.com",role:"admin" });
    res.status(200).json({ name: "jane" });
  } catch (err) {
    console.log(err);
  }
}
