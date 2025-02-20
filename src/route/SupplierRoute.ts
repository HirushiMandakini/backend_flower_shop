import express from 'express';
import Supplier from '../model/supplierModel';
import { SupplierAdd,SupplierUpdate,SupplierDelete,SupplierGetAll,SupplierGetById } from '../database/supplier';
import { Prisma } from '../../node_modules/.prisma/client/index';

const router = express.Router();

router.post('/add', async (req, res) => {
    try {
        const supplier:Supplier=req.body;
        const supplierAdd=await SupplierAdd(supplier);
        res.send("Supplier added successfully");
    } catch (error) {
        res.send("Error in adding supplier");
    }
    });
    
router.put('/update/:id', async (req, res) => {
    try {
        const id=req.params.id;
        const supplier:Supplier=req.body;
        const supplierUpdate=await SupplierUpdate(id,supplier);
        res.send("Supplier updated successfully");
        } catch (error) {
        res.send("Error in updating supplier");
    
        }
    });

router.delete('/delete/:id', async (req, res) => {
    try {
        const id=req.params.id;
        const supplierDelete=await SupplierDelete(id);
        res.status(200).json({ message: "Supplier deleted successfully", supplier: supplierDelete });
    } catch (error: any) {
        console.error("Error in deleting supplier:", error);
        res.status(400).json({ error: "Error in deleting supplier", details: error.message });
    }
});

router.get('/getall', async (req, res) => {
    try {
        const supplier = await SupplierGetAll();
        res.send(supplier);
    }
    catch (error){
        console.log(error);
    
        }
    });

router.get('/getbyid/:id', async (req, res) => {
    try {
        const id=req.params.id;
        const supplier=await SupplierGetById(id);
        res.send(supplier);
        } catch (error){
        console.log(error);
        }
});

export default router;