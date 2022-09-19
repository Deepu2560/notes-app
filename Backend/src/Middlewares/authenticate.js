// jwtwebtoken to check asigned token of user for header
const jwt = require("jsonwebtoken");

// verify assigned user for that token function
// In this function too jsonwebtoken takes an key to get user details.
const verifyToken = (token) => {
  return new Promise((resolve, reject) => {
    jwt.verify(token, `${process.env.JWT_KEY}`, (error, user) => {
      if (error) return reject(error);

      resolve(user);
    });
  });
};

// main authenticate function it take req.header.authentication and verify token and return user
module.exports = async (req, res, next) => {
  // checking is header have token or not
  if (!req.headers.authorization)
    return res
      .status(400)
      .send({ error: true, message: "Token not provided or Invalid" });

  // getting token
  const receivedToken = req.headers.authorization.split(" ");

  // Checking if the token contain Bearer in it or not
  if (receivedToken[0] != "Bearer")
    return res
      .status(400)
      .send({ error: true, message: "Token not provided or Invalid" });

  // Now this is the main token
  const token = receivedToken[1];

  // defing user variable to user data.
  let user;

  try {
    // verifing user token
    user = await verifyToken(token);
  } catch (error) {
    // checking error
    console.log("Athenticaiton Error:", error);
    return res
      .send(400)
      .send({ error: true, message: `Athenticaiton Error: ${error.message}` });
  }

  // checking if user exist or not
  if (!user.user) {
    return res.status(404).send({ error: true, message: "User not found" });
  }

  // token is valid. user retrieved from the token in the request object
  req.user = user.user;

  // next for end middleware
  return next();
};
