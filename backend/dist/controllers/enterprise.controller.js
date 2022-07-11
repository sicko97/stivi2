"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnterpriseController = void 0;
const enterprise_1 = __importDefault(require("../models/enterprise"));
const enterprise_details_1 = __importDefault(require("../models/enterprise_details"));
const category_1 = __importDefault(require("../models/category"));
class EnterpriseController {
    constructor() {
        this.login = (req, res) => {
            enterprise_1.default.findOne({ 'username': req.body.username, 'password': req.body.password }, (err, entp) => {
                if (err)
                    console.log(err);
                else
                    res.json(entp);
            });
        };
        this.register = (req, res) => {
            const url = req.protocol + '://' + req.get("host");
            enterprise_1.default.findOne({
                $or: [{ 'username': req.body.username }, { 'email': req.body.email }]
            }, (err, result) => {
                //IF USER ALREADY EXISTS DELETE THE UPLOADED LOGO
                //AND RETURN ERROR STATUS CODE 
                if (result) {
                    //TODO: delete file from images directory
                    res.status(400).json({ 'message': 'user already exists' });
                }
            });
            let entp = new enterprise_1.default({
                firstname: req.body.firstname,
                lastname: req.body.lastname,
                username: req.body.username,
                password: req.body.password,
                phone: req.body.phone,
                email: req.body.email,
                name: req.body.name,
                PIB: req.body.pib,
                entp_num: req.body.entp_num,
                logo: url + "/images/" + req.file.filename,
                status: "deactive"
            });
            entp.save().then(user => {
                res.status(200).json({ 'message': 'user added' });
            }).catch(err => {
                res.status(400).json({ 'message': 'bad data' });
            });
        };
        this.init = (req, res) => {
            console.log(req.body.category);
            console.log(req.body.accounts);
            let entp_details = new enterprise_details_1.default({
                entp_id: req.body.entp_id,
                category: req.body.category,
                code: req.body.code,
                inPDV: req.body.inPDV,
                bank_account: JSON.parse(req.body.accounts),
                storage: JSON.parse(req.body.storages),
                cash_register: JSON.parse(req.body.registers)
            });
            entp_details.save().then(result => {
                res.status(200).json({ 'message': 'entp initialized' });
            }).catch(err => {
                res.status(400).json({ 'message': 'couldnt init entp' });
            });
        };
        this.getDetails = (req, res) => {
            enterprise_details_1.default.findOne({ 'entp_id': req.query.pib }, (err, details) => {
                if (err)
                    console.log(err);
                else
                    res.json({ 'details': JSON.stringify(details) });
            });
        };
        this.getEntpByPib = (req, res) => {
            //TODO: da li dodati proveru status != deactive???
            // { $and:[{'PIB':req.query.pib}, {'PIB':{$ne:req.query.mypib}}]}
            enterprise_1.default.find({ $and: [{ 'PIB': req.query.pib }, { 'PIB': { $ne: req.query.mypib } }] }, (err, entps) => {
                if (err)
                    console.log(err);
                else
                    res.json(entps);
            });
        };
        this.addCollab = (req, res) => {
            enterprise_details_1.default.updateOne({ 'entp_id': req.body.mypib }, { $push: { 'collaborators': {
                        collab_pib: req.body.collab_pib,
                        no_days: parseInt(req.body.no_days),
                        rabat: parseInt(req.body.rabat)
                    } } }, (err, docs) => {
                if (err) {
                    console.log(err);
                    res.json({ 'message': 'error' });
                }
                else {
                    console.log("Updated docs: ", docs);
                    res.json({ 'message': 'ok' });
                }
            });
        };
        this.createCategory = (req, res) => {
            let category = new category_1.default({
                name: req.body.name,
                entp_id: req.body.entp_id,
            });
            category.save().then(cat => {
                res.status(200).json({ 'message': 'category created' });
            }).catch(err => {
                res.status(400).json({ 'message': 'error' });
            });
        };
        this.addToCategory = (req, res) => {
            category_1.default.findOne({
                'name': req.body.name,
                'entp_id': req.body.entp_id,
                'commodities': req.body.comm_id
            }, (err, cat) => {
                if (err)
                    console.log(err);
                if (cat)
                    res.json({ 'message': `Already in ${req.body.name}` });
                else {
                    category_1.default.updateOne({ 'name': req.body.name, 'entp_id': req.body.entp_id }, { $push: { 'commodities': req.body.comm_id } }, (err, docs) => {
                        if (err)
                            console.log(err);
                        else
                            res.json({ 'message': 'ok' });
                    });
                }
            });
        };
        this.getEntpCategories = (req, res) => {
            category_1.default.find({ 'entp_id': req.query.entp_id }, (err, cats) => {
                if (err)
                    console.log(err);
                else
                    res.json(cats);
            });
        };
        this.getPendingEnterprises = (req, res) => {
            enterprise_1.default.find({ 'status': 'pending' }, (err, entps) => {
                if (err)
                    console.log(err);
                else {
                    res.json(entps);
                }
            });
        };
        this.approveEnterprise = (req, res) => {
            console.log(req.body.username);
            enterprise_1.default.updateOne({ 'username': req.body.username }, { $set: { 'status': "active" } });
            res.json({ 'message': 'ok' });
        };
    }
}
exports.EnterpriseController = EnterpriseController;
//# sourceMappingURL=enterprise.controller.js.map