"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const commodity_controller_1 = require("../controllers/commodity.controller");
const commodityRouter = express_1.default.Router();
commodityRouter.route('/getCommoditiesFromEntp').post((req, res) => new commodity_controller_1.CommodityController().getCommoditiesFromEntp(req, res));
commodityRouter.route('/insertCommodity').post((req, res) => new commodity_controller_1.CommodityController().inserCommodity(req, res));
exports.default = commodityRouter;
//# sourceMappingURL=commodity.routes.js.map