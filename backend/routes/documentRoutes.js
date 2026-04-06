const express = require("express");
const router = express.Router();
const upload = require("../config/multer");
const Document = require("../models/Document");
const User = require("../models/User");


// Upload document
router.post("/upload", upload.single("file"), async (req, res) => {
  try {
    // ✅ check if user exists
    const user = await User.findById(req.body.userId);

    if (!user) {
      return res.status(400).json({ msg: "Invalid User ID" });
    }

    const doc = new Document({
      userId: user._id,   // ✅ always correct
      documentType: req.body.documentType,
      fileUrl: req.file.path
    });

    await doc.save();

    res.json(doc);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Admin approve document
router.patch("/approve/:id", async (req, res) => {
  const doc = await Document.findByIdAndUpdate(
    req.params.id,
    { status: "approved" },
    { new: true }
  );

  res.json(doc);
});

module.exports = router;