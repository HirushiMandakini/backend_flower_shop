import { PrismaClient } from "../../node_modules/.prisma/client/index";
import { Decimal } from "../../node_modules/@prisma/client/runtime/library";
import Order from "../model/orderModel";

const prisma = new PrismaClient();

// save order
export async function saveOrder(order:{totalAmount: Decimal,date: Date,customerId: string}){
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