import { Decimal } from "../../node_modules/@prisma/client/runtime/library";

export default class Oder {
    id: string;
    totalAmount: Decimal;
    date: Date;
    customerId: string;

    constructor(
        id: string,
        totalAmount: Decimal,
        date: Date,
        customerId: string
    ) {
        this.id = id;
        this.totalAmount = totalAmount;
        this.date = date;
        this.customerId = customerId;
    }
}