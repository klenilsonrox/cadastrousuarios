import mongoose, { model } from "mongoose";
const {Schema}= mongoose

const userSchema = new Schema({
    name:{
        type:String
    },
    linkedin:{
        type:String,
    },
    whatsapp:{
        type:String
    },
    portfolio:{
        type:String
    },
    url:{
        type:String,
        default:""
    }
})

const User = model("User", userSchema)

export default User