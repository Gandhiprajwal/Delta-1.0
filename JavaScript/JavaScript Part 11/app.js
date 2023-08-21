// CallStack
function hello() {
  console.log("Hello");
}

hello();

function one() {
  return 1;
}

function two() {
  return one() + one();
}

function three() {
  let ans = two() + one();
  console.log(ans);
}

three();

// Single threads
// Single threaded processes contain the execution of instructions in a single sequence
let str = setTimeout(() => {
  console.log("Apna College");
}, 2000);

console.log("Helloooo...");

// Callback Hell
let h1 = document.querySelector("h1");
function changeColor(color, delay) {
  return new Promise((resolve,reject)=>{
  setTimeout(() => {
    h1.style.color = color;
    resolve("color changed");
  }, delay);
});
}

// newly call data after .then or Promises
changeColor("red",1000)
.then(()=>{
  console.log("red color was completed");
  return changeColor('yellow',1000);
})
.then(()=>{
  console.log('yellow color was completed');
  return changeColor('green',1000);
})
.then(()=>{
  console.log("green was completed");
})


// Previous call data
// changeColor("red", 1000, () => {
//   changeColor("orange", 1000, () => {
//     changeColor("green", 1000);
//   });
// });

// Promises
// function saveDB(data,sucess,failure){
//     let internetSpeed = Math.floor(Math.random()*10)+1;
//     if(internetSpeed > 4){
//         sucess();
//     }
//     else{
//         failure();
//     }
// }

// saveDB("apna college",()=>{
//     console.log("your data was saved");
//     saveDB("prajwal",()=>{
//         console.log('your data2 saved');
//     },()=>{
//         console.log('weak connection, data2 not saved');
//     })
// },()=>{
//     console.log("weak connection. data not saved");
// });

function saveDB(data) {
  return new Promise((resolve, reject) => {
    let internetSpeed = Math.floor(Math.random() * 10) + 1;
    if (internetSpeed > 4) {
      resolve("data was saved");
    } else {
      reject("weak connection");
    }
  });
}

// Promise Chaining
// saveDB("apna college");
saveDB("apna college")
  .then((result) => {
    console.log("data 1: promise was resolved "+result);
    return saveDB("helloworld");
  })
  .then((result)=>{
    console.log("data 2: promise was resolved "+result);
    return saveDB('prajwal');
  })
  .then((result)=>{
    console.log("data 3: promise was resolved "+result);
  })
  .catch((result) => {
    console.log("promise was rejected s"+result);
  });
