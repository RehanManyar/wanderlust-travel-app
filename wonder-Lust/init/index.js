const { data } = require("./data.js");
const Listing = require("../models/listing.js");

const Data = async () => {
    try {
        await Listing.deleteMany({});
        await Listing.insertMany(data);

        console.log("Data is saved");
    } catch (err) {
        console.log("Error saving data:", err);
    }
};

module.exports = Data;