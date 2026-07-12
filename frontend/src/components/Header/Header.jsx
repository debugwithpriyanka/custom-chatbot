import "./Header.css";
import ThemeToggle from "../ThemeToggle/ThemeToggle";

function Header() {
  return (
    <header className="header">
      <h1>AI Assistant</h1>
      <ThemeToggle />
    </header>
  );
}

export default Header;