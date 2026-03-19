import { useTheme } from "../../context/useTheme"

export const ThemeButton = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <button onClick={toggleTheme}>
      {theme === "light" ? "🌑" : "🌕"}
    </button>
  )
}