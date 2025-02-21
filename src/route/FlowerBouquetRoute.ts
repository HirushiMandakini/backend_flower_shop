import express from "express";
import FlowerBouquet from "../model/flowerboquetModel";
import { FlowerbouquetAdd, FlowerbouquetUpdate,FlowerbouquetDelete,FlowerbouquetSearch,getallFlowerbouquets } from "../database/flowerboquet";
import { PrismaClient } from "../../node_modules/.prisma/client/index";

const router = express.Router();

// Add a new flowerbouquet
router.post('/add',async (req,res)=>{
    const FlowerBouquet:FlowerBouquet=req.body;
    try{
        const flowerbouquetAdd=await FlowerbouquetAdd(FlowerBouquet);
        res.send("Flower Bouquet Added Successfullly");
    }
    catch(error){
        res.send("Error Occured");
    }
})

// Update a flowerbouquet
router.put('/update/:id',async (req,res)=>{
    const id = req.params.id;
    const FlowerBouquet:FlowerBouquet=req.body;
    try{
        const customerUpdate=await  FlowerbouquetUpdate(id,FlowerBouquet);
        res.send("Flower Bouquet Updated Successfullly");
    }
    catch(error){
        res.send("Error Occured");
    }
});
// Delete a flowerbouquet
router.delete('/delete/:id',async (req,res)=>{
    const id = req.params.id;
    try{
        const customerDelete=await FlowerbouquetDelete(id);
        res.send("Flower Bouquet Deleted Successfully");
    }
    catch(error){
        res.send("Error Occured");
    }
});

// Search for a flowerbouquet by id
router.get('/search/:id',async (req,res)=>{
    const id = req.params.id;
    try{
        const customerSearch=await FlowerbouquetSearch(id);
        res.send(customerSearch);
    }
    catch(error){
        res.send("Error Occured");
    }
});

// Get all flowerbouquets
router.get('/all',async (req,res)=>{
    try{
        const customerAll = await getallFlowerbouquets();
        res.send(customerAll);
    }
    catch(error){
        console.log(error)
    }
})
export default router;
