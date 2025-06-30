const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const chatRoutes = require("./routes/chat");

connectDB();

const app = express();

// ✅ Middleware correctly called as functions
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/chat", chatRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
