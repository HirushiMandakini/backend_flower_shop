import { PrismaClient } from "../../node_modules/.prisma/client/index";
import { Decimal } from "../../node_modules/@prisma/client/runtime/library";
import Employee from "../model/employeeModel";

const prisma = new PrismaClient();

// save employee
export async function EmployeeAdd(employee:{firstName:string, lastName:string, email:string,phone:string,position:string,salary:Decimal}){
    try{
        const newEmployee = await prisma.employee.create({
            data: {
                firstName:employee.firstName,
                lastName:employee.lastName,
                email:employee.email,
                phone:employee.phone,
                position:employee.position,
                salary:employee.salary
        }
        });
        console.log(`New employee added: ${newEmployee.firstName} ${newEmployee.lastName}`);
        return newEmployee;
    }catch(error){
        console.error("Error adding employee: ", error);
        throw error;
    }
}

// update employee
export async function EmployeeUpdate(id: string,updateData: {
    firstName?: string,
    LastName?: string,
    email?: string,
    phone?: string,
    position?: string,
    salary?: Decimal
}){
    try{
        const updatedEmployee = await prisma.employee.update({
            where: {id:id},
            data:updateData
        });
        console.log(`Employee updated: ${updatedEmployee.firstName} ${updatedEmployee.lastName}`);
        return updatedEmployee;
    }catch(error){
        console.error("Error updating employee: ", error);
        throw error;
    }
}
// delete employee
export async function EmployeeDelete(id: string) {
    try {
        const deleteEmployee = await prisma.employee.delete({
            where: { id: id },
        });
        console.log(`Employee deleted: ${deleteEmployee.firstName} ${deleteEmployee.lastName}`);
        return deleteEmployee;
    } catch (error: any) {
        if (error.code === "P2025") {
            console.error("Error: Employee not found.");
            throw new Error("Employee not found.");
        } else {
            console.error("Error deleting employee: ", error);
            throw error;
        }
    }
}
