import "./Header.css";
import ThemeToggle from "../ThemeToggle/ThemeToggle";
import { Menu } from "lucide-react";

function Header() {
  return (
    <header className="header">

      <button className="menu-btn">
        <Menu size={22} />
      </button>

      <h1>AI Assistant</h1>

      <ThemeToggle />

    </header>
  );
}

export default Header;