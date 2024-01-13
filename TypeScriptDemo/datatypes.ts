let Lname: string;

Lname = 'Mustafa';
let newName = Lname.toUpperCase();
console.log(newName);

let age: number;
age = 25;
age = 25.5;

// age = "25"

// Lname = 10;

let dob = "25";
let result = parseInt(dob);

let isValid: boolean = false;
console.log(isValid);

let empList: string[];

let depList: Array<string>;
empList = ["Santosh", "Santosh", "Santosh2"];

let numList: Array<number>
numList = [1, 2, 3, 4, 5];

let newNum = numList[0];

let results = numList.filter((num) => num > 2);

let emp = empList.find((emp) => emp === 'Santosh');

let sum = numList.reduce((acc, num) => acc + num);

console.log(results);
console.log(emp);
console.log(sum);

const enum Color {
    Red, 
    Green, 
    Blue
}

let c: Color = Color.Blue;

let swapNumbs: [firstNumber: number, secondNumber: number];

function swapNumbers(num1:number, num2:number) : [number, number] {
    return [num1, num2]
};

swapNumbs = swapNumbers(10, 20);
swapNumbs[0];
// swapNumbs[2];

let department: any;
department = "IT";
department = 10;







