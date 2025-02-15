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

export async function CustomerDelete(id: string){
    try{
        const deleteCustomer = await prisma.customer.delete({
            where: {id:id},
        });
        console.log("Customer deleted successfully:",deleteCustomer);
        return deleteCustomer;
    }
    catch(error: any){
        if(error.code === "P2025"){
        console.error("Error deleting customer:",error);
        throw new error("Customer not found");
        }else{
            console.error("Error deleting customer:",error);
            throw error;
        }
    }
}

export async function CustomerGetAll(){
    try{
        return await prisma.customer.findMany();
    }
    catch(error){
        console.error("Error getting all customers:",error);
        throw error;
    }
}

export async function CustomerGetById(id: string){
    try{
        const customer = await prisma.customer.findUnique({
            where: {
                id:id
            },
        });
        if(!customer){
            console.error("Customer not found");
            return null;
        }
        console.log("Employee found:",customer);
        return customer;
    }
    catch(error){
        console.error("Error getting customer by id:",error);
        throw error;
    }
}