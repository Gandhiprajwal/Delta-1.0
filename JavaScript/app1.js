// loops
// for(let i=1;i<=5;i++){
//     console.log(i);
// }

for (let i = 1; i <= 15; i++) {
  if (i % 2 != 0) {
    console.log("Odd -", i);
  } else {
    console.log("Even -", i);
  }
}

// infinite loop

// while(1){
//     console.log('hello');
// }

//Nested Loop
for (let i = 1; i < 5; i++) {
  for (let j = 1; j < 5; j++) {
    console.log(j);
  }
}

//while
while (condition) {
  //do something
}

// Movie Guess Game
let favMovie = "Avatar";
let guess = prompt("Guess the movie Name: ");
while ((guess != favMovie)) {
    if(guess!='quit'){
        console.log('You Quit!!');
    }
    console.log('Wrong');
    guess = prompt("Try Again! Guess the movie Name: ");
}
if(guess==favMovie){
    console.log("Congrats!! Answer is Correct.")
}

let heroes  = [['ironman','spiderman','thor'],['superman','wonder wonmen','flash']];
for(let i=0;i<heroes.length;i++){
    console.log(`List #${i}`);
    for(let j=0;j<heroes[i].length;j++){
        console.log(heroes[i][j]);
    }
}

let fruits = ['mango','apple','banana','litchi','orange'];
for(fruit of fruits){
    console.log(fruit);
}


// Assignment 
// Ques 1
let arr = [1,2,3,4,5,6,2,3];
let num = 2;
for (let i=0;i<arr.length;i++){
    if(arr[i] == num){
        arr.splice(i,1);
    }
}

//Ques 2
let number = 287152;
let count = 1;
let copy = number;
while(copy > 0){
    count++;
    copy = Math.floor(copy/10);
}
console.log(count);

// //Ques 3
number = 287152;
copy = number;
let digit,sum=0;
while(copy > 0){
    digit = copy%10;
    sum+=digit;
    copy = Math.floor(copy/10);
}
console.log(sum);

//Ques 4
let fact = 5;
for(let i=1;i<fact;i++){
    fact*=i;
}

console.log(fact);

// Ques 5
arr = [2,5,10,4,2,7,1,9];
let largest = 0;

for(let i=0;i<arr.length;i++){
    if(largest < arr[i]){
        largest = arr[i];
    }
}

console.log(largest);