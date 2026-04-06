const mongoose = require("mongoose");

const workerProfileSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  category: {
    type: String,
    enum: ["plumber", "electrician"]
  },
  experience: Number,
  location: String,

  verificationStatus: {
    type: String,
    enum: ["pending", "approved", "rejected"],
    default: "pending"
  },

  trustScore: {
    type: Number,
    default: 0
  }

}, { timestamps: true });

module.exports = mongoose.model("WorkerProfile", workerProfileSchema);