import "./MessageBubble.css";

function MessageBubble({ sender, text }) {
  return (
    <div className={`message ${sender}`}>
      <div className="bubble">
        {text}
      </div>
    </div>
  );
}

export default MessageBubble;