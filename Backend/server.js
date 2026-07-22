const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");

const app = express();

app.use(cors());

const server = http.createServer(app);

const io = new Server(server, {
    cors: {
        origin: "http://localhost:5173",
        methods: ["GET", "POST"]
    }
});

io.on("connection", (socket) => {
    console.log("Connected:", socket.id);

    socket.on("send_message", (data) => {
        console.log("Received:", data);

        io.emit("receive_message", data);
    });

    socket.on("disconnect", () => {
        console.log("Disconnected");
    });
});

server.listen(5000, () => {
    console.log("Server Running on Port 5000");
});
