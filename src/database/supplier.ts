import { PrismaClient } from "../../node_modules/.prisma/client/index";
import Supplier from "../model/supplierModel";

const prisma = new PrismaClient();

// save supplier

export async function SupplierAdd(supplier: { name: string; email: string; phone: string; address: string}){
    try{
        const newSupplier = await prisma.supplier.create({
            data: {
                name: supplier.name,
                email: supplier.email,
                phone: supplier.phone,
                address: supplier.address,
            }
        });
        return newSupplier;
    } catch (error){
        console.log(error);
        throw new Error("Error in saving supplier");
    }
}

// get supplier by id

export async function SupplierGetById(id: string){
    try{
        const supplier = await prisma.supplier.findUnique({
            where: {
                id: id,
            },
        });
        if(!supplier){
            throw new Error("Supplier not found");
        }
        return supplier;
    } catch (error){
        console.log(error);
        throw new Error("Error in getting supplier by id");
    }
}

// get all suppliers

export async function SupplierGetAll(){
    try{
        const suppliers = await prisma.supplier.findMany();
        return suppliers;
    } catch (error){
        console.log(error);
        throw new Error("Error in getting all suppliers");
    }
}

// update supplier

export async function SupplierUpdate(id: string, supplier: { name: string; email: string; phone: string; address: string}){
    try{
        await prisma.supplier.update({
            where: {
                id: id,
            },
            data: {
                name: supplier.name,
                email: supplier.email,
                phone: supplier.phone,
                address: supplier.address,
            },
        });
        return "Supplier updated successfully";
    } catch (error){
        console.log(error);
        throw new Error("Error in updating supplier");
    }
}

// delete supplier

export async function SupplierDelete(id: string){
    try{
        await prisma.supplier.delete({
            where: {
                id: id,
            },
        });
        return "Supplier deleted successfully";
    } catch (error){
        console.log(error);
        throw new Error("Error in deleting supplier");
    }
}

export default Supplier;