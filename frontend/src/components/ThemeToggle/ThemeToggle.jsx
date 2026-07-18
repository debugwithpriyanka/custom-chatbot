import "./ThemeToggle.css";
import { useTheme } from "../../hooks/useTheme";
import { Sun, Moon } from "lucide-react";

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      className={`theme-toggle ${theme}`}
      onClick={toggleTheme}
      aria-label="Toggle theme"
    >
      <Sun size={18} className="icon sun" />
      <Moon size={18} className="icon moon" />

      <div className="toggle-thumb"></div>
    </button>
  );
}

export default ThemeToggle;