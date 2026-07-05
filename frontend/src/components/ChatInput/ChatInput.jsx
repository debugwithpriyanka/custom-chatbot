import "./ChatInput.css";

function ChatInput(){

    return(
        <div className="chat-input">

            <input
            type="text"
            placeholder="Message AI Assistant..."
            />

            <button>
                Send
            </button>

        </div>
    )
}

export default ChatInput;