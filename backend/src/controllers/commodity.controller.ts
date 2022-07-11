import express from 'express'
import Commodity from '../models/commodity'

export class CommodityController {

    getCommoditiesFromEntp = (req: express.Request, res: express.Response) => {
        Commodity.find({'entp_id': req.body.pib},(err,coms)=>{
            if (err) console.log(err);
            else res.json(coms);
        })
    }

    inserCommodity = (req:express.Request, res:express.Response) => {
        Commodity.findOne({'id':req.body.id},(err,comm)=>{
            if(comm) res.json({'message':'commodity already exists'})
            else {
                //TODO: dodaj default sliku
                let commodity = new Commodity({
                    id: req.body.id,
                    entp_id: req.body.entp_id,
                    name: req.body.name,
                    unit: req.body.unit,
                    pdv: parseInt(req.body.pdv),
                    status: JSON.parse(req.body.status)
                })
                commodity.save().then(com=>{
                    res.status(200).json({'message':'commodity inserted'})
                }).catch(err=>{
                    res.status(400).json({'message':'bad data'});
                })
            }
        })
    }
}