import "dotenv/config"
import express,{Express,Request,Response} from 'express'
import userRouter from "./routers/userRouter"

const app:Express = express()

app.get("/status", (req:Request, res:Response)=>{
    res.status(200).json({
        message: "Server up and running"
    })
})

app.use('/api/auth',userRouter)

app.listen(5000,()=>{ console.log('Running server on http://localhost:5000')})