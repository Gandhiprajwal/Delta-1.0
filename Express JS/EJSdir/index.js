// Templateing

const exprees = require("express");
const app = exprees();
const path = require("path");
const cookieParser = require("cookie-parser");

app.use(cookieParser("secretcode"));
const port = 8080;

app.set("view engine","ejs");  // locally search views folder
app.set("views",path.join(__dirname,"/views"));      // globally search by using path.join()

app.get("/",(req,res)=>{
    res.render("home");
});


// cookie signed
app.get("/getsigned",(req,res)=>{
    res.cookie("made-in","India",{signed: true});
    res.send("signed cookie sent");
});

// verification of cookies --> that wa signed 
app.get("/verify",(req,res)=>{
    console.log(req.signedCookies);
    res.send("verfied");
})

// cookies part
app.get("/getcookies",(req,res)=>{
    res.cookie("greet","hello");
    res.cookie("made in India","Bharat");
    console.log(req.cookies);
    res.send("sent you some cookies");
});

app.get("/greet",(req,res)=>{
    let {name = "anonymous"} = req.cookies;
    res.send(`Hello, ${name}`);
})

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
    if(data == undefined){
        res.render("error"); 
    }
    else{
    // console.log(data);
    res.render("instagram_EJS.ejs",{data,username});
    }
});

// Serving Static files
// app.use(exprees.static("public"));
app.use(exprees.static(path.join(__dirname,"public/css")));
