"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
let EnterpriseDetail = new Schema({
    entp_id: String,
    category: String,
    code: String,
    inPDV: Boolean,
    bank_account: [{ bank_name: String, number: String }],
    collaborators: [{ collab_pib: String, no_days: Number, rabat: Number }],
    storage: [{ id: Number, name: String, }],
    cash_register: [{
            register_type: String,
            obj_location: String
        }]
});
exports.default = mongoose_1.default.model('EnterpriseDetail', EnterpriseDetail, 'entp_details');
//# sourceMappingURL=enterprise_details.js.map