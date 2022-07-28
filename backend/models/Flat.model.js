const mongoose = require("mongoose");

const FlatSchema = new mongoose.Schema({
  type: { type: String },
  block: { type: String },
  flatNo: Number,
  apartmentId: String,
  residentId: String,
});

module.exports = mongoose.model("flat", FlatSchema);
