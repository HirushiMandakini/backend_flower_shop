import { PrismaClient } from "../../node_modules/.prisma/client/index";
import { Decimal } from "../../node_modules/@prisma/client/runtime/library";
import Employee from "../model/employeeModel";

const prisma = new PrismaClient();

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
// export async function EmployeeUpdate(id: string,updateData: {
//     firstName?: string,
//     lastName?: string,
//     email?: string,
//     phone?: string,
//     position?: string,
//     salary?: Decimal
// }){
//     try{
//         const updatedEmployee = await prisma.employee.update({
//             where: {id: id}, //find employee by id
//             data: updateData //update employee data
//         });
//         console.log(`Employee updated: ${updatedEmployee.firstName} ${updatedEmployee.lastName}`);
//         return updatedEmployee;
//     }   catch(error){
//         console.error("Error updating employee: ", error);
//         throw error;
//     }
