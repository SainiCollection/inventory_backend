import express,{Response, Request} from "express"
const app = express();

app.get("/",(req:Request, res:Response)=>{
    res.send("Hey Frontend, It's a Backend server of Inventory. Do you want something from me?")
})

export default app;