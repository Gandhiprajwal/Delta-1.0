const express = require("express");
const app = express();
const session = require("express-session");
const flash = require("connect-flash");
const path = require("path");

const sessionOption = {
  secret: "mysupersecretstring",
  resave: false,
  saveUninitialized: true,
};

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(session(sessionOption));
app.use(flash());

app.use((req,res,next)=>{
  res.locals.message = req.flash("success");
  res.locals.errMessage = req.flash("error");
  next();
})

app.get("/register", (req, res) => {
  let { name = "anonymous" } = req.query;
  // console.log(req.session);
  req.session.name = name;
  // res.send(name);
  if (req.session.name === "anonymous") {
    req.flash("error", "user not registered successfully");
  } else {
    req.flash("success", "user registered successfully");
  }
  res.redirect("/hello");
});

app.get("/hello", (req, res) => {
  res.render("page.ejs", { name: req.session.name });
});

// app.get("/reqcount", (req, res) => {
//   if (req.session.count) {
//     req.session.count++;
//   } else {
//     req.session.count = 1;
//   }
//   res.send(`You sent a request ${req.session.count} times`);
// });

// app.get("/test",(req,res)=>{
//     res.send("test successful!");
// });

app.listen(3000);
