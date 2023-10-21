// Templateing

const exprees = require("express");
const app = exprees();
const path = require("path");

const port = 8080;

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"));

app.get("/",(req,res)=>{
    res.render("home");
});

app.listen(port,()=>{
    console.log(`Listening on port ${port}`);
}); 

// Interpolation Syntax
// EJS Tags

// Passing data EJS
app.get("/rollDice",(req,res)=>{
    let num = Math.floor(Math.random()*6+1);
    res.render("rollDice.ejs",{diceVal: num});
});

// Instagram EJS
// app.get("/ig/:username",(req,res)=>{
//     const followers = ["adam","prajwal","keshav","manish"];
//     const instaData = require("./data.json");
//     console.log(instaData);
//     let {username} = req.params;
//     res.render("instagram.ejs",{username, followers});
// });

// Conditional Statement
// <% %> tag

// Instagram EJS by json file
app.get("/ig/:username",(req,res)=>{
    let {username} = req.params;
    const instaData = require("./data.json");
    const data = instaData[username];
    console.log(data);
    res.render("instagram_EJS.ejs",{data,username});
});