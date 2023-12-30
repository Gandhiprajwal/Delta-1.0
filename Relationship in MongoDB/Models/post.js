const mongoose = require("mongoose");
const { Schema, model } = mongoose;

main()
  .then(() => {
    console.log("Connection Established!");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/relationshipDemo");
}

const userSchema = new Schema({
    username: String,
    email: String,
});

const postSchema =  new Schema({
    content: String,
    likes: Number,
    user:{
        type: Schema.Types.ObjectId,
        ref: "User"
    }
});

const User = model("User",userSchema);
const Post = model("Post",postSchema);

const addData = async()=>{
    // let user1 = new User({
    //     username: "rahul kumar",
    //     email: "rahul@gmail.com",
    // });

    // let post1 = new Post({
    //     content: "Hello World!",
    //     likes: 7
    // });

    let user = await User.findOne({username:"rahul kumar"});

    let post2 = new Post({
      content: "Bye Bye!",
      likes: 23
  });

    post2.user = user;
    
    await post2.save();
    // await post1.save();
};

addData();

