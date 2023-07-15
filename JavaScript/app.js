console.log('Hello Prajwal');
console.log(123);
let a = 5;
let b = 4;
let sum = a + b;
console.log(sum);
let pencilPrice = 10;
let erasorPrice = 5;
console.log(`The total price is: ${pencilPrice+erasorPrice} ruppes`);

// Arithmetic Operator's +,*,-,/,%
let num1 = 2,num2 = 4;
let totalSum = num1+num2;
let totalDiff = num1-num2;
let totalMul = num1*num2;
let totalDiv = num1/num2;
let totalRemainder = num1%num2;
console.log("Arithmetic Operator's")
console.log(totalSum);
console.log(totalDiff);
console.log(totalMul);
console.log(totalDiv);
console.log(totalRemainder);

//Uniary Operator's ++,--
console.log("Uniary Operator's")
console.log(num1);
console.log(num1++);
console.log(num1);
console.log(num1--);
console.log(num1)

// Comparison Operator's <,<=,>,>=,==,!=
let age = 17; 
console.log(age<=19);

//Conditional Statement

// if statement
if(age>=18){
    console.log("you can vote");
    console.log("you can drive");
}
else{
    console.log('you are not eligible for vote & drive');
}

// practice Ques
let color = "green";

// traffic light system
if(color==='red'){
    console.log('Stop!');
}
if(color==='yellow'){
    console.log('slow down');
}
if(color==='green'){
    console.log('Go. light is green.')
}

//else-if statement
let marks = 20;
if(marks>=80){
    console.log('A+');
}
else if(marks>=60){
    console.log('A');
}
else if(marks>=33){
    console.log('B');
}
else if(marks<33){
    console.log('F');
}

// else statement
if(age>=18){
    console.log('you can vote & drive');
}
else{
    console.log("you can't vote & drive");
}

//Practice ques
let size = 'L';
if(size==='XL'){
    console.log('Rs. 250');
}
else if(size==='L'){
    console.log('Rs.200');
}
else if(size==='M'){
    console.log('Rs.100');
}
else{
    console.log('Rs.50');
}

//nested if-else statement
if(marks>33){
    if(marks>=80){
        console.log('A+');
    }
    else if(marks>=60){
        console.log('A');
    }
    else{
        console.log('B')
    }
}

else{
    console.log('Better Luck Next Time!')
}

// logical operator's  -> &&,||,!
let subMarks = 90;
if(subMarks >=33 && subMarks >=80 ){
    console.log('pass');
    console.log('A+');
}

if(subMarks >=33 || !false ){
    console.log('pass');
    // console.log('A+');
}

//Practice Ques
let str = 'app';

if(str.length > 3 && str[0] ==='a'){
    console.log('Good String');
}
else{
    console.log('Bad Stirng');
}

// Switch statement
let color1 = 'r';
switch(color1){
    case 'red':
        console.log('stop!');
        break;
    case 'yellow':
        console.log('slow down');
        break;
    case 'green':
        console.log('Go away.');
        break;
    default:
        console.log('Error');
}

// Practice Ques
let day = 7;
switch(day){
    case 1:
        console.log('Monday');
        break;
    case 2:
        console.log('Tuesday');
        break;
    case 3:
        console.log('Wednesday');
        break;
    case 4:
        console.log('Thrusday');
        break;
    case 5:
        console.log('Friday');
        break;
    case 6:
        console.log('Saturday');
        break;
    case 7:
        console.log('Sunday');
        break;
    default:
        console.log('Worng Day!')
}

//Alert & Promot
// alert('something is wrong!!');
console.log('This is a console.log');
console.error('this is an error msg');
console.warn('this is an warning msg');

// let firstName = prompt('Enter first name:');
// let lastName = prompt('Enter last name:');
// console.log('Welcome',firstName,'',lastName,'!');
 

// Assignment
//Ques 1
let num = 21;
if(num%10 == 0){
    console.log('good');
}
else{
    console.log('bad');
}

// Ques2
// let firstName = prompt('Enter your first name:');
// let age1 = prompt('Enter your age:');
// let msg = `${firstName} is ${age1} years old.`;
// console.log(msg);

//Ques 3
let quarter = 2;

switch(quarter){
    case 1:
        console.log('January,February,March');
        break;
    case 2:
        console.log('April,May,June');
        break;
    case 3:
        console.log('July,August,September');
        break;
    case 4:
        console.log('October,November,December');
        break;
    default:
        console.log('Incorrect!!');
}

//Ques 4
let string = 'apples';
if((string[0]==='a'|| string[0]==='A') && string.length>5){
    console.log('Golden String');
}
else{
    console.log('Not a Golden String');
}

//Ques 5
let numb1 = 42,numb2 = 9,numb3 = 32;
if(numb1>numb2 && numb1>numb3){
    console.log(`${numb1} is largest number.`)
}
else if(numb1<numb2 && numb2>numb3){
    console.log(`${numb2} is largest number.`)
}
else{
    console.log(`${numb3} is largest number.`)
}

//Ques 5
if((numb1%10) == (numb3%10)){
    console.log('Both have same last digit');
}
else{
    console.log("Both haven't same last digit");
}