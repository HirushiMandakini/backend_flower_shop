import { Decimal } from "../../node_modules/@prisma/client/runtime/library";

export default class OrderDetail {
    id: string;
    orderId: string;
    flowerBouquetId: string;
    quantity: number;
    price: Decimal;
    
    constructor(
        id: string,
        orderId: string, 
        flowerBouquetId: string, 
        quantity: number, 
        price: Decimal
    ) {
        this.id = id;
        this.orderId = orderId;
        this.flowerBouquetId = flowerBouquetId;
        this.quantity = quantity;
        this.price = price;
    }
}