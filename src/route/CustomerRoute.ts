import express from 'express';
import Customer from '../model/customerModel';
import { CustomerAdd,CustomerUpdate,CustomerDelete,CustomerGetAll } from '../database/customer'
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

router.delete('/delete/:id', async (req, res) => {
    const id = req.params.id;  // Access the id directly from req.params
    try {
        const customerDelete = await CustomerDelete(id);  // Pass the id string to the function
        res.send("Customer Deleted Successfully");
    } catch (error) {
        res.send("Error Occurred");
    }
});

router.get('/all', async (req, res) => {
    try{
        const customerAll = await CustomerGetAll();
        res.send(customerAll);
    }
    catch(error){
        console.log(error)
    }
})
export default router;