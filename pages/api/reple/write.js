import { connectDB } from "@/utils/database";

export default async function write(req, res) {
  if (req.method === "POST") {
    try {
      const currentTime = new Date(); // 현재 날짜와 시간을 생성
      const repleData = {
        ...req.body,
        timestamp: currentTime, // 'timestamp' 필드에 현재 시간 추가
      };

      const db = (await connectDB).db("zero");
      let result = await db.collection("reple").insertOne(repleData);
      return res.status(200).redirect("/");
    } catch (err) {
      console.log(err);
      return res.status(500).json({ error: "Internal Server Error" });
    }
  } else {
    return res.status(405).json({ error: "Method Not Allowed" });
  }
}
