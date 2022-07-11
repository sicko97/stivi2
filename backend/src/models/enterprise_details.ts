import mongoose from 'mongoose'

const Schema = mongoose.Schema

let EnterpriseDetail = new Schema({
    entp_id: String,
    category: String,
    code: String,
    inPDV: Boolean,
    bank_account: [{bank_name:String, number:String}],
    collaborators: [{collab_pib:String, no_days:Number, rabat:Number}],
    storage: [{ id: Number, name: String, }],
    cash_register:[ {
        register_type: String,
        obj_location: String
    }]


})

export default mongoose.model('EnterpriseDetail',EnterpriseDetail,'entp_details')