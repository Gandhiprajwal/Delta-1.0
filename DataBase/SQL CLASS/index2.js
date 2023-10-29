// for REST Functionality
// Path: DataBase/SQL%20CLASS/index3.js

// require the libraries (import)
const { faker, tr, th } = require("@faker-js/faker");
const mysql = require("mysql2");
const express = require("express");
const app = express();
const path = require("path");
const methodOverride = require("method-override");
const { v4: uuidv4 } = require("uuid");

app.use(methodOverride("_method"));
app.use(express.urlencoded({ extended: true }));

const port = 8080;

// views folder connect globally & locally
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

// connection
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "delta_app",
  password: "admin",
});

// Server starts
app.listen(port, (req, res) => {
  console.log(`Server is running at ${port}`);
});

// check number of data
app.get("/", (req, res) => {
  let query = "select count(*) from user";
  // res.send("Welcome to home page");
  try {
    connection.query(query, (err, results, fields) => {
      if (err) throw err;
      let count = results[0]["count(*)"];
      res.render("home.ejs", { count });
    });
  } catch (err) {
    // console.log(err);
    res.send("Some error in database");
  }
});

// show data route
app.get("/user", (req, res) => {
  let query = "select * from user";
  try {
    connection.query(query, (err, results, fields) => {
      if (err) throw err;
      let data = results;
      // console.log(results);
      res.render("users.ejs", { data });
    });
  } catch (err) {
    // console.log(err);
    res.send("Some error in database");
  }
});

// edit route
app.get("/user/:id/edit", (req, res) => {
  let { id } = req.params;
  let query = `select * from user where id='${id}'`;
  try {
    connection.query(query, (err, results) => {
      if (err) throw err;
      let user = results[0];
      // console.log(user.email);
      res.render("edit.ejs", { user });
    });
  } catch (err) {
    res.send("Some error in database");
  }
});

// update route
app.patch("/user/:id", (req, res) => {
  let { id } = req.params;
  let { password: formPass, username: newUsername } = req.body;
  let query = `select * from user where id='${id}'`;
  try {
    connection.query(query, (err, results) => {
      if (err) throw err;
      let user = results[0];
      if (formPass != user.password) {
        res.send("WRONG PASSWORD!");
      } else {
        let query2 = `update user set username='${newUsername}' where id='${id}'`;
        connection.query(query2, (err, result) => {
          if (err) throw err;
          res.redirect("/user");
        });
      }
      // res.render("edit.ejs", { user });
    });
  } catch (err) {
    res.send("Some error in database");
  }
});

// add new data
app.get("/user/new", (req, res) => {
  res.render("newUser.ejs");
});

// push data into database
app.post("/user", (req, res) => {
  let {
    username: newUsername,
    email: newEmail,
    password: newPassword,
  } = req.body;
  let query = `insert into user (id,username,email,password) values ?`;
  let data = [[uuidv4(), newUsername, newEmail, newPassword]];
  console.log(data);
  try {
    connection.query(query, [data], (err, result) => {
      // if (err) throw err;
      // console.log(result);
      res.redirect("/user");
    });
  } catch (err) {
    res.send("There is an ERROR!");
  }
});

// to delete
app.get("/user/:id/delete", (req, res) => {
  let { id } = req.params;
  let query = `select * from user where id='${id}'`;
  try {
    connection.query(query, (err, results, fields) => {
      if (err) throw err;
      let data = results[0];
      // console.log(results);
      res.render("delete.ejs", { data });
    });
  } catch (err) {
    // console.log(err);
    res.send("Some error in database");
  }
});
// Destroy route or Delete post
app.delete("/user/:id", (req, res) => {
  let { id } = req.params;
  let { email: getEmail, password: getPassword } = req.body;
  let query = `select * from user where email='${getEmail}'OR password='${getPassword}'`;
  try {
    connection.query(query, (err, result) => {
      if (err) throw err;
      let user = result[0];
      // console.log(user.email);
      // console.log(user.password);
      if(user.email!=getEmail || user.password!=getPassword){
        res.send("INCORRECT INFORMATION!!");
      }
      else{
        let query2 = `delete from user where email='${getEmail}'AND password='${getPassword}'`
        connection.query(query2,(err,result)=>{
          if(err) throw err;
          res.redirect("/user");
        });
      }
    });
  } catch (err) {
    res.send("ERROR!!!");
  }
});
