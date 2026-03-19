import { useContext } from "react"
import { ThemeContext } from "../../context/ThemeContext"

export const ThemeButton = () => {
  const { theme, toggleTheme } = useContext(ThemeContext)!
  return (
    <button onClick={toggleTheme}>
      {theme === "light" ? "🌑" : "🌕"}
    </button>
  )
}