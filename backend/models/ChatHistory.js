const mongoose = require("mongoose");

const ChatSchema = new mongoose.Schema({
  user: String,
  bot: String,
  timestamp: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Chat", ChatSchema);
