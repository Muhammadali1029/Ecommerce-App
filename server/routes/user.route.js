const router = require("express").Router();

router.get("/get_users", (req, res) => {
    res.send("All users retrieved");
})

module.exports = router;