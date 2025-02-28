import Order from "../model/orderModel"; // Ensure Order is correctly imported

export default class Customer {
    id: string;
    firstName: string;
    lastName: string;
    phone: string;
    address: string;
    orders: Order[];

    constructor(id: string, firstName: string, lastName: string, phone: string, address: string) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.phone = phone;
        this.address = address;
        this.orders = []; // Initialize orders with an empty array if not provided
    }
}
