import express from 'express';
import OrderDetail from '../model/orderdetailModel';
import { saveOrderDetail} from '../database/orderdetail';
import { PrismaClient } from '../../node_modules/.prisma/client/index';

const router = express.Router();

// add a new order detail
router.post('/add',async (req,res)=>{
    const OrderDetail:OrderDetail=req.body;
    try{
        const orderDetailAdd=await saveOrderDetail(OrderDetail);
        res.send("Order detail Added Successfullly");
    }
    catch(error){
        res.send("Error Occured");
    }
})
export default router;

