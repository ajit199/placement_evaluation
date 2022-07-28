const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const authRouter = require("./routes/auth");
const apartmentRouter = require("./routes/apartments");
const cors = require("cors");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use("/api/auth", authRouter);
app.use("/api/apartments", apartmentRouter);
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
