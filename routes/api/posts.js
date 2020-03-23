const express = require("express");
const router = express.Router();

// @route   Get api/posts
// @desc    Test Router
// @access  Public
router.get("/", (req, res) => {
  res.send("Posts Router");
});

module.exports = router;
