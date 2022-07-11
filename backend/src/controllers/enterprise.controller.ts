import express from 'express'
import Enterprise from '../models/enterprise'
import EnterpriseDetail from '../models/enterprise_details'
import Category from '../models/category'

export class EnterpriseController {

    login = (req: express.Request, res: express.Response) => {
        Enterprise.findOne({'username':req.body.username, 'password': req.body.password}, (err, entp)=>{
            if(err) console.log(err)
            else res.json(entp);
        })
    }

    register = (req: express.Request, res: express.Response ) => {
        const url = req.protocol + '://' + req.get("host");

        Enterprise.findOne({
            $or:[ {'username': req.body.username}, {'email': req.body.email} ]},
            (err, result) => {
                //IF USER ALREADY EXISTS DELETE THE UPLOADED LOGO
                //AND RETURN ERROR STATUS CODE 
                if(result){
                    //TODO: delete file from images directory
                    res.status(400).json({'message': 'user already exists'})     
                }
            }
            );

        let entp = new Enterprise({
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
        })

        entp.save().then(user=>{
            res.status(200).json({'message': 'user added'})
        }).catch(err=>{
            res.status(400).json({'message': 'bad data'})
        });
    }

    init = (req:express.Request, res:express.Response) => {
        
        console.log(req.body.category)
        console.log(req.body.accounts)
        let entp_details = new EnterpriseDetail({
            entp_id: req.body.entp_id,
            category: req.body.category,
            code: req.body.code,
            inPDV: req.body.inPDV,
            bank_account: JSON.parse(req.body.accounts),
            storage: JSON.parse(req.body.storages),
            cash_register: JSON.parse(req.body.registers)
        })

        entp_details.save().then(result=>{
            res.status(200).json({'message': 'entp initialized'})
        }).catch(err=>{
            res.status(400).json({'message': 'couldnt init entp'})
        });
    }
    getDetails = (req: express.Request, res: express.Response) => {
        EnterpriseDetail.findOne({'entp_id': req.query.pib}, (err,details)=>{
            if (err) console.log(err);
            else res.json({'details': JSON.stringify(details)})
        })
    }

    getEntpByPib = (req: express.Request, res: express.Response) => {
        //TODO: da li dodati proveru status != deactive???
        // { $and:[{'PIB':req.query.pib}, {'PIB':{$ne:req.query.mypib}}]}
        Enterprise.find({ $and:[{'PIB':req.query.pib}, {'PIB':{$ne:req.query.mypib}}]},
         (err,entps) => {
            if (err) console.log(err);
            else res.json(entps);
        })
    }

    addCollab = (req: express.Request, res: express.Response) => {
        EnterpriseDetail.updateOne(
            {'entp_id':req.body.mypib},
            {$push: {'collaborators': {
                collab_pib:req.body.collab_pib,
                no_days: parseInt(req.body.no_days),
                rabat: parseInt(req.body.rabat)}}},(err,docs)=>{
                if(err) {
                    console.log(err);
                    res.json({'message':'error'});
                }
                else {
                    console.log("Updated docs: ", docs);
                    res.json({'message':'ok'});
                }
            })
    }

    createCategory = (req:express.Request, res:express.Response) => {
        let category = new Category({
            name: req.body.name,
            entp_id: req.body.entp_id,
        })

        category.save().then(cat=>{
            res.status(200).json({'message': 'category created'})
        }).catch(err=>{
            res.status(400).json({'message':'error'})
        })
    }

    addToCategory = (req:express.Request, res:express.Response) => {
        Category.findOne({
            'name':req.body.name,
            'entp_id':req.body.entp_id,
            'commodities': req.body.comm_id
        },(err,cat)=>{
            if(err) console.log(err)
            if(cat) res.json({'message':`Already in ${req.body.name}`})
            else {
                Category.updateOne(
                    {'name': req.body.name, 'entp_id': req.body.entp_id },
                    {$push: {'commodities': req.body.comm_id}},
                    (err,docs)=>{
                        if(err) console.log(err)
                        else res.json({'message':'ok'})
                    }
                )
            }
        })
    }

    getEntpCategories = (req:express.Request, res:express.Response) => {
        Category.find({'entp_id':req.query.entp_id}, (err,cats)=>{
            if(err) console.log(err);
            else res.json(cats);
        })
    }

    getPendingEnterprises = (req:express.Request , res:express.Response) =>{
        Enterprise.find({'status':'pending'}, (err,entps) =>{
            if(err) console.log(err);
            else{
                res.json(entps);
            }
        })
    }

    approveEnterprise = (req:express.Request, res:express.Response) => { 
        console.log(req.body.username);
        Enterprise.updateOne({'username':req.body.username}, {$set:{'status' : "active"}});
        res.json({'message': 'ok'});
    }
}