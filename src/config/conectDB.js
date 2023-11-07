import mongoose from "mongoose"
import dotenv from "dotenv"

dotenv.config()

const user =process.env.DB_USER
const password = process.env.DB_PASSWORD

const mongoURL=`mongodb+srv://${user}:${password}@cadastrodeusuarios.bjkg7tg.mongodb.net/`
const options = {
    useUnifiedTopology:true,
    useNewUrlParser:true
}


export const connectDB = async ()=>{
    try{
        await mongoose.connect(mongoURL,options)
        console.log("conectado ao mongoDB com sucesso")
    }catch(error){
        console.error("houve um erro", error)
    }
}