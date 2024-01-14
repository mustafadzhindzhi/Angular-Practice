"use strict";
let Lname;
Lname = 'Mustafa';
let newName = Lname.toUpperCase();
console.log(newName);
let age;
age = 25;
age = 25.5;
// age = "25"
// Lname = 10;
let dob = "25";
let result = parseInt(dob);
let isValid = false;
console.log(isValid);
let empList;
let depList;
empList = ["Santosh", "Santosh", "Santosh2"];
let numList;
numList = [1, 2, 3, 4, 5];
let newNum = numList[0];
let results = numList.filter((num) => num > 2);
let emp = empList.find((emp) => emp === 'Santosh');
let sum = numList.reduce((acc, num) => acc + num);
console.log(results);
console.log(emp);
console.log(sum);
let c = 2 /* Color.Blue */;
let swapNumbs;
function swapNumbers(num1, num2) {
    return [num1, num2];
}
;
swapNumbs = swapNumbers(10, 20);
swapNumbs[0];
// swapNumbs[2];
let department;
department = "IT";
department = 10;
//# sourceMappingURL=datatypes.js.map