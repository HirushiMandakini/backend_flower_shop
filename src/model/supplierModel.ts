// id          String      @id @default(uuid())
// name        String
// email       String      @unique
// phone       String
// address     String
// flowerBouquets FlowerBouquet[]
// }
export default class Supplier {
    id: string;
    name: string;
    email: string;
    phone: string;
    address: string;
    // flowerBouquets: FlowerBouquet[];

    constructor(id: string,name: string,email: string,phone: string,address:string) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.address = address;
    // this.flowerBouquets = flowerBouquets;
    }
}