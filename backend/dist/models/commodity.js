"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
let Commodity = new Schema({
    id: String,
    entp_id: String,
    name: String,
    unit: String,
    pdv: Number,
    image: String,
    status: [{
            object_id: Number,
            purchase_price: Number,
            selling_price: Number,
            qty: Number,
            min: Number,
            max: Number
        }]
});
exports.default = mongoose_1.default.model('Commodity', Commodity, 'commodities');
//# sourceMappingURL=commodity.js.map