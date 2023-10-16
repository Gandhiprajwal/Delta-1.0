let name = process.argv;

for (let i = 2; i < name.length; i++) {
  console.log("Hello to ", name[i]);
}

import { sum } from "./math";

console.log(sum(2, 5));

// const info = require("./Module_Export");

// console.log(info);

// const figlet = require("figlet");

// figlet("Prajwal Gandhi", function (err, data) {
//   if (err) {
//     console.log("Something went wrong...");
//     console.dir(err);
//     return;
//   }
//   console.log(data);
// });
