import "./ChatWindow.css";
import MessageBubble from "../MessageBubble/MessageBubble";
import TypingIndicator from "../TypingIndicator/TypingIndicator";

function ChatWindow({ messages, loading }) {
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

      </div>

    </main>
  );
}

export default ChatWindow;