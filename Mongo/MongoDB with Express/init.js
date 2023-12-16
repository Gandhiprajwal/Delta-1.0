const mongoose = require("mongoose");
const Chat = require("./models/chat.js");

main()
  .then((res) => {
    console.log("Connection Established!");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}

let allChats = [
    {
        from: "Manish",
        to: "Keshav",
        msg: "Mid term ka paper bhej de",
        created_at: new Date()
    },
    {
        from: "Anivesh",
        to: "Keshav",
        msg: "Bhai tu Kb aayega",
        created_at: new Date()
    },
    {
        from: "Keshav",
        to: "Manish",
        msg: "Grp m check kr le send hua hai",
        created_at: new Date()
    },
    {
        from: "Mansish",
        to: "Keshav",
        msg: "Okkk",
        created_at: new Date()
    },
    {
        from: "Anivesh",
        to: "Prajwal",
        msg: "Call krio",
        created_at: new Date()
    },
    {
        from: "Prajwal",
        to: "Anivesh",
        msg: "Okkkkkkkkkkkkk",
        created_at: new Date()
    },
]
Chat.insertMany(allChats);
  