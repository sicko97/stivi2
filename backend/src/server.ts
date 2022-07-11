import mongoose from 'mongoose'
import bodyParser from 'body-parser'
import cors from 'cors'
import express from 'express';
import path from 'path'
import entpRouter from './routers/enterprise.routes';
import commodityRouter from './routers/commodity.routes';

//Connect to mongodb
mongoose.connect('mongodb://localhost:27017/fiscalization');
const connection = mongoose.connection;
connection.once('open', ()=>{
    console.log('db connection ok');
})

//Instantiate express object
const app = express();
const router = express.Router();

//Initialize and configure app
app.use(cors());
app.use(bodyParser.json())
app.use("/images", express.static(path.join("images")))
app.use('/', router);

router.use('/entp', entpRouter);
router.use('/comm', commodityRouter);

app.listen(4000, () => console.log(`Express server running on port 4000`));
