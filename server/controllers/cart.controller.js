const Cart = require("../models/cart.model.js");

const createCart = async (req, res) => {
    try {  
        const newCart = new Cart(req.body);
        await newCart.save();
        res.status(200).json({
            message: "Cart created successfully",
            newCart,
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "An Error occured while creating the cart ",
            error: error.message,
        });
    }
};

const updateCart = async (req, res) => {
    try {
        const updatedCart = await Cart.findByIdAndUpdate(
        req.params.id,
        {
            $set: req.body,
        },
        {
            new: true,     
        });
        res.status(200).json({
            message: "Cart has been updated successfully",
            updatedCart,
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "An error occured updating cart",
            error: error.message,
        })
    }
};

const deleteCart = async (req, res) => {
    try {
        await Cart.findByIdAndDelete(req.params.id);
        res.status(200).json({
            message: "Cart has been deleted successfully",
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "An error occured deleting product",
            error: error.message,
        })
    }
};

const getCartItem = async (req, res) => {
    try {
        const cartItem = await Cart.findOne({ userId: req.params.id });
        res.status(200).json({
            cartItem,
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            error: error.message,
        });
    }
};

const getAllCartItems = async (req, res) => {
    try {
        const cartItems = await Cart.find();

       res.status(200).json({
        cartItems,
       });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            error: error.message,
        });
    }
};

module.exports = {
    createCart,
    updateCart,
    deleteCart,
    getCartItem,
    getAllCartItems,
};