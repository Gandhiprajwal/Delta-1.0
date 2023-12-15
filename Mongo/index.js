const mongoose = require("mongoose");

main()
  .then((res) => {
    console.log("Connection Established!");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/test");
}

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number,
});

const User = mongoose.model("User", userSchema);
// const Employee = mongoose.model("Employee",userSchema);

// Insert into mongoose (Single insertion)
// const user3 = new User({
//     name:"Keshav",
//     email: "keshav@yahoo.com",
//     age: 20
// });
// user3.save().then((res)=>{
//     console.log(res);
// })
// .catch((err)=>console.log(err));

// InsertMany method
// User.insertMany([
//   { name: "Anivesh", email: "anivesh@gmail.com", age: 20 },
//   {
//     name: "Aman",
//     email: "aman@gmail.com",
//     age: 18,
//   },
//   {
//     name: "Saurabh",
//     email: "saurabh@gmail.com",
//     age: 18,
//   },
// ]).then((res) => console.log(res));

// Find in Mongoose
// User.find({})
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// With Operators
// User.findOne({age: {$lte:18}})
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// With ID Method : findById()
// User.findById("657c359267cb6d701fca374c")
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// Update in Mongoose
// User.updateOne({ name: "Aman" }, { age: 49 })
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// FINDANDUPDATE
// User.findByIdAndUpdate('657c359267cb6d701fca374c', { age: 20 },{new: true})
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// Delete in Mongoose
User.findOneAndDelete({
  name:"Adam"
}).then((res)=>{
  console.log(res);
})
.catch((err)=>console.log(err));
