const express = require("express");
const app = express();
const ExpressError = require("./ExpressError");

// middleware -> response send

// app.use((req,res,next)=>{
//     console.log("Hi, I am 1 middleware");
//     next();
// });

// app.use((req,res,next)=>{
//     let{q} = req.query;
//     console.log(q);
//     console.log("Hi, I am 2 middleware");
//     next();
// });

// // Utility Middleware --> morgan
// app.use((req,res,next)=>{
//     req.time = new Date(Date.now()).toString();
//     console.log(req.method, req.hostname, req.path,req.time);
//     next();
// });

// Exploring app.use()
// app.use("/random",(req,res,next)=>{
//     console.log("I am only for random");
//     next();
// });

const checkToken = (req,res, next)=>{
    let {token} = req.query;
    if(token==="giveaccess"){
        next();
    }
    throw new ExpressError (401,"ACCESS DENIED!");
};

// error generator
app.get("/wrong",(req,res)=>{
    abcd = abcd;
});

app.get("/api",checkToken,(req,res)=>{
    res.send("Data");
});

// admin route
app.get("/admin",(req,res)=>{
    // let {q} = req.query;
    // if(q==="prajwal"){
    //     res.redirect("/");
    // }
    throw new ExpressError(403,"Access is Forbidden");
})

app.use((err,req,res,next)=>{
    let{status = 500,message ="some error occured"} = err;
    res.status(status).send(message); 
    // res.send(err);
});

app.use((err,req,res,next)=>{
    console.log("err 2");
    next(err);
})



// // 404
// app.use((req,res,next)=>{
//     res.send("Page not found!");
//     next();
// });

app.get("/",(req,res)=>{
    res.send("Hi, I am root");
});

app.get("/random",(req,res)=>{
    res.send("This is a random apge");
});

// // 404
app.use((req,res)=>{
    res.send("Page not found!");
});

// // Utility Middleware --> will not work
// app.use((req,res,next)=>{
//     req.time = new Date(Date.now()).toString();
//     console.log(req.method, req.hostname, req.path,req.time);
//     next();
// });

app.listen(8080,(req,res)=>{
    console.log("Connection established");
})