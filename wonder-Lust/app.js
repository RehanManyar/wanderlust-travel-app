const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const methodOverride = require("method-override");

const Listing = require("./models/listing.js");
const Data = require("./init/index.js");

const app = express();

const MONGO_URL = "mongodb://127.0.0.1:27017/wonderLust";

// =====================
// View Engine
// =====================
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// =====================
// Middleware
// =====================
app.use(express.urlencoded({ extended: true }));

// Method Override
app.use(methodOverride("_method"));

// =====================
// Connect to MongoDB
// =====================
async function main() {
    await mongoose.connect(MONGO_URL);
    console.log("MongoDB connected");
}

// =====================
// Root Route
// =====================
app.get("/", (req, res) => {
    res.send("Hi, I am root");
});

// =====================
// Test Route - Seed Data
// =====================
app.get("/test", async (req, res) => {
    try {
        await Data();
        res.send("Data saved successfully!");
    } catch (err) {
        console.log(err);
        res.status(500).send("Error saving data");
    }
});

// =====================
// Index Route
// =====================
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

// =====================
// New Listing Form
// =====================
app.get("/listing/new", (req, res) => {
    res.render("listing/new.ejs");
});

// =====================
// Create Listing
// =====================
app.post("/listing/new", async (req, res) => {
    try {
        const newListing = new Listing(req.body.listing);

        await newListing.save();

        console.log("Listing saved successfully");

        res.redirect("/listing");
    } catch (err) {
        console.log(err);
        res.status(500).send("Error creating listing");
    }
});

// =====================
// Show Listing
// =====================
app.get("/listing/:id", async (req, res) => {
    try {
        const { id } = req.params;

        const listing = await Listing.findById(id);

        res.render("listing/show.ejs", {
            listing: listing
        });
    } catch (err) {
        console.log(err);
        res.status(500).send("Error fetching listing");
    }
});

// =====================
// Edit Form
// =====================
app.get("/listing/:id/edit", async (req, res) => {
    try {
        const { id } = req.params;

        const listing = await Listing.findById(id);

        res.render("listing/edit.ejs", {
            listing: listing
        });
    } catch (err) {
        console.log(err);
        res.status(500).send("Error loading edit page");
    }
});

// =====================
// Update Listing
// =====================
app.put("/listing/:id", async (req, res) => {
    try {
        const { id } = req.params;

        await Listing.findByIdAndUpdate(
            id,
            { ...req.body.listing },
            { runValidators: true }
        );

        console.log("Listing updated successfully");

        res.redirect(`/listing/${id}`);
    } catch (err) {
        console.log(err);
        res.status(500).send("Error updating listing");
    }
});
// =====================
// Delete Listing
// =====================
app.delete("/listing/:id", async (req, res) => {
    try {
        const { id } = req.params;

        await Listing.findByIdAndDelete(id);

        console.log("Listing deleted successfully");

        res.redirect("/listing");
    } catch (err) {
        console.log(err);
        res.status(500).send("Error deleting listing");
    }
});

// =====================
// Start Server
// =====================
main()
    .then(() => {
        app.listen(8080, () => {
            console.log("App is listening on port 8080");
        });
    })
    .catch((err) => {
        console.log("MongoDB connection error:", err);
    });
