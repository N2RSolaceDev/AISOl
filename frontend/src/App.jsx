import React, { useState } from "react";
import ChatWindow from "./components/ChatWindow";
import InputBar from "./components/InputBar";

function App() {
  const [messages, setMessages] = useState([]);

  const sendMessage = async (text) => {
    const userMsg = { text, sender: "user" };
    setMessages((prev) => [...prev, userMsg]);

    try {
      const response = await fetch("http://localhost:5000/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: text })
      });

      const data = await response.json();
      setMessages((prev) => [...prev, { text: data.reply, sender: "bot" }]);
    } catch (err) {
      setMessages((prev) => [...prev, { text: "Error contacting AI.", sender: "bot" }]);
    }
  };

  return (
    <div className="flex flex-col h-screen bg-gray-900 text-white">
      <h1 className="bg-indigo-700 p-4 text-center font-bold text-xl">🧠 UltimateAI</h1>
      <ChatWindow messages={messages} />
      <InputBar onSend={sendMessage} />
    </div>
  );
}

export default App;
