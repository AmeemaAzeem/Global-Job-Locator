require("dotenv").config();

const express = require("express");
const cors = require("cors");

const app = express();

// 🔧 Middleware
app.use(cors());
app.use(express.json());

// 🔌 Routes
const jobRoutes = require("./routes/jobRoutes");
app.use("/api/jobs", jobRoutes);

// 🧪 Test Route
app.get("/", (req, res) => {
  res.send("🚀 Job Finder API is running...");
});

// 🚪 Server Port (from .env)
const PORT = process.env.PORT || 5000;

// ▶️ Start Server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});