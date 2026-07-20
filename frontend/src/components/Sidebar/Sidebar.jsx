import "./Sidebar.css";

import {
  FiPlus,
  FiMessageSquare,
  FiSettings,
  FiUser,
  FiTrash2,
} from "react-icons/fi";

function Sidebar({
  isOpen,
  chats,
  currentChatId,
  createNewChat,
  selectChat,
  deleteChat,
}) {
  return (
    <aside className={`sidebar ${isOpen ? "open" : "closed"}`}>
      <div>

        <h2 className="logo">
          🤖 AI Assistant
        </h2>

        <button
          className="new-chat"
          onClick={createNewChat}
        >
          <FiPlus />
          New Chat
        </button>

      </div>

      <div className="history">

        <h4>Recent Chats</h4>

        {chats.map((chat) => (

          <div
            key={chat.id}
            className={`history-item ${
              currentChatId === chat.id ? "active" : ""
            }`}
          >

            <div
              className="history-title"
              onClick={() => selectChat(chat.id)}
            >
              <FiMessageSquare />
              {chat.title}
            </div>

            <button
              className="delete-btn"
              onClick={() => deleteChat(chat.id)}
            >
              <FiTrash2 />
            </button>

          </div>

        ))}

      </div>

      <div className="bottom">

        <div className="menu">
          <FiSettings />
          Settings
        </div>

        <div className="menu">
          <FiUser />
          Priyanka
        </div>

      </div>
    </aside>
  );
}

export default Sidebar;