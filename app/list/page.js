import {connectDB} from "@/util/database"
import Link from "next/link"
import DetailLink from "./DetailLink"


export default async function List(){
    
    const db = (await connectDB).db("forum")
    let result = await db.collection('post').find().toArray()
        
    

    return(

        <div className="list-bg">
        
            {
                result.map((a, i)=>{
                    return(
                        <div className="list-item" key ={i}>
                          <Link href={'/detail/' + result[i]._id.toString()}><h4> {result[i].title} </h4></Link>
                          <p> {result[i].content} </p>
                          <DetailLink/>
                          
                          <p>1월 1일</p>
                        </div>
                    )
                })
            }



        {/* <div className="list-item">
          <h4> {result[0].title} </h4>
          <p> {result[0].content} </p>
        </div>

        <div className="list-item">
          <h4> {result[1].title} </h4>
          <p> {result[1].content} </p>
        </div>
        
        <div className="list-item">
          <h4> {result[2].title} </h4>
          <p> {result[2].content} </p>
        </div> */}
        
      </div>

    )
}