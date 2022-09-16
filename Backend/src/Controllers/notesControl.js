// importing express liberary
const express = require("express");

// importing notes model and authentication middleware
const Notes = require("../Models/noteModel");
const Authenticate = require("../Middlewares/authenticate");

// express.Router to create new routes
const router = express.Router();

// notes/get to get all notes of an user
router.get("/get", Authenticate, async (req, res) => {
  try {
    const event = await Notes.find({ userId: req.user._id }).lean().exec();

    console.log(`${req.user.email} getting its all notes`);

    return res.status(200).send({
      error: false,
      event,
      message: "Getting all notes successfully",
    });
  } catch (error) {
    console.log("Notes add server Error :", error);

    return res.status(502).send({
      error: true,
      message: `Notes add server Error:- ${error.message}`,
    });
  }
});

// notes/add to add new notes
router.post("/add", Authenticate, async (req, res) => {
  try {
    const event = await Notes.create({
      userId: req.user._id,
      item: {
        title: req.body.title,
        description: req.body.description,
      },
    });

    console.log(`${req.user.email} added new note`);

    return res
      .status(200)
      .send({ error: false, event, message: "New note added successfully" });
  } catch (error) {
    console.log("Notes add server Error :", error);

    return res.status(502).send({
      error: true,
      message: `Notes add server Error:- ${error.message}`,
    });
  }
});

// notes/update to update existing note
router.put("/update/:id", Authenticate, async (req, res) => {
  try {
    const event = await Notes.findByIdAndUpdate(req.params.id, {
      $set: {
        item: {
          title: req.body.title,
          description: req.body.description,
        },
      },
    });

    console.log(`${req.user.email} updated one note`);

    return res
      .status(200)
      .send({ error: false, event, message: "Note updates successfully" });
  } catch (error) {
    console.log("Notes update server Error :", error);

    return res.status(502).send({
      error: true,
      message: `Notes update server Error:- ${error.message}`,
    });
  }
});

// notes/delete to delete a note
router.delete("/delete/:id", Authenticate, async (req, res) => {
  try {
    const event = await Notes.findByIdAndDelete(req.params.id);

    console.log(`${req.user.email} deleted one note`);

    return res
      .status(200)
      .send({ error: false, event, message: "Note delete successfully" });
  } catch (error) {
    console.log("Notes delete server Error :", error);

    return res.status(502).send({
      error: true,
      message: `Notes delete server Error:- ${error.message}`,
    });
  }
});

// exporting router
module.exports = router;
