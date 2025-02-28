import FlowerBouquet from "../model/flowerboquetModel"; // Import from models directory

export default class Supplier {
    id: string;
    name: string;
    email: string;
    phone: string;
    address: string;
    flowerBouquet: FlowerBouquet[];

    constructor(id: string, name: string, email: string, phone: string, address: string, flowerBouquet: FlowerBouquet[]) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.address = address;
        this.flowerBouquet = []; // Initialize as an empty array
    }
}
