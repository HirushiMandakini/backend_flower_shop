import express from 'express';
import Employee from '../model/employeeModel';
import { EmployeeAdd,EmployeeUpdate,EmployeeDelete,GetAllEmployee,GetById } from '../database/employee'
import { Prisma } from '../../node_modules/.prisma/client/index';

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

// /Get all child/
router.get("/all",async (req, res) => {
    try {
        const employee = await GetAllEmployee();
        res.send(employee);
    }
    catch (error){
        console.log(error);
    }
})

// /GetbyId/
// @ts-ignore
router.get("/view/:id", async (req, res) => {
    const id: string = req.params.id; // Keep ID as a string

    try {
        const employee = await GetById(id); // Fetch child by ID

        if (!employee) {
            return res.status(404).json({ message: "employee not found" });
        }
        res.status(200).json(employee);
    } catch (error) {
        console.error("Error fetching employee:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
});
export default router;