// Function initialize
function hello() {
  console.log("Hello");
}

// Function call
hello();

// Practice Ques
function printPoem() {
  console.log("Twinkle Twinkle little stat");
  console.log("how I wonder what you are");
}
printPoem();

//Function with arguments

function printName(name) {
  console.log(name);
}

printName("Prajwal");

// Practice Ques
function calcAvg(a, b, c) {
  console.log((a + b + c) / 3);
}

calcAvg(3, 3, 3);

function printTable(n) {
  for (let i = n; i <= n * 10; i += n) {
    console.log(i);
  }
}

printTable(2);

// return keyword
function sun(a, b) {
  return a + b;
}

console.log(sun(3, 4));

// Practice Ques
let sum = 0;
function nSum(n) {
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}

console.log(nSum(1000));

let str = ["hi", "hello", "bye", "!"];

function concat(str) {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    result += str[i];
  }
  return result;
}

console.log(concat(str));

// function expression
const Sum = function (a, b) {
  return a + b;
};

console.log(Sum(4, 5));

// Higher order functions
function multipleGreet(func, n) {
  for (let i = 1; i <= n; i++) {
    func();
  }
}

let greet = function () {
  console.log("hello");
};

multipleGreet(greet, 2);

// returns in higher order functions

let odd = function (n) {
  if (n % 2 != 0) {
    console.log("Odd");
  }
};
function oddEvenTest(request) {
  if (request == "odd") {
    return function (n) {
      console.log(!(n % 2 == 0));
    };
  } else if (request == "even") {
    return function (n) {
      console.log(n % 2 == 0);
    };
  } else {
    console.log("wrong request");
  }
}

console.log(oddEvenTest("even"));

// Assignment Part - 6
// Ques 1

let arr = [8, 4, 5, 3, 1, 2, 6, 3];
let num = 6;

function getLargest(arr, num) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > num) {
      console.log(arr[i]);
    }
  }
}

getLargest(arr,num);

// Ques 2
let str1 = "abcdabcdefgggh";
function getUnique(str){
    let ans = "";
    for(let i=0;i<str.length;i++){
        let currChar = str[i];
        if(ans.indexOf(currChar) == -1){
            ans+=currChar;
        }
    }
    console.log(ans);
}

getUnique(str1);

// Ques 3
let country = ["Australia","Germany","United States of America"];

function longestName(country){
    let ansIdx = 0;
    for(let i=0;i<country.length;i++){
        let ansLen = country[ansIdx].length;
        let currLen = country[i].length;
        if(currLen > ansLen){
            ansIdx = i;
        }
    }
    return ansIdx;
}

console.log(country[longestName(country)]);

// Ques 4
str  = 'apnacollege';
function countVowels(str){
    let count = 0;
    for(let i=0;i<str.length;i++){
        if(str.charAt(i) == 'a' || str.charAt(i) == 'e' || str.charAt(i) == 'i' || str.charAt(i) == 'o' || str.charAt(i) == 'u'){
            count++;
        }
    }
    return count;
}

console.log(countVowels(str));

// Ques 5
let start = 100;
let end = 200;
 
function generateRandom(start,end){
    let diff = end - start;
    return Math.floor(Math.random() * diff)+start;
}

console.log(generateRandom(start,end));