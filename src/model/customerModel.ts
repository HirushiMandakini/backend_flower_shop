export default class Customer{
    id:string;
    firstName:string;
    lastName:string;
    phone:string;
    address:string;

    constructor(id: string, firstName: string, lastName: string, phone: string, address: string){
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.phone = phone;
        this.address = address;
    }
}