const apartmentRouter = require("express").Router();
const Apartment = require("../models/Apartment.model");
// get all apartments
apartmentRouter.get("/", async (req, res) => {
  let { page = 1, limit = 3 } = req.query;
  try {
    let apartments = await Apartment.find()
      .skip((page - 1) * 3)
      .limit(limit);
    res.status(200).json(apartments);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = apartmentRouter;
