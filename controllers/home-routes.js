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
});

router.get("/about-me", (req, res) => {
    res.render("about-me");
});

module.exports = router;