// DOM Event
let btn = document.querySelector('button');
console.dir(btn);

// onclick 
// btn.onclick = function(){
//     console.log('button was clicked!');
// }

// This is for 2 or more buttons
// for(btns of btn){
//     btns.onmouseenter = function (){
//         console.log("touched!!");
//     }
// }

// btn.onmouseenter = function(){
//     console.log("Button has been tocuhed!");
// }

// Event Listener
function sayHello(){
    alert('Hello');
}

function sayName(){
    alert('apna college');
}

// This is for 2 or more buttons
// for(btns of btn){
//     btns.addEventListener("click",sayHello);
//     btns.addEventListener("click",sayName);
// }

// this in EventListener
let p = document.querySelector('p');
let h1 = document.querySelector('h1');
let h2 = document.querySelector('h2');
function changeColor() {
    console.dir(this.innerText);
    this.style.backgroundColor = 'blue';
}

btn.addEventListener("click",changeColor);

p.addEventListener("click",changeColor);

h1.addEventListener("click",changeColor);

h2.addEventListener("click",changeColor);

// Form Event

let form = document.querySelector('form');

// form.addEventListener("submit",function(event){
//     event.preventDefault();
//     // console.log("form submitteed");
//     // let inp = document.querySelector("input");
//     // let user = document.querySelector("#user");
//     // let pass = document.querySelector("#password");
//     let user = this.elements[0];
//     let pass = this.elements[1];
//     // console.log(inp.value);

//     console.log(user.value);
//     console.log(pass.value);

//     alert(`Hi ${user.value}, your password is set to ${pass.value}`);
// });


// More Events

let user = document.querySelector("#user");
user.addEventListener("change",function(event){
    event.preventDefault();
    console.log("input changed");
    console.log("Final value = ",user.value);
});

user.addEventListener("input",function(event){
    event.preventDefault();
    console.log("input changed");
    console.log("Final value = ",user.value);
});



// Assignment 10

// Ques 1
btn.addEventListener("mouseout",function(){
    console.log('mouse out!');
});

user.addEventListener("keypress",function(){
    console.log('Keypressed!');
});

// btn.addEventListener("load",function(){
//     console.log('scroll!');
// });

window.addEventListener("load", (event) => {
    alert("page is fully loaded");
  });
  

// Ques 2
// Create a button on the page using JavaScript.Add an eventlistener to the button that changes the button’s color to green when it is clicked.
// Already Done

// Ques 3
let inp1 = document.querySelector("#inp-text");
let inpBox = document.querySelector("#inp-ele");

inpBox.addEventListener('input',function(){
    let letters = /^[A-Za-z]+$/;
    if(inpBox.value.match(letters)){
        inp1.innerText = inpBox.value;
    }
    else{
        alert('write alphabets only!!');
    }
});