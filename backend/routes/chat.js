const express = require("express");
const router = express.Router();
const { generateResponse } = require("../services/ai");

router.post("/", async (req, res) => {
  const { message } = req.body;
  try {
    const reply = await generateResponse(message);
    res.json({ reply });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
