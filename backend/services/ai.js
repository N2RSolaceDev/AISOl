async function generateResponse(prompt) {
  const res = await fetch("http://unfiltereduk.co.uk/api/generate", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      model: "llama3",
      prompt,
      stream: false,
      options: {
        temperature: 0.95,
        top_p: 0.9,
        repeat_penalty: 1.1,
        max_tokens: 2000
      }
    }),
  });

  if (!res.ok) throw new Error("Model request failed");

  const data = await res.json();
  return data.response;
}

module.exports = { generateResponse };
