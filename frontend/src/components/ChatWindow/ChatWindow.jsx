import "./ChatWindow.css";
import MessageBubble from "../MessageBubble/MessageBubble";

function ChatWindow({ messages, loading }) {
  return (
    <main className="chat-window">

      {messages.length === 0 && (
        <h2
          style={{
            textAlign: "center",
            marginTop: "100px",
          }}
        >
          Start a conversation 👋
        </h2>
      )}

      {messages.map((msg, index) => (
        <MessageBubble
          key={index}
          sender={msg.sender}
          text={msg.text}
        />
      ))}

      {loading && (
        <MessageBubble
          sender="bot"
          text="Thinking..."
        />
      )}

    </main>
  );
}

export default ChatWindow;