"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const multer_1 = __importDefault(require("multer"));
const enterprise_controller_1 = require("../controllers/enterprise.controller");
const storage = multer_1.default.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "images");
    },
    filename: (req, file, cb) => {
        const name = file.originalname
            .toLowerCase()
            .split(" ")
            .join("-");
        let ext = "";
        if (file.mimetype == "image/png")
            ext = "png";
        if (file.mimetype == "image/jpg")
            ext = "jpg";
        if (file.mimetype == "image/jpeg")
            ext = "jpeg";
        cb(null, name + "-" + Date.now() + "." + ext);
    }
});
const entpRouter = express_1.default.Router();
entpRouter.route('/register').post((0, multer_1.default)({ storage: storage }).single("logo"), (req, res) => new enterprise_controller_1.EnterpriseController().register(req, res));
entpRouter.route('/login').post((req, res) => new enterprise_controller_1.EnterpriseController().login(req, res));
entpRouter.route('/init').post((req, res) => new enterprise_controller_1.EnterpriseController().init(req, res));
entpRouter.route('/getDetails').get((req, res) => new enterprise_controller_1.EnterpriseController().getDetails(req, res));
entpRouter.route('/getEntpByPib').get((req, res) => new enterprise_controller_1.EnterpriseController().getEntpByPib(req, res));
entpRouter.route('/addCollab').post((req, res) => new enterprise_controller_1.EnterpriseController().addCollab(req, res));
entpRouter.route('/createCategory').post((req, res) => new enterprise_controller_1.EnterpriseController().createCategory(req, res));
entpRouter.route('/addToCategory').post((req, res) => new enterprise_controller_1.EnterpriseController().addToCategory(req, res));
entpRouter.route('/getEntpCategories').get((req, res) => new enterprise_controller_1.EnterpriseController().getEntpCategories(req, res));
entpRouter.route('/getPending').get((req, res) => new enterprise_controller_1.EnterpriseController().getPendingEnterprises(req, res));
entpRouter.route('/approve').post((req, res) => new enterprise_controller_1.EnterpriseController().approveEnterprise(req, res));
exports.default = entpRouter;
//# sourceMappingURL=enterprise.routes.js.map