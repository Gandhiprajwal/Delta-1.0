// THIS IS NOT A GOOD PRACTICE AS A DEVELOPER THAT WE MAKE MULTIPLE FUNCTION OF EACH OBJECT. WE USE OOPS CONCEPT TO SOLVE IT.
// const stu1 = {
//     name: "adam",
//     age: 25,
//     marks: 95,
//     getMarks: function(){
//         return this.marks;
//     },
// };

// const stu2 = {
//     name: "eve",
//     age: 25,
//     marks: 99,
//     getMarks: function(){
//         return this.marks;
//     },
// };

// const stu3 = {
//     name: "adam",
//     age: 20,
//     marks: 89,
//     getMarks: function(){
//         return this.marks;
//     },
// };

// BY USING OOPS CONCEPTS.
let arr = [1,2,3];
arr.sayHello = ()=>{
    console.log("Hello!, i am arr");
}