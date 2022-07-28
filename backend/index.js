const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// connect to Mongo DB
mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true }, () => {
  console.log("Connected to MongoDB.");
});
app.get("/", (req, res) => {
  res.send("Welcome to the Homepage.");
});

app.listen(process.env.PORT, () => {
  console.log("Server started");
});
