import express from 'express';
import employee from '../model/employee';
import { EmployeeAdd } from '../database/employee'

const router = express.Router();
router.post('/add', async (req, res) => {
    const Employee:employee=req.body;
    try{
        const employeeAdd=await EmployeeAdd(Employee);
        res.send("Employee added successfully");
    }
    catch(error){
        res.send("Error in adding employee");
    }
})

export default router;