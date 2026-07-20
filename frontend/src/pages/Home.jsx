 import { useState, useEffect } from "react";

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

  const [chats, setChats] = useState([]);
  const [currentChatId, setCurrentChatId] = useState(null);

  // ==========================
  // Load Chats
  // ==========================
  useEffect(() => {
    const savedChats = JSON.parse(localStorage.getItem("chatHistory"));

    if (savedChats && savedChats.length > 0) {
      setChats(savedChats);
      setCurrentChatId(savedChats[0].id);
      setMessages(savedChats[0].messages);
    }
  }, []);

  // ==========================
  // Save Chats
  // ==========================
  useEffect(() => {
    localStorage.setItem("chatHistory", JSON.stringify(chats));
  }, [chats]);

  // ==========================
  // Create New Chat
  // ==========================
  const createNewChat = () => {
    const newChat = {
      id: Date.now(),
      title: `Chat ${chats.length + 1}`,
      messages: [],
    };

    setChats((prev) => [newChat, ...prev]);
    setCurrentChatId(newChat.id);
    setMessages([]);
  };

  // ==========================
  // Select Chat
  // ==========================
  const selectChat = (id) => {
    const selectedChat = chats.find((chat) => chat.id === id);

    if (!selectedChat) return;

    setCurrentChatId(id);
    setMessages(selectedChat.messages);
  };

  // ==========================
  // Delete Chat
  // ==========================
  const deleteChat = (id) => {
    const updatedChats = chats.filter((chat) => chat.id !== id);

    setChats(updatedChats);

    if (updatedChats.length === 0) {
      setCurrentChatId(null);
      setMessages([]);
      return;
    }

    setCurrentChatId(updatedChats[0].id);
    setMessages(updatedChats[0].messages);
  };

  // ==========================
  // Send Message
  // ==========================
  const sendMessage = async (message) => {
    let activeChatId = currentChatId;

    // First chat automatically
    if (!activeChatId) {
      activeChatId = Date.now();

      const firstChat = {
        id: activeChatId,
        title:
          message.length > 25
            ? message.substring(0, 25) + "..."
            : message,
        messages: [],
      };

      setChats((prev) => [firstChat, ...prev]);
      setCurrentChatId(activeChatId);
    }

    const userMessage = {
      sender: "user",
      text: message,
    };

    const updatedMessages = [...messages, userMessage];

    setMessages(updatedMessages);

    setChats((prev) =>
      prev.map((chat) =>
        chat.id === activeChatId
          ? {
              ...chat,
              messages: updatedMessages,
            }
          : chat
      )
    );

    setLoading(true);

    try {
      const response = await api.post("/chat", {
        message,
      });

      console.log(response.data);

      const botMessage = {
        sender: "bot",
        text: response.data.response,
      };

      const finalMessages = [...updatedMessages, botMessage];

      setMessages(finalMessages);

      setChats((prev) =>
        prev.map((chat) =>
          chat.id === activeChatId
            ? {
                ...chat,
                messages: finalMessages,
              }
            : chat
        )
      );
    } catch (error) {
      console.error(error);

      const errorMessage = {
        sender: "bot",
        text: "Something went wrong.",
      };

      const finalMessages = [...updatedMessages, errorMessage];

      setMessages(finalMessages);

      setChats((prev) =>
        prev.map((chat) =>
          chat.id === activeChatId
            ? {
                ...chat,
                messages: finalMessages,
              }
            : chat
        )
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="home">
      <Sidebar
        isOpen={sidebarOpen}
        chats={chats}
        currentChatId={currentChatId}
        createNewChat={createNewChat}
        selectChat={selectChat}
        deleteChat={deleteChat}
      />

      <div className="chat-section">
        <Header
          toggleSidebar={() =>
            setSidebarOpen(!sidebarOpen)
          }
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