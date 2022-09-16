// importing express liberary
const express = require("express");

// router for functionality for routes
const router = express.Router();

// importing register and login functions
const { register, login } = require("./authControl");

// login route and usin login function for this route
router.post("/register", register);

// register route and using register function for this route
router.post("/login", login);

// exporting router
module.exports = router;
