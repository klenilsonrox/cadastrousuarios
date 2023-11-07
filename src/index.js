import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import { connectDB } from "./config/conectDB.js"
import routerUsers from "./routes/user-routes.js"

dotenv.config()

const app = express()
app.use(express.json())
app.use(cors())
app.use(routerUsers)
app.use("/", (req,res)=>{
    res.status(200).json({
        status:"OK"
    })
})


connectDB()


app.listen(process.env.DB_PORT || 3000)