 //importing mongoose package\
 const mongoose = require("mongoose");
 const dotenv = require("dotenv");

 //Load environment variables from .env file
 dotenv.config();

 const dbConnect = async () => {
    try {
        await mongoose.connect(process.env.DB_URL);
        console.log("Database has been connected successfully");
    } catch (error) {
        console.log(error);
    }
 };

 module.exports = dbConnect;