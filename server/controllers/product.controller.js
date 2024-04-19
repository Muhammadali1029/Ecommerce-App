const Product = require("../models/product.model.js");

const createProduct = async (req, res) => {
    try {  
        const newProduct = new Product({
            ...req.body,
            image: req.file.path,
        });
        await newProduct.save();
        res.status(200).json({
            message: "Product created successfully",
            newProduct,
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "An Error occured while creating the product ",
            error: error.message,
        });
    }
};

const updateProduct = async (req, res) => {
    try {
        const updatedProduct = await Product.findByIdAndUpdate(
        req.params.id,
        {
            $set: req.body,
        },
        {
            new: true,     
        });
        res.status(200).json({
            message: "Product has been updated successfully",
            updatedProduct,
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "An error occured updating product",
            error: error.message,
        })
    }
};

const deleteProduct = async (req, res) => {
    try {
        await Product.findByIdAndDelete(req.params.id);
        res.status(200).json({
            message: "Product has been deleted successfully",
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "An error occured deleting product",
            error: error.message,
        })
    }
};

const getProduct = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        res.status(200).json({
            product,
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            error: error.message,
        });
    }
};

const getAllProducts = async (req, res) => {
    try {
       const qLatest = req.query.latest;
       const qCategory = req.query.category;

       let product;

       if (qLatest){
        product = await Product.find().sort({ createdAt: -1 }).limit(3);
       } else if (qCategory) {
        product = await Product.find({
            categories: {
                $in: [qCategory],
            }, 
        });
       } else {
        product = await Product.find();
       }
       
       res.status(200).json({
        product,
       });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            error: error.message,
        });
    }
};

module.exports = {
    createProduct,
    updateProduct,
    deleteProduct,
    getProduct,
    getAllProducts,
};