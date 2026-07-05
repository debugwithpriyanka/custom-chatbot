import Sidebar from "../components/Sidebar/Sidebar";
import Header from "../components/Header/Header";
import ChatWindow from "../components/ChatWindow/ChatWindow";
import ChatInput from "../components/ChatInput/ChatInput";

function Home() {
  return (
    <div>
      <Sidebar />

      <div>
        <Header />
        <ChatWindow />
        <ChatInput />
      </div>
    </div>
  );
}

export default Home;