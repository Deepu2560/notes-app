// importing required liberaries
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

// user schema
const userSchema = new mongoose.Schema(
  {
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    email: { type: String, required: true },
    username: { type: String, required: true, index: { unique: true } },
    password: { type: String, required: true },
  },
  {
    versionKey: false,
    timestamps: true,
  },
);

// encrypting user password
// after this process encrypted password will be stored in database
userSchema.pre("save", function (next) {
  if (!this.isModified("password")) return next();

  var hash = bcrypt.hashSync(this.password, 8);
  this.password = hash;
  return next();
});

// checking user password while login
userSchema.methods.checkPassword = function (password) {
  return bcrypt.compareSync(password, this.password);
};

// exporting user model
module.exports = mongoose.model("users", userSchema);
