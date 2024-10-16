const http = require("http");
const express = require("express");
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);

app.use(express.static("public"));
const io = new Server(server);

// Socket.io
io.on("connection", (socket) => {
  // console.log('User connected',socket.id);

  socket.on("user-message", (message) => {
    // console.log("A new user message", message);
    io.emit("message", message);
  });
});

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

server.listen(3000, () => {
  console.log("Server is running on port 3000");
});
