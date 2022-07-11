import mongoose from 'mongoose'

const Schema = mongoose.Schema

let Category = new Schema({
    name: String,
    entp_id: String,
    commodities:[String]
})

export default mongoose.model('Category', Category,'categories')