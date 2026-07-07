import "./TypingIndicator.css";

function TypingIndicator() {
  return (
    <div className="typing-wrapper">
      <div className="ai-avatar">🤖</div>

      <div className="typing-box">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
}

export default TypingIndicator;