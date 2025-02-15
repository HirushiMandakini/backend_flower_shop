import express from 'express';
import Customer from '../model/customerModel';
import { CustomerAdd } from '../database/customer'
import { Prisma } from '../../node_modules/.prisma/client/index';

const router = express.Router();
router.post('/add',async (req,res)=>{
    const Customer:Customer=req.body;
    try{
        const customerAdd=await CustomerAdd(Customer);
        res.send("Customer Added Successfullly");
    }
    catch(error){
        res.send("Error Occured");
    }
})
export default router;