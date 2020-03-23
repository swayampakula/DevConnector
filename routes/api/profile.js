const express = require("express");
const router = express.Router();

// @route   Get api/profile
// @desc    Test Router
// @access  Public
router.get("/", (req, res) => {
  res.send("Profile Router");
});

module.exports = router;
