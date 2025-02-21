// import express from 'express';
// import FlowerBouquet from '../model/flowerboquetModel';
// import { FlowerbouquetAdd, FlowerbouquetUpdate, FlowerbouquetDelete, FlowerbouquetsSearch,getallflowerbouquets } from '../database/flowerboquet';
// import { Prisma } from '../../node_modules/.prisma/client/index';

// const router = express.Router();
// // Add a new flowerbouquet
// router.post('/add',async (req, res)=>{
//     const FlowerBouquet:FlowerBouquet =req.body;
//     try{
//         const flowerboquetAdd=await FlowerboquetAdd(FlowerBouquet);
//         res.send("Flowerbouquet added successfully");
//     }
//     catch(error){
//         res.send("Error in adding flowerbouquet");
//     }
// })

// export default router;

import express from "express";
import FlowerBouquet from "../model/flowerboquetModel";
import { FlowerbouquetAdd } from "../database/flowerboquet";
import { PrismaClient } from "../../node_modules/.prisma/client/index";

const router = express.Router();

// Add a new flowerbouquet
router.post('/add',async (req,res)=>{
    const FlowerBouquet:FlowerBouquet=req.body;
    try{
        const flowerbouquetAdd=await FlowerbouquetAdd(FlowerBouquet);
        res.send("Flower bouquet Added Successfullly");
    }
    catch(error){
        res.send("Error Occured");
    }
})
export default router;
