const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema({
  jobId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Job"
  },
  customerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  workerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },

  rating: Number,
  comment: String

}, { timestamps: true });

module.exports = mongoose.model("Review", reviewSchema);