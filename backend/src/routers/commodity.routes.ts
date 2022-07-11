import { Router } from "express";
import express from "express";
import { CommodityController } from "../controllers/commodity.controller";

const commodityRouter = express.Router();

commodityRouter.route('/getCommoditiesFromEntp').post(
    (req, res) => new CommodityController().getCommoditiesFromEntp(req, res)
)
commodityRouter.route('/insertCommodity').post(
    (req, res) => new CommodityController().inserCommodity(req, res)
)

export default commodityRouter;