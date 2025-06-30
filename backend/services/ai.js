async function generateResponse(prompt) {
  const res = await fetch("http://localhost:11434/api/generate", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      model: "llama3",
      prompt,
      stream: false
    })
  });

  if (!res.ok) throw new Error("Model request failed");

  const data = await res.json();
  return data.response;
}

module.exports = { generateResponse };
