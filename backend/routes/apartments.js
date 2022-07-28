const apartmentRouter = require("express").Router();
const Apartment = require("../models/Apartment.model");
// get all apartments
apartmentRouter.get("/", async (req, res) => {
  try {
    let apartments = await Apartment.find().select("name");
    res.status(200).json(apartments);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = apartmentRouter;
