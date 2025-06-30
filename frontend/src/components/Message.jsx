import React from "react";

function Message({ text, sender }) {
  const isBot = sender === "bot";
  return (
    <div className={`flex ${isBot ? "justify-start" : "justify-end"}`}>
      <div
        className={`max-w-xs md:max-w-md lg:max-w-lg p-3 rounded-lg ${
          isBot ? "bg-gray-800" : "bg-indigo-600"
        }`}
      >
        {text}
      </div>
    </div>
  );
}

export default Message;
