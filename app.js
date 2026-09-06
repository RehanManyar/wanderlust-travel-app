const express = require("express");
const mongoose = require("mongoose");

const app = express();

const MONGO_URL = "mongodb://127.0.0.1:27017/wonderLust";

async function main() {
    await mongoose.connect(MONGO_URL);
}

main()
    .then(() => {
        console.log("MongoDB connected");
    })
    .catch((err) => {
        console.log("MongoDB connection error:", err);
    });

app.get("/", (req, res) => {
    res.send("Hi, I am root");
});

app.listen(8080, () => {
    console.log("App is listening on port 8080");
});