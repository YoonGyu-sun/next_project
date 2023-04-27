
import { connectDB } from "@/util/database"
import { MongoClient } from "mongodb"

export default async function Home() {

    const db = (await connectDB).db("forum")
  // 데이터 꺼내오는 법
  // post 컬렉션에 있는 모든 데이터를 Array로 변환해주세요.
  let result = await db.collection('post').find().toArray()
  

    return (
    <div>
      안녕
    </div>
  )
}