// importing jsonwebtoken liberary to assigning token for user
const jwt = require("jsonwebtoken");

// importing user model
const UserModel = require("../Models/userModel");

// newToken for assigning new token to user
// JWT key is used to assign token to user and when required user detail by token this key is required
// So, this is important hide this jsonwebtoken key
const newToken = (user) => {
  return jwt.sign({ user }, `${process.env.JWT_KEY}`);
};

// register function for /auth/register route and registering new user to database
const register = async (req, res) => {
  try {
    let user = await UserModel.findOne({ email: req.body.email });

    if (user)
      return res.status(400).send({
        error: true,
        token: "",
        message: "Please check email and password",
      });

    user = await UserModel.create(req.body);

    const token = newToken(user);

    console.log(`==> ${req.email} is registered.`);

    return res
      .status(201)
      .send({ error: true, token, message: "User Registered successfully" });
  } catch (error) {
    console.log(
      "=>> Server error while registering new user. ERROR:",
      error.message,
    );
    return res.status(502).send({
      error: true,
      token: "",
      message: `=>> Server error while registering new user. ERROR: ${error.message}`,
    });
  }
};

// login function for /auth/login route and checking user credential for login
const login = async (req, res) => {
  try {
    const user = await UserModel.findOne({ email: req.body.email });

    if (!user)
      return res.status(404).send({
        error: true,
        token: "",
        message: "Please check email and password",
      });

    let match = user.checkPassword(req.body.password);

    if (!match)
      return res.status(404).send({
        error: true,
        token: "",
        message: "Please check email and password",
      });

    const token = newToken(user);

    console.log(`==> ${req.body.email} is logedin`);

    res
      .status(200)
      .send({ error: false, token, message: "User successfully logedin" });
  } catch (error) {
    console.log(
      "=>> Server error while login proccess of user. ERROR:",
      error.message,
    );
    return res.status(502).send({
      error: true,
      token: "",
      message: `=>> Server error while login proccess of user. ERROR: ${error.message}`,
    });
  }
};

// exporting both register and login function
module.exports = { register, login };
