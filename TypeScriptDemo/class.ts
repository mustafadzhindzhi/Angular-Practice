// import { Login, User } from "./interface.js";
import * as UserLogin from './interface.js'
interface Address {
    street: string;
    city: string;
    state:string;
    pin: string
}

class Employee implements UserLogin.Login {
    #id: number; // # == private
    protected name: string;
    adress: Address

    get empId(): number {
        return this.#id;
    };

    set empId(id:number) {
        this.#id = id;
    }

    static getEmployeeCount(): number {
        return 50;
    }

    // constructor() {}
    constructor(id: number, name: string, adress: Address) {
        this.adress = adress;
        this.name = name;
        this.#id = id;
    };

    Login(): UserLogin.User {
        return {name:"John", id:1, email:""};
    }

    getNameWithAddress(): string {
        return `${this.name} stays at ${this.adress}`;
    }
};

let john = new Employee(1, 'John', {
    street: "ABC",
    city: "Bangalore",
    state: "Karnatka",
    pin: "56008" });
john.empId = 100;
console.log(john.empId);

// Employee.getEmployeeCount();

class Manager extends Employee {

    constructor(id: number, name: string, adress: Address) {
        super(id, name, adress);
    };

    getNameWithAddress(): string {
        return `${this.name} is a manager at ${this.adress}`
    }
}
let address = john.getNameWithAddress();
// john.id = 1;
// john.name = 'John';
// john.adress = 'Highway 71';

console.log(address);

// let mike = new Manager(2, "Mike", "Cherise Drive");
// console.log(mike.getNameWithAddress());

