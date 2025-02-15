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
