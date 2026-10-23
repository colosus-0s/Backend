const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");

router.post("/create", (req, res) => {
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({
      message: "Unauthorized",
    });
  }

  try {
    res.send("post has been created successfully");
  } catch (err) {}

  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  console.log(decoded)
});

module.exports = router;
