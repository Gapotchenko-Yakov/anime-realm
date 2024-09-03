const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const helmet = require("helmet");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const http = require("http");
const { Server } = require("socket.io");

const app = express();

// Main middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(cors());
app.use(helmet());
app.use(cookieParser());

// Session setup
app.use(
  session({
    secret: "your-secret-key",
    resave: false,
    saveUninitialized: true,
  })
);

// Serve static files
app.use(express.static("public"));

// WebSocket with Socket.IO
const httpServer = http.createServer(app);
const io = new Server(httpServer);

const rooms = ["room1", "room2", "room3"];

chatNamespace.on("connection", (socket) => {
  console.log(`User connected to /chat: ${socket.id}`);

  socket.emit("roomList", rooms);

  socket.on("joinRoom", (room) => {
    if (rooms.includes(room)) {
      socket.join(room);
      socket.emit("message", `You joined ${room}`);
      socket.to(room).emit("message", `User ${socket.id} joined ${room}`);
    } else {
      socket.emit("message", "Room not found");
    }
  });

  socket.on("message", (room, msg) => {
    if (rooms.includes(room)) {
      chatNamespace.to(room).emit("message", msg);
    }
  });

  socket.on("disconnect", () => {
    console.log(`User disconnected from /chat: ${socket.id}`);
  });
});

httpServer.listen(3000, () => {
  console.log("Server is running on port 3000");
});
