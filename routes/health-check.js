const router = require("express").Router();

//Health check

// Route used to confirm service is running
router.route("/")
    .get((req, res) => {
        console.log("...in the healthcheck route");
        res.send("Email service is running");
    });


module.exports = router;