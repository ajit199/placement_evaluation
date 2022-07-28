const mongoose = require("mongoose");

const ManagerSchema = new mongoose.Schema({
  username: { type: String, unique: true },
  email: String,
  password: {
    type: String,
  },
  apartmentId: String,
});

module.exports = mongoose.model("manager", ManagerSchema);
