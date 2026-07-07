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
        text: response.data.response,
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

      <Sidebar />

      <div className="chat-section">

        <Header />

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