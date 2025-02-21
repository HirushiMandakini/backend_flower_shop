// import { Decimal } from "../../node_modules/@prisma/client/runtime/library";


// export default class FlowerBouquet {
//   id: string;
//   name: string;
//   description?: string;
//   price: Decimal;
//   stock: number;
//   supplierId?: string;

//   constructor(id: string,name: string,price: Decimal,stock: number,description: string,supplierId?: string
//   ) {
//     this.id = id;
//     this.name = name;
//     this.price = price;
//     this.stock = stock;
//     this.description = description;
//     this.supplierId = supplierId;
//   }
// }
import { Decimal } from "../../node_modules/@prisma/client/runtime/library";

export default class FlowerBouquet {
    id: string;
    name: string;
    description: string;
    price: Decimal;
    stock: number;
    // supplierId?: string;

    constructor(
        id: string, 
        name: string, 
        price: Decimal, 
        stock: number, 
        description: string = "", // Default value to avoid undefined
        // supplierId?: string
    ) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.stock = stock;
        this.description = description;
        // this.supplierId = supplierId;
    }
}


