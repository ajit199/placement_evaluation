const mongoose = require("mongoose");

const ResidentSchema = new mongoose.Schema({
  name: { type: String, unique: true },
  gender: String,
  age: {
    type: Number,
  },
  flatId: String,
});

module.exports = mongoose.model("resident", ResidentSchema);
