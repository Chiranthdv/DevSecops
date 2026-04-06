const express = require("express");
const router = express.Router();
const WorkerProfile = require("../models/WorkerProfile");
const calculateTrustScore = require("../utils/trustScore");

// Create worker profile
router.post("/create", async (req, res) => {
  try {
    const profile = new WorkerProfile(req.body);
    await profile.save();
    res.json(profile);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Get all workers (only verified)
router.get("/verified", async (req, res) => {
  try {
    const workers = await WorkerProfile.find({ verificationStatus: "approved" })
      .populate("userId", "name email");

    res.json(workers);
  } catch (err) {
    res.status(500).json(err);
  }
});
// Admin approves worker
router.patch("/approve/:id", async (req, res) => {
  let worker = await WorkerProfile.findById(req.params.id);
    if (!worker) {
  return res.status(404).json({ message: "Worker not found" });
}
  worker.verificationStatus = "approved";

  worker.trustScore = await calculateTrustScore(worker);

  await worker.save();

  res.json(worker);
});
router.patch("/reject/:id", async (req, res) => {
  try {
    const worker = await WorkerProfile.findByIdAndUpdate(
      req.params.id,
      { verificationStatus: "rejected" },
      { new: true }
    );

    res.json(worker);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;