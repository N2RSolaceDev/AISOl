const express = require("express");
const router = express.Router();
const { generateResponse } = require("../services/ai");
const Chat = require("../models/ChatHistory");

router.post("/", async (req, res) => {
  const { message } = req.body;

  try {
    const reply = await generateResponse(message);

    // Save interaction
    const chatEntry = new Chat({ user: message, bot: reply });
    await chatEntry.save();

    res.json({ reply });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
