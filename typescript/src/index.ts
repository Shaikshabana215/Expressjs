// // let sales: number = 12_123_25;
// // let course: string = 'Typescript';
// // let is_published: boolean = true;
// // //level type is any
// // let level;

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

function calculateTax(income: number, taxYear: number = 2023): number {
  if (taxYear < 2022) return income * 1.2;
  return income * 1.3;
}
calculateTax(10_000);

function add(a: number, b: number) {
  let c: number = a + b;
  // return c;
  console.log(c);
}

add(2, 10);

//objects

let employee: {
  id: number,
  readonly name: string,
  retire :(date: Date)=>void
} = { id: 1, name: "Mosh", retire(date: Date) {
    console.log(date);
}};
employee.id = 0;

//Type helps to Dont Repeat Yourself
type User = {
id: number,
username: string,
course: string,
year: number
}

let createUser: User = {
    id : 100,
    username: 'Mosh',
    course: 'Fullstack Development',
    year: 2023
}
