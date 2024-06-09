import "dotenv/config"
import express,{Express,Request,Response} from 'express'

const app:Express = express()

app.get("/status", (req:Request, res:Response)=>{
    res.status(200).json({
        message: "Server up and running"
    })
})

app.listen(5000,()=>{ console.log('Running server on http://localhost:5000')})