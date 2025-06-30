// frontend/src/App.jsx
import React, { useState } from "react";
import ChatWindow from "./components/ChatWindow";
import InputBar from "./components/InputBar";

function App() {
  const [messages, setMessages] = useState([]);

  const sendMessage = async (text) => {
    const userMessage = { text, sender: "user" };
    setMessages((prev) => [...prev, userMessage]);

    try {
      const response = await fetch("http://localhost:5000/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: text }),
      });

      const data = await response.json();
      setMessages((prev) => [...prev, { text: data.reply, sender: "bot" }]);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        { text: "Error contacting AI. Please try again.", sender: "bot" },
      ]);
    }
  };

  return (
    <div className="flex flex-col h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      {/* Header */}
      <header className="bg-indigo-700 py-4 shadow-lg">
        <h1 className="text-center text-2xl font-bold">🧠 UltimateAI</h1>
        <p className="text-center text-sm opacity-80">Your Unfiltered AI Companion</p>
      </header>

      {/* Chat Area */}
      <main className="flex-1 overflow-y-auto p-4 bg-gray-800">
        <ChatWindow messages={messages} />
      </main>

      {/* Input Bar */}
      <footer className="p-4 border-t border-gray-700 bg-gray-900">
        <InputBar onSend={sendMessage} />
      </footer>
    </div>
  );
}

export default App;
