import express from 'express';
import Order from "../model/orderModel";
import { saveOrder } from "../database/order";
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
export default router;