import { create } from 'zustand'
import { useState } from 'react'

// 1. Create Store
const useStore = create((set) => ({
  // State
  count: 0,
  theme: "light",
  user: "Anju",
  todos: [],

  // Actions
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
  reset: () => set({ count: 0 }),

  toggleTheme: () => set((state) => ({
    theme: state.theme === "light" ? "dark" : "light"
  })),

  setUser: (name) => set({ user: name }),

  addTodo: (text) => set((state) => ({
    todos: [...state.todos, { id: Date.now(), text, done: false }]
  })),

  toggleTodo: (id) => set((state) => ({
    todos: state.todos.map(todo =>
      todo.id === id ? { ...todo, done: !todo.done } : todo
    )
  })),

  removeTodo: (id) => set((state) => ({
    todos: state.todos.filter(todo => todo.id !== id)
  }))
}))

// 2. Components using Store
function Counter() {
  const { count, increment, decrement, reset } = useStore()

  return (
    <div style={{ border: "1px solid #ccc", padding: "15px", margin: "10px" }}>
      <h3>Counter</h3>
      <p style={{ fontSize: "24px" }}>Count: {count}</p>
      <button onClick={increment}>+1</button>
      <button onClick={decrement}>-1</button>
      <button onClick={reset}>Reset</button>
    </div>
  )
}

function ThemeToggle() {
  const { theme, toggleTheme } = useStore()

  return (
    <div style={{
      border: "1px solid #ccc",
      padding: "15px",
      margin: "10px",
      background: theme === "light" ? "#fff" : "#333",
      color: theme === "light" ? "#333" : "#fff"
    }}>
      <h3>Theme Toggle</h3>
      <p>Current: {theme}</p>
      <button onClick={toggleTheme}>Switch Theme</button>
    </div>
  )
}

function UserInput() {
  const { user, setUser } = useStore()

  return (
    <div style={{ border: "1px solid #ccc", padding: "15px", margin: "10px" }}>
      <h3>User</h3>
      <p>Welcome, <b>{user}</b>!</p>
      <input
        value={user}
        onChange={(e) => setUser(e.target.value)}
        placeholder="Enter name"
      />
    </div>
  )
}

function TodoList() {
  const { todos, addTodo, toggleTodo, removeTodo } = useStore()
  const [input, setInput] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    if (input.trim()) {
      addTodo(input)
      setInput("")
    }
  }

  return (
    <div style={{ border: "1px solid #ccc", padding: "15px", margin: "10px" }}>
      <h3>Todo List</h3>
      <form onSubmit={handleSubmit}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add todo..."
        />
        <button type="submit">Add</button>
      </form>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            <span
              onClick={() => toggleTodo(todo.id)}
              style={{
                textDecoration: todo.done ? "line-through" : "none",
                cursor: "pointer"
              }}
            >
              {todo.text}
            </span>
            <button onClick={() => removeTodo(todo.id)}>X</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

function App() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Zustand Demo</h1>
      <Counter />
      <ThemeToggle />
      <UserInput />
      <TodoList />
    </div>
  )
}

export default App
