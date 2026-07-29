import Card from './component/Card'

// 1. Basic Props
function BasicCard(props) {
  return (
    <div className='card'>
      <h2>Basic Props</h2>
      <p>Name: {props.name}</p>
      <p>Age: {props.age}</p>
    </div>
  )
}

// 2. Destructuring Props
function DestructuredCard({ name, age, city }) {
  return (
    <div className='card'>
      <h2>Destructured Props</h2>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>City: {city}</p>
    </div>
  )
}

// 3. Default Props
function DefaultCard({ name = "Guest", age = 0, city = "Unknown" }) {
  return (
    <div className='card'>
      <h2>Default Props</h2>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>City: {city}</p>
    </div>
  )
}

// 4. Children Props
function ChildrenCard({ title, children }) {
  return (
    <div className='card'>
      <h2>Children Props</h2>
      <h3>{title}</h3>
      <div>{children}</div>
    </div>
  )
}

// 5. Function Props
function ButtonCard({ label, onClick }) {
  return (
    <div className='card'>
      <h2>Function Props</h2>
      <button onClick={onClick}>{label}</button>
    </div>
  )
}

// 6. Array & Object Props
function ListCard({ name, skills }) {
  return (
    <div className='card'>
      <h2>Array Props</h2>
      <p>Name: {name}</p>
      <ul>
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </div>
  )
}

// 7. Reusable Card (your Card.jsx)
function ReusableExample() {
  const users = [
    { id: 1, name: "Sarthak", age: 25, description: "Frontend developer" },
    { id: 2, name: "John", age: 30, description: "Backend developer" },
    { id: 3, name: "Jane", age: 28, description: "Full stack developer" },
  ]

  return (
    <div className='card'>
      <h2>Reusable Card Component</h2>
      {users.map((user) => (
        <Card
          key={user.id}
          name={user.name}
          age={user.age}
          description={user.description}
        />
      ))}
    </div>
  )
}

// Main App
function PropsPractice() {
  const handleClick = () => alert("Button clicked!")

  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "20px", padding: "20px" }}>
      <BasicCard name="Sarthak" age={25} />
      <DestructuredCard name="Sarthak" age={25} city="Delhi" />
      <DefaultCard />
      <DefaultCard name="Sarthak" age={25} city="Delhi" />

      <ChildrenCard title="My Profile">
        <p>This is children content</p>
        <p>Anything between tags goes here</p>
      </ChildrenCard>

      <ButtonCard label="Click Me" onClick={handleClick} />

      <ListCard
        name="Sarthak"
        skills={["React", "JavaScript", "CSS", "Node.js"]}
      />

      <ReusableExample />
    </div>
  )
}

export default PropsPractice
