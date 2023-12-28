const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const Chat = require("./models/chat.js");
const methodOverride = require("method-override");
const ExpressError = require("./ExpressError");
const { nextTick } = require("process");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

main()
  .then((res) => {
    console.log("Connection Established!");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}

// Index Route
app.get("/chats", async (req, res) => {
  let chats = await Chat.find();
  // console.log(chats);
  res.render("index.ejs", { chats });
});

// new Route
app.get("/chats/new", (req, res) => {
  res.render("new.ejs");
});

//create route
app.post("/chats", asyncWrap(async(req, res,next) => {
  let { from, to, msg } = req.body;
  let newChat = new Chat({
    from: from,
    to: to,
    msg: msg,
    created_at: new Date(),
  });
  await newChat.save();
  res.redirect("/chats");
}));

// Edit Route
app.get("/chats/:id/edit",asyncWrap(async (req, res,next) => {
  let { id } = req.params;
  let chat = await Chat.findById(id);
  // if(!chat){
  //   next(new ExpressError(500,"Chat not found"));
  // }
  res.render("edit.ejs", { chat });
}));

// wrapAsync
function asyncWrap(fn){
  return function(req,res,next){
    fn(req,res,next).catch((err)=>next(err));
  }
};

// SHow route
app.get("/chats/:id",asyncWrap (async (req, res,next) => {
  let { id } = req.params;
  let chat = await Chat.findById(id);
  if(!chat){
    next(new ExpressError(500,"Chat not found"));
  }
  res.render("edit.ejs", { chat });
}));

// Update Route
app.put("/chats/:id", asyncWrap(async(req, res) => {
  let { id } = req.params;
  let { msg: newMsg } = req.body;
  let updatedChat = await Chat.findByIdAndUpdate(
    id,
    { msg: newMsg },
    { runValidators: true,new: true }
  );
  // console.log(updatedChat);
  res.redirect("/chats");
}));

// Destry Route
app.delete("/chats/:id",asyncWrap(async (req,res)=>{
  let {id} = req.params;
  let deletedChat = await Chat.findByIdAndDelete(id);
  // console.log(deletedChat);
  res.redirect("/chats");
}));

// handle Validation error
const handleValidationError = (err)=>{
  console.log("This is a Validation Error. Please follow rules");
  console.dir(err.message);
  return err;
}


//error handler call 
app.use((err,req,res,next)=>{
  console.log(err.name);
  if(err.name ==="ValidationError"){
    err = handleValidationError(err);
  }
  next(err);
});

//then
//error handling middleware
app.use((Err,req,res,next)=>{
  let {status=500,message="Some error occured"} = Err;
  res.status(status).send(message);
})

app.get("/", (req, res) => {
  res.send("root is working");
});

app.get("*", (req, res) => {
  res.send("Error 404 page not found!!");
});

app.listen(8080, () => {
  console.log("server is listening on port 8080");
});
