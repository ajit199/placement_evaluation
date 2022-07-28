const authRouter = require("express").Router();
const { registerUser, loginUser } = require("../controllers/auth.controller");
const Manager = require("../models/Manager.model");
let jwt = require("jsonwebtoken");
authRouter.post("/register", async (req, res) => {
  let { message, status } = await registerUser(req.body);
  if (status === "Error") return res.send(message);
  //   console.log(response);
  res.status(200).send(message);
});

authRouter.post("/login", async (req, res) => {
  let response = await loginUser(req.body);
  if (response.status === "Error") return res.send(response.message);
  let token = jwt.sign(
    { name: response?.user?.name, email: response?.user?.email },
    process.env.SECRET_KEY,
    {
      expiresIn: "5h",
    }
  );
  res.status(200).send({ message: response.message, token });
});

module.exports = authRouter;
