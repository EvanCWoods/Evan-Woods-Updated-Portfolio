const router = require("express").Router();

router.use("/", (req, res) => {
    res.send("Hello");
});

module.exports = router;