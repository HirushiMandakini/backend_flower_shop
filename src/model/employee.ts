import { Decimal } from "../../node_modules/@prisma/client/runtime/library";

export default class Employee{
    id:string;
    firstName:string;
    lastName:string;
    email:string
    phone:string;
    position:string
    salary:Decimal;

    constructor(id: string, firstName: string, lastName: string, email: string, phone: string, position: string, salary: Decimal){
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.phone = phone;
        this.position = position;
        this.salary = salary;
    }
}