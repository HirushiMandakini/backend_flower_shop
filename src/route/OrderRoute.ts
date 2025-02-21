import express from 'express';
import Order from "../model/orderModel";
import { deleteOrder, getAllOrders, saveOrder, updateOrder,getOrderById  } from "../database/order";
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

// update order
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
router.delete('/delete/:id',async (req,res)=>{
    const id = req.params.id;
    try{
        const orderDelete=await deleteOrder(id);
        res.send("Order deleted successfully");
    }
    catch(error){
        res.send("Error Occured");
    }
});


// get all orders
router.get('/all',async (req,res)=>{
    try{
        const orderAll = await getAllOrders();
        res.send(orderAll);
    }
    catch(error){
        console.log(error)
    }
})

// search for a order by id
router.get('/search/:id',async (req,res)=>{
    const id = req.params.id;
    try{
        const orderSearch = await getOrderById(id);
        res.status(200).json(orderSearch)
        if(!orderSearch){
            res.send("Order Not Found");
        }
        res.status(200).json(orderSearch)
    }
    catch(error){
        console.error("Error fetching order:")
    }
})

export default router;