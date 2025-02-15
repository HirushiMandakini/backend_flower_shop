import express from 'express';
import Customer from '../model/customerModel';
import { CustomerAdd,CustomerUpdate} from '../database/customer'
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

router.put('/update/:id',async (req,res)=>{
    const id = req.params.id;
    const Customer:Customer=req.body;
    try{
        const customerUpdate=await CustomerUpdate(id,Customer);
        res.send("Customer Updated Successfullly");
    }
    catch(error){
        res.send("Error Occured");
    }
});
export default router;