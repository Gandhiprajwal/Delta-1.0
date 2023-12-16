const mongoose = require("mongoose");

main()
  .then((res) => {
    console.log("Connection Established!");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/amazon");
}

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
  },
  price: {
    type: Number,
    min:[1,"Price is too low for Amazon Selling"],
  },
  category:{
    type: String,
    enum: ["Fiction","Non-Fiction"]
  },
  genre:[String]
});

const Book = mongoose.model("Book", bookSchema);

// let book1 = new Book({
//   title: "Mathematics XII",
//   author: "R.D Sharma",
//   price: 1200,
// });

// book1
//   .save()
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

let book1 = new Book({
  title: "Marvel Comics",
  author: "J.D Adams",
  price: -900,
  category: "Fiction",
  genre: ["comics","superheors","fiction"],
});

book1
  .save()
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err.errors.price.properties.message);
  });

