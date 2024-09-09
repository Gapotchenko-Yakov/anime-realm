const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const helmet = require("helmet");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const http = require("http");
const { Server } = require("socket.io");
const dotenv = require("dotenv");
const path = require("path");

dotenv.config();

const PORT = process.env.PORT || 8080;
// const clientUrl =
// process.env.CLIENT_URL || "https://anime-realm-client.vercel.app";
// const clientUrl = "https://anime-realm-client.vercel.app";

const app = express();

// Main middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(
  cors({
    origin: "https://anime-realm-client.vercel.app",
    methods: ["GET", "POST"],
    credentials: true,
  })
);
app.use(helmet());
app.use(cookieParser());

// Session setup
app.use(
  session({
    secret: "secret-key",
    resave: false,
    saveUninitialized: true,
  })
);

// Serve static files
// app.use(express.static("public"));

app.use(express.static(path.join(__dirname, "../client/dist")));

app.get("/", (req, res) => {
  res.json("Hello");
});

// WebSocket with Socket.IO
const httpServer = http.createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: "https://anime-realm-client.vercel.app",
    methods: ["GET", "POST"],
    credentials: true,
  },
});

const rooms = ["general", "room1", "room2", "room3"];
const messagesByRoom = {
  general: [],
  room1: [],
  room2: [],
  room3: [],
};

io.on("connection", (socket) => {
  console.log(`User connected to /chat: ${socket.id}`);

  socket.on("getRooms", () => {
    // const rooms = Array.from(io.sockets.adapter.rooms.keys());
    socket.emit("roomsList", rooms);
  });

  socket.on("joinRoom", (room) => {
    if (rooms.includes(room)) {
      socket.join(room);
      socket.emit("initialMessages", messagesByRoom[room]);
      socket.emit("message", `You joined ${room}`);
      socket.to(room).emit("message", `User ${socket.id} joined ${room}`);
    } else {
      socket.emit("message", "Room not found");
    }
  });

  socket.on("message", (room, message) => {
    if (rooms.includes(room)) {
      messagesByRoom[room].push(message);
      io.to(room).emit("message", room, message);
    }
  });

  socket.on("disconnect", () => {
    console.log(`User disconnected from /chat: ${socket.id}`);
  });
});

httpServer.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
