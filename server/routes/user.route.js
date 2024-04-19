const User = require("../models/user.model.js");
const { verifyToken, verifyAdmin } = require("../middleware/verifyToken.js");
const { updateUser, deleteUser, getAdmin, getAllUsers, getUserStats } = require("../controllers/user.controller.js");

const router = require("express").Router();

router.get("/get_users", (req, res) => {
    res.send("All users retrieved");
})

router.put("/update/:id", verifyToken, updateUser);
router.delete("/delete/:id", verifyAdmin, deleteUser);
router.get("/getAdmin/:id", verifyAdmin, getAdmin);
router.get("/", verifyToken, getAllUsers);
router.get("/stats", verifyAdmin, getUserStats);

module.exports = router;