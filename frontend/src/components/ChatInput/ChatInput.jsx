import { useState } from "react";
import "./ChatInput.css";

function ChatInput({ onSend, loading }) {
  const [input, setInput] = useState("");

  const handleSubmit = () => {
    if (!input.trim()) return;

    onSend(input);
    setInput("");
  };

  return (
    <div className="chat-input">
      <input
        type="text"
        placeholder="Message AI Assistant..."
        value={input}
        disabled={loading}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleSubmit();
          }
        }}
      />

      <button
        onClick={handleSubmit}
        disabled={loading}
      >
        {loading ? "..." : "Send"}
      </button>
    </div>
  );
}

export default ChatInput;