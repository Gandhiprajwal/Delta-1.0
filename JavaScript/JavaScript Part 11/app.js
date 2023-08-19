
// CallStack
function hello(){
    console.log('Hello');
}

hello();

function one(){
    return 1;
}

function two(){
    return one() + one();
}

function three(){
    let ans  = two() + one();
    console.log(ans);
}

three();

// Single threads
// Single threaded processes contain the execution of instructions in a single sequence
let str = setTimeout(()=>{
    console.log("Apna College");
},2000);

console.log('Helloooo...');

// Callback Hell
let h1 = document.querySelector("h1");
function changeColor(color,delay,nextColorChange){
    setTimeout(()=>{
        h1.style.color = color;
        if(nextColorChange) nextColorChange();
    },delay);
}

changeColor("red",1000,()=>{
    changeColor("orange",1000,()=>{
        changeColor("green",1000);
    })
});