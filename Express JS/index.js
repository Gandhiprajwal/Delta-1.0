const express = require("express");
const app = express();

console.log(app);

let port = 3000;

app.listen(port,()=>{
    console.log(`app listening at port ${port}`);
});

// app.use((req,res)=>{
//     console.log("reques accepted!");
//     res.send({
//         name: "apple",
//         color: "red" 
//     });
// });

app.get("/",(req,res)=>{
    res.send("you are on a root path");
});

// app.get("/home",(req,res)=>{
//     res.send("you have contacted to home path");
// });

// app.get("/about",(req,res)=>{
//     res.send("you have contacted to about path");
// });

// app.get("/apple",(req,res)=>{
//     console.log("reques accepted!");
//     res.send({
//         name: "apple",
//         color: "red" 
//     });
// });

app.get("/:username/:id",(req,res)=>{
    let {username,id} = req.params;
    res.send(`Welcome to the @${username}`);
});

// app.get("/:username",(req,res)=>{
//     let {username} = req.params;
//     res.send(`Welcome to the @${username}`);
// });
 
// Query Selector  like google search
app.get("/search",(req,res)=>{
    // console.log(req.query);
    let {q} = req.query;
    res.send(`Search result: ${q}`);
});