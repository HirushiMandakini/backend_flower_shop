import express from 'express';
import Employee from '../model/employeeModel';
import { EmployeeAdd,EmployeeUpdate,EmployeeDelete  } from '../database/employee'


const router = express.Router();
router.post('/add', async (req, res) => {
    const Employee:Employee=req.body;
    try{
        const employeeAdd=await EmployeeAdd(Employee);
        res.send("Employee added successfully");
    }
    catch(error){
        res.send("Error in adding employee");
    }
})

router.put('/update/:id',async (req, res) => {
    const id = req.params.id;
    const Employee:Employee=req.body;
    try{
        const employeeUpdate=await EmployeeUpdate(id,Employee);
        res.send("Employee updated successfully");
        }
        catch(error){
            res.send("Error in updating employee");
            }
            })

router.delete('/delete/:id', async (req, res) => {
    const { id } = req.params; // Extracting ID correctly
    try {
        const employeeDelete = await EmployeeDelete(id);
        res.status(200).json({ message: "Employee deleted successfully", employee: employeeDelete });
    } catch (error: any) {
        console.error("Error in deleting employee:", error);
        res.status(400).json({ error: "Error in deleting employee", details: error.message });
    }
});

export default router;