const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const { signUpUser, logInUser } = require("../controllers/userController");

router.post("/registration", signUpUser);
router.post("/login", logInUser);

module.exports = router;
