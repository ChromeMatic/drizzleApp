import express,{Express,Request,Response} from 'express'

const userRouter:Express = express()

userRouter.get('/user/:id', async (req:Request, res:Response)=>{
    
    let user_id:string = req.params.id;

    try{

    }catch (error){
        
    }
})

userRouter.post('/login', async ()=>{

})

userRouter.post('/register', async ()=>{
    
})

export default userRouter;