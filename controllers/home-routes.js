const router = require("express").Router();


router.get("/", (req, res) => {
    try {
        res.render("home");
    } catch (err) {
        console.log(err);
    }
});

router.get("/experience", (req, res) => {
    try {
        res.render("experience");
    } catch (err) {
        console.log(err);
    }
});

router.get("/projects", (req, res) => {
    res.render("projects");
})

module.exports = router;