const express = require("express");
const methodOverride = require('method-override');
const app = express();

// override with POST having ?_method=DELETE
app.use(methodOverride('_method'))

const port = 8080;
const path = require("path");

const { v4: uuidv4 } = require('uuid');
// uuidv4(); // ⇨ '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed'

app.use(express.urlencoded({extended: true})); 
app.use(express.json());
app.set("view engine","ejs");   // locally search views folder
app.set("views",path.join(__dirname,"/views"));        // globally search means we can run server from the parent folder the views folder can be search by using path.join()

app.use(express.static(path.join(__dirname,"public")));

let posts = [
    {
        id: uuidv4(),
        username: "apnacollege",
        content: "I love coding!"
    },
    {
        id: uuidv4(),
        username: "prajwalgandhi",
        content: "Hard work is important to achieve success"
    },
    {
        id: uuidv4(),
        username: "rahulkumar",
        content: "I got selected for my first internship"
    }
];



app.get("/posts",(req,res)=>{
    // res.send("serving working well!!");
    res.render("index.ejs",{posts});
});

// to create a new post.
app.get("/posts/new",(req,res)=>{
    // res.send("add new Post");
    res.render("newForm.ejs",{posts});
});

// for post to get data from FORM.
app.post("/posts",(req,res)=>{
    let {username, content} = req.body;
    let id = uuidv4();
    posts.push({id,username,content});
    // console.log(req.body);
    res.redirect("/posts");
});

// adding id & use id to reterive data of particular id.
app.get("/posts/:id",(req,res)=>{
    let {id} = req.params;
    let post = posts.find((p)=> id === p.id);
    res.render("show.ejs",{post});
});

// to update the content by using patch route
app.patch("/posts/:id",(req,res)=>{
    let {id} = req.params;
    let newContent = req.body.content;
    let post = posts.find((p)=> id === p.id);
    post.content = newContent; 
    res.redirect("/posts");
    // console.log(newContent);
    // res.send("request is working");
});

// to edit the content by using edit route & we can't directly edit the content we use method-override lib. to override the function & edit the content.
app.get("/posts/:id/edit",(req,res)=>{
    let {id} = req.params;
    let post = posts.find((p)=> id === p.id);
    res.render("edit.ejs",{post});
});

// Destroy route or Delete post
app.delete("/posts/:id",(req,res)=>{
    let {id} = req.params;
    posts = posts.filter((p)=> id != p.id);
    res.redirect("/posts");
});


// for page not found!!!!!
app.get("/*",(req,res)=>{
    res.send("page not found!!");
});

// check server is started or not
app.listen(port,()=>{
    console.log(`Listening to port: ${port}`);
});