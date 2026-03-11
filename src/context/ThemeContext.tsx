import { createContext, useState, useEffect } from "react"

export const ThemeContext = createContext<any>(null)

export const ThemeProvider = ({ children }: any) => {

  const savedTheme = localStorage.getItem("theme") || "light"

  const [theme, setTheme] = useState(savedTheme)

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme)
    localStorage.setItem("theme", theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light")
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}