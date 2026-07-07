import "./MessageBubble.css";
import Avatar from "react-avatar";

function MessageBubble({ sender, text }) {
  const isUser = sender === "user";

  return (
    <div className={`message ${isUser ? "user" : "bot"}`}>
      {!isUser && (
        <Avatar
          name="AI"
          size="40"
          round={true}
          color="#10A37F"
        />
      )}

      <div className="bubble">
        {text}
      </div>

      {isUser && (
        <Avatar
          name="Priyanka"
          size="40"
          round={true}
          color="#444"
        />
      )}
    </div>
  );
}

export default MessageBubble;