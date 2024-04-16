const express = require("express");
const dbConnect = require("./dbConnect/dbConnection");
const app = express();
const dotenv = require("dotenv");

//Load environment variables from .env file
dotenv.config;

//listening to the server
app.listen(3333, () => {
    console.log(`Server is running on port ${3333}`);
    dbConnect();
});