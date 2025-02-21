import express from 'express';
import Order from "../model/orderModel";
import { saveOrder, updateOrder } from "../database/order";
import { PrismaClient } from "../../node_modules/.prisma/client/index";

const router = express.Router();

// Add a new order
router.post('/add',async (req, res) => {
    const Order:Order=req.body;
    try{
        const orderSave=await saveOrder(Order);
        res.send("Order added successfully");
    }
    catch(error){
        res.send("Error in adding order");
    }
})

router.put('/update/:id',async (req,res)=>{
    const id = req.params.id;
    const Order:Order=req.body;
    try{
        const customerUpdate=await updateOrder(id,Order);
        res.send("Flower Bouquet Updated Successfullly");
    }
    catch(error){
        res.send("Error Occured");
    }
});

// delete order 



export default router;