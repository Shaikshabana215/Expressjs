// // let sales: number = 12_123_25;
// // let course: string = 'Typescript';
// // let is_published: boolean = true;
// // //level type is any
// // let level;
// import { TupleType } from "typescript";
// // level = 1;
// // level = "a";
// // function render(document:any){
// //     console.log(document);
// // }
// // function add( a: number, b: number) {
// //     let c: number = a+b;
// //     console.log(c);
// // }
// //Arrays
// let numbers= [1,2,3];
// numbers.push(1);
// console.log(numbers);
// let fruits: string[] = ['apple','orange','mango'];
// //Tuples, all the datatypes are used
// let user = ['apple',1,true];
// //enum
// // const small = 1;
// // const medium =2;
// // const large = 3;
// //enum
// enum size{small =1, medium, large};
// let mySize : size = size.large;
// console.log(mySize);
//functions
function calculateTax(income, taxYear = 2023) {
    if (taxYear < 2022)
        return income * 1.2;
    return income * 1.3;
}
calculateTax(10000);
function add(a, b) {
    let c = a + b;
    // return c;
    console.log(c);
}
add(2, 10);
//objects
let employee = { id: 1, name: "Mosh", retire(date) {
        console.log(date);
    } };
employee.id = 0;
//Type helps to Dont Repeat Yourself
// type User = {
// id: number,
// username: string,
// course: string,
// year: number
// }
// let createUser: User = {
//     id : 100,
//     username: 'Mosh',
//     course: 'Fullstack Development',
//     year: 2023
// }
//Union Types: Morethan 1type we can have a variable
//Data Types
let person = "Hello";
let age = 5;
let isUpperClass = false;
let nothing = null;
let no = null;
let car = {
    name: 'Maruthi',
    color: 'black',
    price: 1 - 20000
};
let fruits = ['apple', 'orange', 'mango'];
let mixed = [1, true, 'myself'];
console.log(`person is ${person}`);
console.log(`age is ${age}`);
console.log(`isUpperClass is ${isUpperClass}`);
console.log(`nothing is ${nothing}`);
console.log(`car is ${car}`);
console.log(`no is ${no}`);
console.log(`fruits is ${fruits}`);
console.log(`mixed is ${mixed}`);
//# sourceMappingURL=index.js.map