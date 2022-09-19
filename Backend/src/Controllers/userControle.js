// importing express liberary
const express = require("express");

// router for functionality for routes
const router = express.Router();

// importing register and login functions
const { register, login } = require("./authControl");

// importing authentication middleware
const Authenticate = require("../Middlewares/authenticate");

// Getting user details functionality for /auth/user/detials route
// to get user details a token is required
router.get("/user/details", Authenticate, (req, res) => {
  try {
    const user = req.user;

    if (!user)
      return res.status(404).send({ error: true, message: "User not found" });

    console.log(`==> Getting user details for ${user.email}`);

    return res
      .status(201)
      .send({ error: false, user, message: "Got user detail successfully" });
  } catch (error) {
    console.log(
      "=>> Server error while getting details of user. ERROR:",
      error.message,
    );
    return res.status(502).send({
      error: true,
      token: "",
      message: `=>> Server error while getting detials of user. ERROR: ${error.message}`,
    });
  }
});

// login route and usin login function for this route
router.post("/register", register);

// register route and using register function for this route
router.post("/login", login);

// exporting router
module.exports = router;
