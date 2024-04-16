 //importing mongoose package\
 const mongoose = require("mongoose");
 const dotenv = require("dotenv");

 //Load environment variables from .env file
 dotenv.config;

 const dbConnect = async () => {
    try {
        await mongoose.connect(process.env.DB_URL || "mongodb+srv://ali:ali123@atlascluster.g2vtiqo.mongodb.net/");
        console.log("Database has been connected successfully");
        console.log("ENV output try " + process.env.DB_URL);
    } catch (error) {
        console.log(error);
        console.log("ENV output catch " + process.env.DB_URL);
    }
 };

 module.exports = dbConnect;