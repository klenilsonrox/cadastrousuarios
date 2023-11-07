import mongoose, { model } from "mongoose";
const {Schema}= mongoose

const userSchema = new Schema({
    name:{
        type:String
    },
    email:{
        type:String,
        unique:true
    },
    whatsapp:{
        type:String
    }
})

const User = model("User", userSchema)

export default User