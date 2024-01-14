const express = require("express");
const app = express();
const path = require("path");
const port = process.env.PORT || 3000;

const server = app.listen(port, () =>
  console.log("Sever listening to port:" + port)
);

const socketIo = require("socket.io");
const io = socketIo(server);

app.use(express.static(path.join(__dirname, "public")));
