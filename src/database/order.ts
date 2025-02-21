import { PrismaClient } from "../../node_modules/.prisma/client/index";
import { Decimal } from "../../node_modules/@prisma/client/runtime/library";
import Order from "../model/orderModel";

const prisma = new PrismaClient();

// save order
export async function saveOrder(order: { totalAmount: Decimal; date: Date; customerId: string; }){
    try{
        const newOrder = await prisma.order.create({
            data: {
                totalAmount: order.totalAmount,
                date: order.date,
                customerId: order.customerId,
            }
        });
        console.log("Order saved successfully:",newOrder);
        return newOrder;
    }
    catch(error){
        console.error("Error saving order:",error);
        throw error;
    }
}

// update order
export async function updateOrder(id: string, updateData: {
    totalAmount?: Decimal;
    date?: Date;
    customerId?: string;
}){
    try{
        const updatedOrder = await prisma.order.update({
            where: {id:id},
            data: updateData
        });
        console.log("Order updated successfully:",updatedOrder);
        return updatedOrder;
    }
    catch(error){
        console.error("Error updating order:",error);
        throw error;
    }
}

// delete order
export async function deleteOrder(id: string){
    try{
        const deleteOrder = await prisma.order.delete({
            where: {id:id},
        });
        console.log("Order deleted successfully:",deleteOrder);
        return deleteOrder;
    }
    catch(error){
        console.error("Error deleting order:",error);
        throw error;
    }
}

// get all orders
export async function getAllOrders(){
    try{
        const allOrders = await prisma.order.findMany();
        return allOrders;
    }
    catch(error){
        console.error("Error getting all orders:",error);
        throw error;
    }
}

// get order by id
export async function getOrderById(id: string){
    try{
        const order = await prisma.order.findUnique({
            where: {id:id},
        });
        return order;
    }
    catch(error){
        console.error("Error getting order by id:",error);
        throw error;
    }
}