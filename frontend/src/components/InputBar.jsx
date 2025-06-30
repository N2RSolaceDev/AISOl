import React, { useState } from "react";

function InputBar({ onSend }) {
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (input.trim()) {
      onSend(input);
      setInput("");
    }
  };

  return (
    <div className="p-4 border-t border-gray-700 flex">
      <input
        className="flex-1 p-2 rounded bg-gray-800 text-white focus:outline-none"
        placeholder="Ask anything..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleSend()}
      />
      <button
        onClick={handleSend}
        className="ml-2 px-4 py-2 bg-indigo-600 rounded hover:bg-indigo-500 transition"
      >
        Send
      </button>
    </div>
  );
}

export default InputBar;
