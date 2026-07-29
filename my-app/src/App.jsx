import Card from './component/Card'

function App() {
  return (
    <>
      <Card
        name="Sarthak Sharma"
        image="https://i.pravatar.cc/150?img=3"
        age={25}
        description="Frontend developer who loves building UI components."
      />
      <Card
        name="John Doe"
        age={30}
        description="Backend developer specializing in Node.js and databases."
      />
    </>
    
    
  )
}

export default App
