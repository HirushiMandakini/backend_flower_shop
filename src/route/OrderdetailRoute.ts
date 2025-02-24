import express from 'express';
import OrderDetail from '../model/orderdetailModel';
import { saveOrderDetail, updateOrderDetail, deleteOrderDetail, getOrderDetailById, getAllOrderDetails} from '../database/orderdetail';
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


// update 
router.put('/update/:id',async (req, res) => {
    const id = req.params.id;   
    const OrderDetail:OrderDetail=req.body;
    try{
        const orderDetailUpdate = await updateOrderDetail(id,OrderDetail);
        res.send("Order detail updated successfully");
        }
        catch(error){
        res.send("Error in updating order detail");
        }
});

// delete
router.delete('/delete/:id',async (req, res) => {
    const id = req.params.id;
    try{
        const orderDetailDelete = await deleteOrderDetail(id);
        res.send("Order detail deleted successfully");
        }
        catch(error){
            res.send("Error in deleting order detail");
            }
            });

// search
router.get('/search/:id',async (req,res)=>{
    const id = req.params.id;
    try{
        const orderDetailSearch=await getOrderDetailById(id);
        res.send(orderDetailSearch);
    }
    catch(error){
        res.send("Error Occured");
    }
});

// getall
router.get('/all',async (req,res)=>{
    try{
        const orderDetailAll = await getAllOrderDetails();
        res.send(orderDetailAll);
    }
    catch(error){
        console.log(error)
    }
})
export default router;
