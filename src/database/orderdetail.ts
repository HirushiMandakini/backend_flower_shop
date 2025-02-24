import { PrismaClient } from "../../node_modules/.prisma/client/index";
import { Decimal } from "../../node_modules/@prisma/client/runtime/library";
import OrderDetail from "../model/orderdetailModel";

const prisma = new PrismaClient();

// save order detail
export async function saveOrderDetail(orderDetail: {orderId: string, flowerBouquetId: string, quantity: number, price: Decimal}) {
    try{
        const newOrderDetail = await prisma.orderItem.create({
            data: {
                orderId: orderDetail.orderId,
                flowerBouquetId : orderDetail.flowerBouquetId,
                quantity: orderDetail.quantity,
                price: orderDetail.price,
            }
        });
        console.log("Order detail saved successfully:", newOrderDetail);
        return newOrderDetail;
    }
    catch(error){
        console.error("Error saving order detail:", error);
        throw error;
    }
   
}
 // update orderDetail
    export async function updateOrderDetail(id: string, updated: {
     orderId: string,
     flowerBouquetId: string,
     quantity: number,
     price: Decimal
 }){
     try{
         const updatedOrderDetail = await prisma.orderItem.update({
             where: {id:id},
             data: updated
         });
         console.log("Order detail updated successfully:", updatedOrderDetail);
         return updatedOrderDetail;
     }
     catch(error){
         console.error("Error updating order detail:", error);
         throw error;
     }
 }

 // delete orderDetail
 export async function deleteOrderDetail(id: string) {
     try{
         const deletedOrderDetail = await prisma.orderItem.delete({
             where: {id:id},
         });
         console.log("Order detail deleted successfully:", deletedOrderDetail);
         return deletedOrderDetail;
     }
     catch(error){
         console.error("Error deleting order detail:", error);
         throw error;
     }
 }

 // get all orderDetails
 export async function getAllOrderDetails() {
     try{
         const allOrderDetails = await prisma.orderItem.findMany();
         return allOrderDetails;
     }
     catch(error){
         console.error("Error getting all order details:", error);
         throw error;
     }
 }

// // get orderDetail by id
 export async function getOrderDetailById(id: string) {
     try{
         const orderDetail = await prisma.orderItem.findUnique({
             where: {id:id},
         });
         return orderDetail;
     }
     catch(error){
         console.error("Error getting order detail by id:", error);
         throw error;
     }
 }


