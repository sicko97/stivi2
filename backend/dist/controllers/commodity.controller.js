"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommodityController = void 0;
const commodity_1 = __importDefault(require("../models/commodity"));
class CommodityController {
    constructor() {
        this.getCommoditiesFromEntp = (req, res) => {
            commodity_1.default.find({ 'entp_id': req.body.pib }, (err, coms) => {
                if (err)
                    console.log(err);
                else
                    res.json(coms);
            });
        };
        this.inserCommodity = (req, res) => {
            commodity_1.default.findOne({ 'id': req.body.id }, (err, comm) => {
                if (comm)
                    res.json({ 'message': 'commodity already exists' });
                else {
                    //TODO: dodaj default sliku
                    let commodity = new commodity_1.default({
                        id: req.body.id,
                        entp_id: req.body.entp_id,
                        name: req.body.name,
                        unit: req.body.unit,
                        pdv: parseInt(req.body.pdv),
                        status: JSON.parse(req.body.status)
                    });
                    commodity.save().then(com => {
                        res.status(200).json({ 'message': 'commodity inserted' });
                    }).catch(err => {
                        res.status(400).json({ 'message': 'bad data' });
                    });
                }
            });
        };
    }
}
exports.CommodityController = CommodityController;
//# sourceMappingURL=commodity.controller.js.map