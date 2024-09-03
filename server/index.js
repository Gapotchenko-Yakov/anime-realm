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

io.on("connection", (socket) => {
  console.log("A user connected");

  socket.on("disconnect", () => {
    console.log("A user disconnected");
  });
});

httpServer.listen(3000, () => {
  console.log("Server is running on port 3000");
});
