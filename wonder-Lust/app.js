const express = require("express");
const mongoose = require("mongoose");
const path = require("path");

const Listing = require("./models/listing.js");
const Data = require("./init/index.js");

const app = express();

const MONGO_URL = "mongodb://127.0.0.1:27017/wonderLust";

// Views
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Connect to MongoDB
async function main() {
    await mongoose.connect(MONGO_URL);
    console.log("MongoDB connected");
}

// Root
app.get("/", (req, res) => {
    res.send("Hi, I am root");
});

// Test route - save seed data
app.get("/test", async (req, res) => {
    try {
        await Data();
        res.send("Data saved successfully!");
    } catch (err) {
        console.log(err);
        res.status(500).send("Error saving data");
    }
});

// Show all listings
app.get("/listing", async (req, res) => {
    try {
        const listings = await Listing.find({});

        res.render("listing/index.ejs", {
            listings: listings
        });

    } catch (err) {
        console.log(err);
        res.status(500).send("Error fetching listings");
    }
});

// Start app
main()
    .then(() => {
        app.listen(8080, () => {
            console.log("App is listening on port 8080");
        });
    })
    .catch((err) => {
        console.log("MongoDB connection error:", err);
    });