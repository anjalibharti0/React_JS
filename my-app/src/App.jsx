// import React from 'react'
// import { useState, useEffect } from 'react'

// const App = () => {
//   const [num, setNum] = useState(0)
//   const [num2, setNum2] = useState(100)

//   useEffect(function () {
//     console.log('use effect is running...');
//   }, [num])

//   return (
//     <div>
//       <h1>num {num}</h1>
//       <h1>num2 {num2}</h1>

//       <button
//         onMouseEnter={() => {
//           setNum(num + 1)
//         }}
//         onMouseLeave={() => {
//           setNum2(num2 + 10)
//         }}
//       >
//         Hover
//       </button>
//     </div>
//   )
// }

// export default App
import React from 'react'
import { useState, useEffect } from 'react'

const App = () => {
  const [count, setCount] = useState(0)
  const [name, setName] = useState("")
  const [data, setData] = useState(null)
  const [seconds, setSeconds] = useState(0)
  const [running, setRunning] = useState(false)

  // 1. Runs on every render
  useEffect(() => {
    console.log("Component rendered!")
  })

  // 2. Runs only once on first render (empty array)
  useEffect(() => {
    console.log("Component mounted! (runs once)")
    // Example: API call on page load
    fetch("https://jsonplaceholder.typicode.com/users/1")
      .then(res => res.json())
      .then(data => setData(data))
  }, [])

  // 3. Runs when count changes
  useEffect(() => {
    document.title = `Count: ${count}`
    console.log("Count changed to:", count)
  }, [count])

  // 4. Runs when name changes
  useEffect(() => {
    if (name) {
      console.log("Name changed to:", name)
    }
  }, [name])

  // 5. Timer with cleanup
  useEffect(() => {
    let interval = null
    if (running) {
      interval = setInterval(() => {
        setSeconds(prev => prev + 1)
      }, 1000)
    }
    return () => clearInterval(interval)   // cleanup!
  }, [running])

  return (
    <div style={{ padding: "20px" }}>
      <h1>useEffect Examples</h1>

      {/* Example 1: Count & Title */}
      <div style={{ border: "1px solid #ccc", padding: "15px", margin: "10px" }}>
        <h2>1. Update Title on Count Change</h2>
        <p>Count: {count}</p>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <button onClick={() => setCount(count - 1)}>Decrement</button>
        <p><i>Check browser tab title!</i></p>
      </div>

      {/* Example 2: Name input */}
      <div style={{ border: "1px solid #ccc", padding: "15px", margin: "10px" }}>
        <h2>2. Track Name Change</h2>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Type your name"
        />
        <p>Hello, {name || "Guest"}!</p>
      </div>

      {/* Example 3: API call */}
      <div style={{ border: "1px solid #ccc", padding: "15px", margin: "10px" }}>
        <h2>3. API Call on Mount (empty dependency)</h2>
        {data ? (
          <div>
            <p><b>Name:</b> {data.name}</p>
            <p><b>Email:</b> {data.email}</p>
            <p><b>Phone:</b> {data.phone}</p>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>

      {/* Example 4: Timer with cleanup */}
      <div style={{ border: "1px solid #ccc", padding: "15px", margin: "10px" }}>
        <h2>4. Timer with Cleanup</h2>
        <p style={{ fontSize: "24px" }}>Time: {seconds}s</p>
        <button onClick={() => setRunning(true)}>Start</button>
        <button onClick={() => setRunning(false)}>Stop</button>
        <button onClick={() => { setRunning(false); setSeconds(0) }}>Reset</button>
        <p><i>Watch console - logs every second!</i></p>
      </div>

    </div>
  )
}

export default App