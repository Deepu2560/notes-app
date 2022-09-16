// importing mongoose liberary
const mongoose = require("mongoose");

// connect function to connect server to backend
// mongoose.connect functionality in used to connect our server to our database

module.exports = () => {
  return mongoose.connect(`${process.env.URL}`);
};
