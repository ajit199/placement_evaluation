const Manager = require("../models/Manager.model");
async function registerUser(userData) {
  try {
    if (!userData)
      return { message: "User Data is incorrect", status: "Error" };
    await Manager.create(userData);
    return {
      message: "User account has been created Successfully.",
      status: "Success",
    };
  } catch (error) {
    return { message: "Internal server Error", status: "Error" };
  }
}

async function loginUser({ email, password }) {
  try {
    if (!email)
      return { message: "email should not be blank.", status: "Error" };
    if (!password)
      return { message: "password should not be blank.", status: "Error" };
    let user = await Manager.findOne({ email });
    if (user)
      return {
        message: "User is logged in successfully.",
        status: "Success",
        user,
      };
  } catch (error) {
    return { message: "User registered successfully.", status: "Success" };
  }
}

module.exports = { registerUser, loginUser };
