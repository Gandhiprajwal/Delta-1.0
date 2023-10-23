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
// let arr = [1,2,3];
// arr.sayHello = ()=>{
//     console.log("Hello!, i am arr");
// }

// Factory Function
function PersonMaker(name,age){
    const person = {
        name: name,
        age: age,
        talk() {
            console.log(`Hi, my name is ${this.name}`);
        },
    };
    return person;
};

// Constructors - doesn't return anything & start with capital
// function Person(name,age){
//     this.name = name;
//     this.age = age;
// }

// Person.prototype.talk = function(){
//     console.log(`Hi, my name is ${this.name}`);
// }

// let p1 = new Person("Adam",25);
// let p2 = new Person("Kesgv",24);

// Classes
// class Person{
//     constructor (name,age){
//         this.name = name;
//         this.age = age;
//     }
//     talk(){
//         console.log(`Hi, my name is ${name}`);
//     }
// }

// let p3 = new Person("Adam",25);
// let p4 = new Person("Kesgv",24);

// Inheritance

class Person{
    constructor(name,age){
        console.log("person class constructor");
        this.name = name;
        this.age = age;
    }
    talk(){
        console.log(`Hi, I am ${this.name}`);
    }
}
class Student extends Person{
    constructor(names,age,marks){
        console.log("student class constructor");
        super(name,age);  // parent class constructor is being called
        this.marks = marks;
    }
    
};

class Teacher extends Person{
    constructor(names,age,subject){
        super(name,age);     // parent class constructor is being called
        this.subject = subject;
    }
    talk(){
        console.log(`Hi, I am ${this.name}`);
    }
};

