const express = require("express");
const router = express.Router();

// @route   Get api/users
// @desc    Test Router
// @access  Public
router.get("/", (req, res) => {
  res.send("User Router");
});

module.exports = router;
