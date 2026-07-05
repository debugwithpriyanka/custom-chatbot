import { useState } from "react";

import "./ChatInput.css";

function ChatInput() {

    const [input, setInput] = useState("");

    return (

        <div className="chat-input">

            <input

                type="text"

                placeholder="Message AI Assistant..."

                value={input}

                onChange={(e) => setInput(e.target.value)}

            />

            <button>

                Send

            </button>

        </div>

    );

}

export default ChatInput;