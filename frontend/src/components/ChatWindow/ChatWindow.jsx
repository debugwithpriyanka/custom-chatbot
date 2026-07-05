import "./ChatWindow.css";

function ChatWindow({ messages, loading }) {

  return (

    <main className="chat-window">

      {messages.length === 0 && (

        <h2 style={{ textAlign: "center", marginTop: "100px" }}>
          Start a conversation 👋
        </h2>

      )}

      {loading && (

        <p style={{ textAlign: "center" }}>
          Thinking...
        </p>

      )}

    </main>

  );

}

export default ChatWindow;