// let delhi = {
//     latitude:'27.7041° N',
//     longitude:'77.1025° E'
// };

// const student = {
//     name:'Prajwal Gandhi',
//     age: 19,
//     marks: [94.5,84.5]
// }

// // Add/Update/Delete literals
// student.city  = 'Mumbai';
// student.gender = "Male";
// delete student.marks;

// const post={
//     username: "@prajwalgandhi5",
//     content: "This is my #firstPost",
//     likes: 150,
//     repost: 5,
//     tags: ["@apnacollege","@delta"]
// }

// //Print Object Literal or Access the Object literals value
// console.log(student["name"]);
// console.log(student.name);

// // Nested Objects
// const classInfo = {
//     aman: {
//         grade: "A+",
//         city: "Delhi"
//     },
//     piyush:{
//         grade: "A",
//         city: "Dehradun"
//     },
//     shraddha: {
//         grade: "B+",
//         city: "Mumbai"
//     }
// }


// // Arrays of Objects
// const classInfo1 = [
//     {
//         name: "aman",
//         grade: "A+",
//         city: "Delhi"
//     },
//     {
//         name: "piyush",
//         grade: "A",
//         city: "Dehradun"
//     }
// ];

// // Math.randon()

// let num = Math.random();
// num = num*10;
// num = Math.floor(num);
// num = num+1;

//Game
// const max = prompt('enter a maximum number');
// const random = Math.floor(Math.random()*max)+1;
// let guess = prompt('guess the number');
// console.log(random);

// while(true){
//     if(guess=='quit'){
//         console.log('User quit!');
//         break;
//     }
//     if(guess==random){
//         console.log('you are right!, Congrats');
//         break;
//     }
//     else if(guess< random){
//         guess = prompt('hint: your guess was too small. please try again!');
//     }
//     else{
//         guess = prompt('hint: your guess was too large! please try again.');
//     }
// }

//Assignment 
//Ques 1
let diceNum = Math.floor(Math.random()*6)+1;
console.log(diceNum);

//Ques 2
let car = [
    {
        name: 'Toyota Furtuner',
        model: 2019,
        color: 'Black'
    },
    {
        name: 'Hyundai i10',
        model: 2020,
        color: 'White'
    }
];
console.log(car[0].name);

// Ques 3
let person = 
    {
        name:'Elvish',
        age: 26,
        city: 'Gurugram'
    };

person.city = 'New York';
person.country = 'United States';