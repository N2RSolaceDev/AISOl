import React from "react";
import Message from "./Message";

function ChatWindow({ messages }) {
  return (
    <div className="flex-1 overflow-y-auto p-4 space-y-4">
      {messages.map((msg, i) => (
        <Message key={i} text={msg.text} sender={msg.sender} />
      ))}
    </div>
  );
}

export default ChatWindow;
