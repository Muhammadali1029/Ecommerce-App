const router = require("express").Router();
const User = require("../models/user.model.js");
const bcrypt = require("bcrypt");

router.post("/register", async(req, res) => {
    try {
        const hashedPassword = bcrypt.hashSync(req.body.password, 10)
        newUser = new User ({
            username: req.body.username,
            email: req.body.email,
            password: hashedPassword, 
        });

        await newUser.save();

        const {password, ...info} = newUser._doc;
        res.status(200).json({
            message: "User created Successfull",
            data: info,
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "User creation failed",
            eroor: error,
        });
    }
});


router.post("/login", async (req, res) => {

    try {
        const {email, password} = req.body;

        const user = await User.findOne({ email: email });
        if (!user){
            return res.status(404).json({
                message: "Email does not exist"
            })
        }
    
        const comparePassword = await bcrypt.compare(password, user.password)
        if (!comparePassword){ 
            return res.status(404).json({
                message: "Email or password is incorrect"
            })
        }
        res.status(200).json({
            data: user,
            message: "Login Successful",
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Login Failed",
            error: error,
        });  
    }
});

module.exports = router;
