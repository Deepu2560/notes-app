// importing mongoose for schema and model of notes
const mongoose = require("mongoose");

// notes schema it required only userid and note
const noteSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
      required: true,
    },
    item: {
      title: { type: String, required: true },
      description: { type: String, required: true },
    },
  },
  { versionKey: false, timestamps: true },
);

// exporting note model
module.exports = mongoose.model("notes", noteSchema);
