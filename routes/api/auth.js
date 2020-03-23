const express = require("express");
const router = express.Router();

// @route   Get api/auth
// @desc    Test Router
// @access  Public
router.get("/", (req, res) => {
  res.send("Auth Router");
});

module.exports = router;
