// Arrays Methods
let arr = [1, 2, 3, 4, 5];

function print(el) {
  console.log(el);
}

arr.forEach(print);
// OR
arr.forEach(function (el) {
  console.log(el);
});

let students = [
  {
    name: "Prajwal Gandhi",
    age: 18,
    marks: 97,
  },
  {
    name: "Shraddha",
    age: 25,
    marks: 94,
  },
  {
    name: "Manish kumar",
    age: 26,
    marks: 99,
  },
];

arr.forEach((student) => {
  console.log(student);
});

// Map
let num = [1, 2, 3, 4, 5];
let double = num.map((el) => {
  return el * el;
});

let gpa = students.map((el) => {
  return el.marks / 10;
});

// fliter
num = [1, 2, 3, 4, 7, 8, 2, 9, 10, 12, 11];
let ans = num.filter((el) => {
  return el % 2 == 0;
});

// every
let even = [1, 2, 3, 4].every((el) => {
  el % 2 == 0;
});
// --> false

// some
[1, 2, 3, 4].some((el) => el % 2 == 0);
// --> true

// reduce
[1, 2, 3, 4].reduce((res, el) => res + el);
// --> 10 (sum of numbers)
let nums = [2, 3, 4, 5, 3, 4, 7, 8, 1, 2];

let result = nums.reduce((max, el) => {
  if (el > max) {
    return el;
  } else {
    return max;
  }
});

// Practice
let mulX10 = [20, 150, 10, 350].every((el) => el % 10 == 0);
min = [8, 5, 15, 6, 1, -994, 51].reduce((res, el) => {
  if (el < res) {
    return el;
  } else {
    return res;
  }
});

// Default parameters
function sum(a=5,b=3){
  return a+b;
}
sum(2);

// Spread
arr = [1,2,5,3,5,6];
console.log(...arr);
// with Array Literals
let nreArr = [...arr];
console.log(...nreArr);
let chars = [...'hello'];
//with object Literals
let data = {
  email: 'gandhiprajwal@gmail.com',
  password: 'adbude',
};

let dataCopy = {...data,id:123};

// Rest
function sum (...args){
  return args.reduce((add,el)=>(add+el));
};

// Destructuring
let names = ['tony','bruce','peter','steve','abx','nnn','pqp'];
// let winner = names[0];
// let runnerUp = names[1];
// let secondRunnerup = names[2];
let [winner,runnerUp,...others] = names;
// with Objects
const student = {
  name: 'karan',
  class: 9,
  age: 14,
  subjects: ['hindi','english','math','science'],
  username: 'karan123',
  password: 1234,
};

const {username: user,password: pass} = student;
console.log(user);

// Assignment 
//Ques 1
arr = [1,2,3,4,5];
const square = arr.map((num)=> num*num);
console.log(square);

sum = square.reduce((acc,cur)=> acc+cur,0);

let avg = sum/arr.length;
console.log(avg);

// Ques 2
let newArr = arr.map((el)=>el+5);

// Ques 3
let strings = ['adam','bob','catlyn','donald','eve'];
console.log(strings.map((string)=>string.toUpperCase()));

// Ques 4
const doubleAndReturnArgs = (arr,...args)=>[...arr,...args.map((v)=>v*2),];

// doubleAndReturnArgs([1,2,3],4,4);
doubleAndReturnArgs([2],10,4);

// Ques 5
const mergeObjects = (obj1,obj2)=>({...obj1,...obj2});
mergeObjects({a:1,b:2},{c:2,d:4});