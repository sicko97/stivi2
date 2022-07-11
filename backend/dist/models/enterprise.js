"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
let Enterprise = new Schema({
    status: String,
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
});
exports.default = mongoose_1.default.model("Enterprise", Enterprise, "enterprises");
//# sourceMappingURL=enterprise.js.map