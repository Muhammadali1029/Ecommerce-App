const { response } = require("express");
const User = require("../models/user.model.js");

const updateUser = async (req, res) => {
    try {
        const updatedUser = await User.findByIdAndUpdate(req.params.id, {
            $set: req.body,
        },{
            new: true,
        });
        if (!updatedUser){
            return res.status(404).json({
                message: "User not found",
            });
        };
        res.status(200).json({
            message: "User has been updated successfully",
            data: updatedUser,
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "User Update failed",
            error: error,
        });
    }
}; 

const deleteUser = async (req, res) => {
    try {
        await User.findByIdAndDelete(req.params.id);
        res.status(200).json({
            message: "User has been deleted successfully",
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "User deletion failed",
        });
    }
};

const getAdmin = async (req, res) => {
    try {
        const admin = await User.findById(req.params.id);
        if (!admin){
            return res.status(404).json({
                message: "User cant be found",
            });
        }
        
        const {password, ...info} = admin._doc;
        res.status(200).json({
            message: "User has been found successfully",
            data: info,
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "User query failed",
            error: error,
        });
    }
};

const getAllUsers = async (req, res) => {
    const query = req.query.latest;
    try {
        const users = query ? await User.find().sort({_id: -1}).limit(3) : await User.find();
        // Added a check for empty users array
        if (!users || users.length === 0) {
            return res.status(404).json({
                message: "Users not found",
            });
        }
        
        // Using map to iterate over users array and remove passwords from each user object
        const data = users.map(user => {
            // Destructuring password and rest of the properties from user._doc
            const { password, ...info } = user._doc;
            return info; // Returning only the info object without password
        });

        res.status(200).json({
            message: "All Users have been found successfully",
            data: data,
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "User query failed",
            error: error.message, // Changed to only return error message
        });
    }
};

const getUserStats = async (req,res) => {
    try {
        const date = new Date();
        const lastYear = new Date(date.setFullYear(date.getFullYear() - 1));

        const userStats = await User.aggregate([
            {
                $match: { createdAt: { $gte: lastYear } },
            },
            {
                $project: {
                    month: {$month: "$createdAt"},

                },
            },
            {
                $group: {
                    _id: "$month",
                    total: { $sum : 1 },
                }
            }
        ]);
        res.status(200).json({
            message: "User Data retreived successfully",
            userStats,
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "User Statistics aquisition error",
            error: error.message,
        });
    }
}

module.exports = { 
    updateUser,
    deleteUser,
    getAdmin,
    getAllUsers,
    getUserStats,
 };