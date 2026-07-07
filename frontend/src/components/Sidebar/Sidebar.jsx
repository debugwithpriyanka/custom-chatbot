import "./Sidebar.css";

import {
    FiPlus,
    FiMessageSquare,
    FiSettings,
    FiUser
} from "react-icons/fi";

function Sidebar() {
    return (

        <aside className="sidebar">

            <div>

                <h2 className="logo">
                    🤖 AI Assistant
                </h2>

                <button className="new-chat">

                    <FiPlus />

                    New Chat

                </button>

            </div>

            <div className="history">

                <h4>Recent Chats</h4>

                <div className="history-item">

                    <FiMessageSquare />

                    Hello AI

                </div>

                <div className="history-item">

                    <FiMessageSquare />

                    React Help

                </div>

                <div className="history-item">

                    <FiMessageSquare />

                    Python

                </div>

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