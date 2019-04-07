const express = require("express");
const router = express.Router();

router.get("/signinhere", (req,res) => res.send("Welcome!"))

module.exports = router;