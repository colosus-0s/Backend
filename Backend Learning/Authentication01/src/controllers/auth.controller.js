const userModel = require("../models/user.model");
const jwt = require('jsonwebtoken')

const registerUser = async (req, res) => {
  const { username, email, password } = req.body;
  const user = await new userModel.create({
      username,
      email,
      password
  })

  const token = jwt.sign({email:email},"secret")
  

};

module.exports = { registerUser };
