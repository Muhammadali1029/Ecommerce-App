const express = require("express");
const dbConnect = require("./dbConnect/dbConnection");
const cors = require("cors"); // Import cors

const app = express();
const routes = require("./routes/routes.js");

app.use(cors()); // Use cors middleware
app.use(express.json());
app.use("/", routes);

app.get("/", (req, res) => {
    res.send("Backend is working");
});

// Listening to the server
app.listen(3333, () => {
    console.log(`Server is running on port ${3333}`);
    dbConnect();
});
