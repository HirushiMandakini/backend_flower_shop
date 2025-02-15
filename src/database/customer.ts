const { PrismaClient } = require("@prisma/client");
import Customer from "../model/customerModel";
const prisma = new PrismaClient();

export async function CustomerAdd(customer: { firstName: string; lastName: string; phone: string; address: string}){
    try{
        const newCustomer = await prisma.customer.create({
            data: {
                firstName: customer.firstName,
                lastName: customer.lastName,
                phone: customer.phone,
                address: customer.address,
            },
        });
        console.log("Customer saved successfully:",newCustomer);
        return newCustomer;
    }catch(error){
        console.error("Error saving customer:",error);
        throw error;
    }
}
export async function CustomerUpdate(id: string,updateData: {
    firstName?: string;
    lastName?: string;
    phone?: string;
    address?: string;
}){
    try{
        const updatedCustomer = await prisma.customer.update({
            where: {id:id},
            data: updateData
        });
        console.log("Customer updated successfully:",updatedCustomer);
        return updatedCustomer;
    }catch(error){
        console.error("Error updating customer:",error);
        throw error;
    }
}
