import Sidebar from "../components/Sidebar/Sidebar";
import Header from "../components/Header/Header";
import ChatWindow from "../components/ChatWindow/ChatWindow";
import ChatInput from "../components/ChatInput/ChatInput";

import "./Home.css";

function Home() {
  return (
    <div className="home">

      <Sidebar />

      <div className="chat-section">

        <Header />

        <ChatWindow />

        <ChatInput />

      </div>

    </div>
  );
}

export default Home;