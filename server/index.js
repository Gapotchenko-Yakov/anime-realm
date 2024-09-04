const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const helmet = require("helmet");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const http = require("http");
const { Server } = require("socket.io");

const PORT = 8080;

const app = express();

// Main middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(
  cors({
    origin: "http://localhost:5173",
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
app.use(express.static("public"));

// WebSocket with Socket.IO
const httpServer = http.createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
    credentials: true,
  },
});

const chatNamespace = io.of("/chat");

const rooms = ["general", "room1", "room2", "room3"];

io.on("connection", (socket) => {
  console.log(`User connected to /chat: ${socket.id}`);

  socket.on("getRooms", () => {
    // const rooms = Array.from(io.sockets.adapter.rooms.keys());
    socket.emit("roomsList", rooms);
  });

  socket.on("joinRoom", (room) => {
    if (rooms.includes(room)) {
      socket.join(room);
      socket.emit("message", `You joined ${room}`);
      socket.to(room).emit("message", `User ${socket.id} joined ${room}`);
    } else {
      socket.emit("message", "Room not found");
    }
  });

  socket.on("message", (room, message) => {
    console.log("🚀 ~ socket.on ~ message:", message);

    if (rooms.includes(room)) {
      socket.to(room).emit("message", room, message);
    }
  });

  socket.on("disconnect", () => {
    console.log(`User disconnected from /chat: ${socket.id}`);
  });
});

httpServer.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
