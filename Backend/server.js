// importing required liberaries
const express = require("express");
const cors = require("cors");
require("dotenv").config();

// importing all function from there files
const connect = require("./src/Configs/db");

// app to use all express functionalities
const app = express();

// express.json to access data in json format
// cors to pass all cors errors whiling connecting fontend and backend
app.use(express.json());
app.use(cors());

// app.listen to start server on 8080 server
app.listen(process.env.PORT || 8080, async () => {
  try {
    await connect();

    console.log("=>>> Server started", process.env.PORT || 8080);
  } catch (error) {
    console.log("=>>> Server not started Error:-", error);
  }
});
