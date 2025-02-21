import { PrismaClient } from "../../node_modules/.prisma/client/index";
import { Decimal } from "../../node_modules/@prisma/client/runtime/library";
import FlowerBoquet from "../model/flowerboquetModel";

const prisma = new PrismaClient();

// save flower bouquet
export async function FlowerbouquetAdd(flowerboquet:{name: string, description: string, price: Decimal,stock: number,supplierId: string}){
    try{
        const newFlowerBouquet = await prisma.flowerBouquet.create({
            data: {
                name: flowerboquet.name,
                description: flowerboquet.description,
                price: flowerboquet.price,
                stock: flowerboquet.stock,
                supplierId: flowerboquet.supplierId,
            }
        });
        console.log(`Flower bouquet saved: ${newFlowerBouquet.name}`);
        return newFlowerBouquet;

    }
    catch(error){
        console.error("Error saving flower bouquet", error);
        throw error;
    }
}

// update flowerboquet

export async function FlowerbouquetUpdate(id: string, updateData: {
    name?: string,
    description?: string,
    price?: Decimal,
    stock?: number,
    supplierId?: string,
}){
    try{
        const updatedFlowerBouquet = await prisma.flowerBouquet.update({
            where: {id:id},
            data: updateData
        });
        console.log(`Flower bouquet updated: ${updatedFlowerBouquet.name}`);
        return updatedFlowerBouquet;

    }
    catch(error){
        console.error("Error updating flower bouquet", error);
        throw error;
    }
}


// delete flower bouquet

export async function FlowerbouquetDelete(id: string){
    try{
        const deleteFlowerBouquet = await prisma.flowerBouquet.delete({
            where: {id: id},
        });
        console.log(`Flower bouquet deleted: ${deleteFlowerBouquet.name}`);
        return deleteFlowerBouquet;

    }
    catch(error){
        console.error("Error deleting flower bouquet", error);
        throw error;
    }
}

// get all flower bouquets

export async function getallFlowerbouquets(){
    try{
        const allFlowerBouquets = await prisma.flowerBouquet.findMany();
        console.log("All flower bouquets fetched successfully");
        return allFlowerBouquets;

    }
    catch(error){
        console.error("Error fetching flower bouquets", error);
        throw error;
    }
}

// get flower bouquet by id

export async function FlowerbouquetSearch(id: string){
    try {
        const flowerBouquet = await prisma.flowerBouquet.findUnique({
            where: {
                id: id,
            },
        });

        if (!flowerBouquet) {
            throw new Error(`Flower bouquet not found with id: ${id}`);
        }

        console.log(`Flower bouquet fetched successfully: ${flowerBouquet.name}`);
        return flowerBouquet;

    } catch (error) {
        console.error("Error fetching flower bouquet", error);
        throw error;
    }
}