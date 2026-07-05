import { useState } from "react";

import Sidebar from "../components/Sidebar/Sidebar";
import Header from "../components/Header/Header";
import ChatWindow from "../components/ChatWindow/ChatWindow";
import ChatInput from "../components/ChatInput/ChatInput";

import "./Home.css";

function Home() {

  const [messages, setMessages] = useState([]);

  const [loading, setLoading] = useState(false);

  return (
    <div className="home">

      <Sidebar />

      <div className="chat-section">

        <Header />

        <ChatWindow
          messages={messages}
          loading={loading}
        />

        <ChatInput />

      </div>

    </div>
  );
}

export default Home;