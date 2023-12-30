const mongoose = require("mongoose");
const {Schema, model} = mongoose;

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
    addresses: [
        {
            _id: false,
            location: String,
            city: String,
        }
    ]
});

const User = model("User",userSchema);

const addUsers = async() =>{
    let user1 = new User({
        username: "sherlockholmes",
        addresses:[{
            location: "221B Baker Street",
            city: "London"
        }]
    });
    user1.addresses.push({location:"P32 WallStreet", ciyt: "London"});
    let result = await user1.save();
    console.log(result);
};

addUsers();