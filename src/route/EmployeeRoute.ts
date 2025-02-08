import express from 'express';
import Employee from '../model/employeeModel'; // ✅ Import Employee class
import { EmployeeAdd,EmployeeUpdate  } from '../database/employee'


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

// router.put('/update/:id', async (req, res) => {
//     try {
//         const { id } = req.params; // Extract ID from URL params
//         const updatedData = req.body; // Extract updated data from request body

//         if (!id) {
//             return res.status(400).json({ error: "Employee ID is required" });
//         }

//         const updatedEmployee = await EmployeeUpdate(id, updatedData);

//         res.status(200).json({ message: "Employee updated successfully", employee: updatedEmployee });
//     } catch (error) {
//         console.error("❌ Error in updating employee:", error);
//         res.status(500).json({ error: "Failed to update employee" });
//     }
// });
export default router;