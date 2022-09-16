// importing mongoose for schema and model of notes
const mongoose = require("mongoose");

// notes schema it required only userid and note
const noteSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
    required: true,
  },
  item: {
    title: { type: String, required: true },
    body: { type: String, required: true },
  },
});

// exporting note model
module.exports = mongoose.model("notes", noteSchema);
