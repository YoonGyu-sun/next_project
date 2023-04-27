  // DB connect
import { MongoClient } from 'mongodb'

const url = 'mongodb+srv://admin:yks993411%40@cluster0.uq3tntz.mongodb.net/?retryWrites=true&w=majority'
const options = { useNewUrlParser: true }
let connectDB
 
    // connectDB 변수에 저장해놓고
  connectDB = new MongoClient(url, options).connect()

// export로 가져다가 쓴다.
export { connectDB }


/* MongoDB 연결 코드 */
// import { MongoClient } from 'mongodb'
// const url = 'DB접속URL~~'
// const options = { useNewUrlParser: true }
// let connectDB

// if (process.env.NODE_ENV === 'development') {
//   if (!global._mongo) {
//     global._mongo = new MongoClient(url, options).connect()
//   }
//   connectDB = global._mongo
// } else {
//   connectDB = new MongoClient(url, options).connect()
// }
// export { connectDB }