let name = process.argv;

for (let i = 2; i < name.length; i++) {
  console.log("Hello to ", name[i]);
}

const someValue = require("./math");

console.log(someValue.sum(2, 5));

const info = require("./Module_Export");

console.log(info);


