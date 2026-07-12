import "./ThemeToggle.css";
import { useTheme } from "../../hooks/useTheme";

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      className="theme-toggle"
      onClick={toggleTheme}
      title="Toggle Theme"
    >
      {theme === "dark" ? "🌙" : "☀️"}
    </button>
  );
}

export default ThemeToggle;