import { createContext, useContext, useState } from 'react'

// 1. Create Context
const ThemeContext = createContext()

// 2. Create Provider
function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light")
  const [user, setUser] = useState("Anju")

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light")
  }

  return (
    <ThemeContext.Provider value={{ theme, user, toggleTheme, setUser }}>
      {children}
    </ThemeContext.Provider>
  )
}

// 3. Custom Hook to use context
function useTheme() {
  return useContext(ThemeContext)
}

// Components using Context
function Header() {
  const { theme, toggleTheme } = useTheme()

  return (
    <header style={{
      padding: "20px",
      background: theme === "light" ? "#fff" : "#333",
      color: theme === "light" ? "#333" : "#fff"
    }}>
      <h2>Header - Theme: {theme}</h2>
      <button onClick={toggleTheme}>
        Switch to {theme === "light" ? "Dark" : "Light"}
      </button>
    </header>
  )
}

function Content() {
  const { theme, user } = useTheme()

  return (
    <div style={{
      padding: "20px",
      background: theme === "light" ? "#f0f0f0" : "#222",
      color: theme === "light" ? "#333" : "#fff"
    }}>
      <h2>Content</h2>
      <p>Welcome, <b>{user}</b>!</p>
      <p>This is the content area with {theme} theme.</p>
    </div>
  )
}

function Footer() {
  const { theme, user, setUser } = useTheme()

  return (
    <footer style={{
      padding: "20px",
      background: theme === "light" ? "#e0e0e0" : "#111",
      color: theme === "light" ? "#333" : "#fff"
    }}>
      <h2>Footer</h2>
      <p>Logged in as: {user}</p>
      <input
        value={user}
        onChange={(e) => setUser(e.target.value)}
        placeholder="Change user"
      />
    </footer>
  )
}

// Main App with Provider
function App() {
  return (
    <ThemeProvider>
      <div style={{ minHeight: "100vh" }}>
        <h1>Context API Demo</h1>
        <Header />
        <Content />
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default App
