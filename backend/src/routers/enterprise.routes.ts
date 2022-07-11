import express from 'express'
import multer from 'multer'
import { EnterpriseController } from '../controllers/enterprise.controller';

const storage = multer.diskStorage({
    destination: (req,file,cb) => {
        cb(null, "images");
    },
    filename: (req,file,cb) => {
        const name = file.originalname
            .toLowerCase()
            .split(" ")
            .join("-");
        
        let ext = "";
        if (file.mimetype == "image/png") ext = "png";
        if (file.mimetype == "image/jpg") ext = "jpg";
        if (file.mimetype == "image/jpeg") ext = "jpeg";

        cb(null, name + "-" + Date.now() + "." + ext);
    }
});

const entpRouter = express.Router();

entpRouter.route('/register').post(
    multer({storage: storage}).single("logo"), (req,res) => new EnterpriseController().register(req, res)
)

entpRouter.route('/login').post(
    (req, res) => new EnterpriseController().login(req, res)
)

entpRouter.route('/init').post(
    (req, res) => new EnterpriseController().init(req, res)
)

entpRouter.route('/getDetails').get(
    (req, res) => new EnterpriseController().getDetails(req, res)
)

entpRouter.route('/getEntpByPib').get(
    (req, res) => new EnterpriseController().getEntpByPib(req,res)
)

entpRouter.route('/addCollab').post(
    (req, res) => new EnterpriseController().addCollab(req, res)
)

entpRouter.route('/createCategory').post(
    (req, res) => new EnterpriseController().createCategory(req, res)
)

entpRouter.route('/addToCategory').post(
    (req, res) => new EnterpriseController().addToCategory(req, res)
)

entpRouter.route('/getEntpCategories').get(
    (req, res) => new EnterpriseController().getEntpCategories(req, res)
)
entpRouter.route('/getPending').get(
    (req,res) => new EnterpriseController().getPendingEnterprises(req,res)
)
entpRouter.route('/approve').post(
    (req,res) => new EnterpriseController().approveEnterprise(req,res)
)

export default entpRouter;