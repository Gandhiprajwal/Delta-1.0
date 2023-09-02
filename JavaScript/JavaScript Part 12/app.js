// Async Function & Await Function
async function greet() {
  // throw "some random error"
  return "hello world!";
}

let hello = async () => {};

greet()
  .then((result) => {
    console.log("Promise was successful" + result);
  })
  .catch((err) => {
    console.log("promise was rejected with err :" + err);
  });

function getNum() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let num = Math.floor(Math.random() * 10) + 1;
      console.log(num);
      resolve();
    }, 1000);
  });
}

async function demo() {
  await getNum();
  await getNum();
  await getNum();
  await getNum();
  await getNum();
  await getNum();
}

h1 = document.querySelector("h1");
function changeColor(color, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let num = Math.floor(Math.random() * 5) + 1;
      console.log(num);
      if (num > 3) {
        reject("promise reject");
      }
      h1.style.color = color;
      console.log("color chnaged to " + color);
      resolve("color changed");
    }, delay);
  });
}

async function demo1() {
  try {
    await changeColor("red", 1000);
    await changeColor("green", 1000);
    await changeColor("yellow", 1000);
    await changeColor("orange", 1000);
    await changeColor("blue", 1000);
    await changeColor("black", 1000);
  } catch (err) {
    console.log("error detected");
    console.log(err);
  }
  let a = 5;
  console.log(a);
}

demo1();

// API
let url = "https://catfact.ninja/fact";


// API call by promises

// fetch(url) // return promise in the form of response
//   .then((response) => {
//     console.log(response);
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data.fact);
//     return fetch(url);
//   })
//   .then((response)=>{
//     return response.json();
//   })
//   .then((data2)=>{
//     console.log(data2.fact);
//   })
//   .catch((err) => {
//     console.log("ERROR - ", err);
//   });


// API call by async function

async function getFacts() {
  try {
    let res = await fetch(url);
    let data = await res.json();
    console.log(data.fact);

    let res2 = await fetch(url);
    let data2 = await res2.json();
    console.log(data2.fact);

    let res3 = await fetch(url);
    let data3 = await res3.json();
    console.log(data3.fact);
  } catch (e) {
    console.log("ERROR - ", e);
  }
}

getFacts();