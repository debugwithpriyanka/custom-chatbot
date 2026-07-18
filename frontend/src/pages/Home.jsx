import { useState } from "react";

import Sidebar from "../components/Sidebar/Sidebar";
import Header from "../components/Header/Header";
import ChatWindow from "../components/ChatWindow/ChatWindow";
import ChatInput from "../components/ChatInput/ChatInput";

import api from "../services/api";

import "./Home.css";

function Home() {

  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const sendMessage = async (message) => {

    const userMessage = {
      sender: "user",
      text: message,
    };

    setMessages((prev) => [...prev, userMessage]);

    setLoading(true);

    try {

      const response = await api.post("/chat", {
        message,
      });

      const botMessage = {
        sender: "bot",
        text: response.data.reply,
      };

      setMessages((prev) => [...prev, botMessage]);

    } catch (error) {

      setMessages((prev) => [
        ...prev,
        {
          sender: "bot",
          text: "Something went wrong.",
        },
      ]);

      console.error(error);

    } finally {

      setLoading(false);

    }
  };

  return (
    <div className="home">

      <Sidebar
        isOpen={sidebarOpen}
      />

      <div className="chat-section">

        <Header
          toggleSidebar={() => setSidebarOpen(!sidebarOpen)}
        />

        <ChatWindow
          messages={messages}
          loading={loading}
        />

        <ChatInput
          onSend={sendMessage}
          loading={loading}
        />

      </div>

    </div>
  );
}

export default Home;