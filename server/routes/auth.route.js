const router = require("express").Router();
const User = require("../models/user.model.js");

router.post("/register", async(req, res) => {
    try {
        newUser = new User ({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password, 
        });

        await newUser.save();
        res.status(200).json({
            message: "User created Successfull",
            data: newUser,
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "User creation failed",
            eroor: error,
        });
    }
});

module.exports = router;
