const { faker } = require("@faker-js/faker");
const mysql = require("mysql2");

// connsction
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "delta_app",
  password: "admin",
});

// getRandomUser
let getRandomUser = () => {
    return [
    faker.string.uuid(),
    faker.internet.userName(),
    faker.internet.email(),
      //   avatar: faker.image.avatar(),
    faker.internet.password(),
      //   birthdate: faker.date.birthdate(),
      //   registeredAt: faker.date.past(),
    ];
  };

// simple query
let query = "insert into user (id,username,email,password) values ?";
let data = [];
for(let i=1;i<=100;i++){
    data.push(getRandomUser());
}
// for array
// let users = [
//   ["123", "123_newuser", "abc@gmail.com", "abc"],
//   ["1234", "1235_newuser", "abcd@gmail.com", "abcd"],
// ];
try {
  connection.query(query, [data], (err, results, fields) => {
    if (err) throw err;
    console.log(results); // results contains rows returned by server
    // console.log(fields); // fields contains extra meta data about results, if available
  });
} catch (err) {
  console.log(err);
}

connection.end();

// console.log(getRandomUser());
