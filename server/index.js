const express = require("express");
const http = require("http");
const socketIo = require("socket.io");
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const helmet = require("helmet");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const { Server } = require("socket.io");

const app = express();

// env var
const PORT = 8080,
  SECRET_KEY = "SECRET_1234";

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(cors());
app.use(helmet());
app.use(cookieParser());

// Настройка сессий
app.use(
  session({
    secret: SECRET_KEY,
    resave: false,
    saveUninitialized: true,
  })
);

// Раздача статических файлов
app.use(express.static("public"));

const server = http.createServer(app);

const io = socketIo(server);

server.listen(PORT, () => {
  console.log("Server is running on port 3000");
});
