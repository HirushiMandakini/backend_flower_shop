import { PrismaClient } from "../../node_modules/.prisma/client/index";
import { Decimal } from "../../node_modules/@prisma/client/runtime/library";
import employee from "../model/employee";

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