import mongoose from 'mongoose'

const Schema = mongoose.Schema

let Enterprise = new Schema({
    status:String,
    firstname: String,
    lastname: String,
    username: String,
    password: String,
    phone: String,
    email: String,
    name: String,
    PIB: String,
    entp_num: Number,
    logo: String
    //add address of enterprise
})

export default mongoose.model("Enterprise", Enterprise, "enterprises");