const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema({
  customerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  workerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },

  description: String,
  address: String,
  scheduledTime: Date,

  status: {
    type: String,
    enum: ["requested", "accepted", "completed"],
    default: "requested"
  }

}, { timestamps: true });

module.exports = mongoose.model("Job", jobSchema);