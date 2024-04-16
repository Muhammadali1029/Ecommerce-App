const express = require("express");
const dbConnect = require("./dbConnect/dbConnection");
const app = express();
const routes = require("./routes/routes.js");


app.use("/", routes)
app.get("/", (req, res) => {
    res.send("Backend is working");
})

//listening to the server
app.listen(3333, () => {
    console.log(`Server is running on port ${3333}`);
    dbConnect();
});