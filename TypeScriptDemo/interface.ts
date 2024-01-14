export interface User {
    name: string;
    age?: number;
    id: number;
    email: string;
};

let { name: userName, email: userLogin }: User = { name: "John", id: 1, email: "" };

// userLogin = ''

interface Employees extends User {
    salary: number;
};

let emoloyee: Employees = { name: "John", id: 1, email: "", salary: 1000 };

export interface Login {
    Login(): User;
};

let [user1, user2, user3]: User[] = [
    { name: "John", id: 1, email: ""},
    { name: "John1", id: 2, email: ""},
    { name: "John2", id: 3, email: ""},
];
console.log(user1);
console.log(user2);



