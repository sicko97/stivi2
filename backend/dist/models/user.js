"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
let User = new Schema({
    username: String,
    password: String,
    firstname: String,
    lastname: String,
    phone: String,
    id: String,
    type: Number
});
exports.default = mongoose_1.default.model("User", User, 'users');
//# sourceMappingURL=user.js.map