const apartmentRouter = require("express").Router();
const Apartment = require("../models/Apartment.model");
const Flat = require("../models/Flat.model");
const Resident = require("../models/Resident.model");
// get all apartments
apartmentRouter.get("/", async (req, res) => {
  let { page = 1, limit = 3 } = req.query;
  try {
    let totalApartments = await Apartment.find().count();
    let apartments = await Apartment.find()
      .skip((page - 1) * 3)
      .limit(limit);
    res.status(200).send({ apartments, totalApartments });
  } catch (error) {
    res.status(500).json(error);
  }
});

apartmentRouter.get("/:id", async (req, res) => {
  try {
    // let totalApartments = await Flat.find({ apartmentId: req.params.id }).count();
    let flats = await Flat.find({ apartmentId: req.params.id });
    let residents = await Promise.all(
      flats.map((flat) => {
        return Resident.findOne({ flatId: flat?._id }).select("name age");
      })
    );
    res.status(200).send({ residents });
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = apartmentRouter;
