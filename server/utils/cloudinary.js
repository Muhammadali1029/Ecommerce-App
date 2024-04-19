const cloudinary = require("cloudinary").v2;
const multer = require("multer");
const { CloudinaryStorage } = require("multer-storage-cloudinary");

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_API_KEY,
    api_secret: process.env.CLOUD_API_SECRET,
});

const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params:{
        folder:"wholesaled-ecommerce-app",
        resource_type: "image",
        public_id: (req, file) => "computed-filename-using-request",
    },
});

const parser = multer({ storage: storage });

module.exports = {
    cloudinary,
    parser,
};