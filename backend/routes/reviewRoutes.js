const express = require("express");
const router = express.Router();
const Review = require("../models/Review");

// Add review
router.post("/add", async (req, res) => {
  try {
    const review = new Review(req.body);
    await review.save();
    res.json(review);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;