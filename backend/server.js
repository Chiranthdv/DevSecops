const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const authRoutes = require("./routes/authRoutes");  
const app = express();
const workerRoutes = require("./routes/workerRoutes");
const documentRoutes = require("./routes/documentRoutes");
const jobRoutes = require("./routes/jobRoutes");
const reviewRoutes = require("./routes/reviewRoutes");
// middleware
app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoutes);
app.use("/api/workers", workerRoutes);
app.use("/api/documents", documentRoutes);
app.use("/api/jobs", jobRoutes);
app.use("/api/reviews", reviewRoutes);

// test route
app.get("/", (req, res) => {
  res.send("API is running 🚀");
});

// connect DB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

// start server
app.listen(5000, () => {
  console.log("Server running on port 5000");
});