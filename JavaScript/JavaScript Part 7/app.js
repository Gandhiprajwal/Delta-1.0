// this keyword
const student = {
  name: "Prajwal",
  age: 20,
  eng: 95,
  math: 93,
  phy: 97,
  getAvg() {
    let avg = (this.eng + this.math + this.phy) / 3;
    console.log(avg);
  },
};

function getAvg() {
  console.log(this);
}

// try & catch
console.log("hello");
console.log("hello");
console.log("hello");
// let a = 5;
try {
  console.log(a);
} catch (err) {
  console.log("caught an error... a is not defined.");
  console.log(err);
}
console.log("hello2");
console.log("hello2");
console.log("hello2");

// Arrow functions
const sum = (a, b) => {
  console.log(a + b);
};

const cube = (a) => {
  console.log(a * a * a);
};
// implicit return
const mul = (a, b) => a * b;
// setTimeout
setTimeout(() => {
  console.log("Apna College");
}, 4000);
// set Interval
let id = setInterval(() => {
  console.log("repeat");
}, 2000);

clearInterval(id);
console.log(id);

// this keyword with arrow functions
const student1 = {
  name: "aman",
  marks: 95,
  prop: this, // global scope
  getName: function () {
    console.log(this);
    return this.name;
  },
  getMarks: () => {
    console.log(this); // paretnt's scope ->> window
    return this.marks;
  },
  getInfo1: function () {
    setTimeout(() => {
      console.log(this); // student object
    }, 2000);
  },
  getInfo2: function () {
    setTimeout(function () {
      console.log(this);
    }, 2000);
  },
};

// Practice Ques
// Ques 1
const printSquare = (a) => Math.pow(a, 2);

// Ques 2
let id1 = setInterval(() => {
  console.log("Hello World");
}, 2000);

setTimeout(() => {
  clearInterval(id1);
  console.log("time out");
}, 10000);

// Assignment Part 7 (JavaScript)
//Ques 1
let arr = [5, 4, 8, 6, 2];
const arrayAverage = (arr) => {
  let avg = 0;
  for (let number of arr) {
    avg += number;
  }
  return avg / arr.length;
};

console.log(arrayAverage(arr));

// Ques 2
let num = 34;
const checkEven = (num) => {
  if (num % 2 == 0) {
    return "even";
  } else {
    return "not a even number";
  }
};

console.log(checkEven(num));

// Ques 3
const object = {
  message: "Hello,World!",
  logMessage() {
    message = "hello,earth";
    console.log(this.message);
  },
};
setTimeout(object.logMessage, 1000);

// Ques 4
let length=4;
function callback() {
  console.log(this.length);
}
const object1 = {
  length:5,
  method(callback){
    callback();
  },
};

console.log(object.method(callback,1,2));
