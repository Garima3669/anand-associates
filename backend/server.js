require("dotenv").config();

const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");

const connectDB = require("./config/db");
const contactRoutes = require("./routes/contactRoutes");

const app = express();

// Connect Database
connectDB();

// Middleware
app.use(cors({
  origin: "http://localhost:5173",
  credentials: true,
}));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(helmet());

app.use(morgan("dev"));

app.use("/api/contact", contactRoutes);

// Test Route
app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Anand Associates Backend Running Successfully"
  });
});

// Start Server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});