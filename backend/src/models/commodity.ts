import mongoose from 'mongoose'

const Schema = mongoose.Schema

let Commodity = new Schema ({
    id: String,
    entp_id: String,
    name: String,
    unit: String,
    pdv: Number,
    image: String,
    status:[{
        object_id: Number,
        purchase_price: Number,
        selling_price: Number,
        qty: Number,
        min: Number,
        max: Number
    }]
})

export default mongoose.model('Commodity', Commodity, 'commodities')