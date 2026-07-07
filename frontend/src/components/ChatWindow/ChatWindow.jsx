import "./ChatWindow.css";
import MessageBubble from "../MessageBubble/MessageBubble";
import TypingIndicator from "../TypingIndicator/TypingIndicator";
import { useEffect, useRef } from "react";
import "./ChatWindow.css";
import MessageBubble from "../MessageBubble/MessageBubble";
import TypingIndicator from "../TypingIndicator/TypingIndicator";

function ChatWindow({ messages, loading }) {
    const bottomRef = useRef(null);

useEffect(() => {
  bottomRef.current?.scrollIntoView({
    behavior: "smooth",
  });
}, [messages, loading]);

  return (
    <main className="chat-window">

      <div className="chat-content">

        {messages.length === 0 && (
          <h2
            style={{
              textAlign: "center",
              marginTop: "120px",
              color: "#888",
            }}
          >
            👋 Start a conversation
          </h2>
        )}

        {messages.map((msg, index) => (
          <MessageBubble
            key={index}
            sender={msg.sender}
            text={msg.text}
          />
        ))}

        {loading && <TypingIndicator />}

        const bottomRef = useRef(null);

        <div ref={bottomRef}></div>

      </div>

    </main>
  );
}

export default ChatWindow;