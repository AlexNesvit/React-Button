import { useState } from 'react'
import './App.css'
import Counter from './components/counter/Counter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>App Button</h1>
      <div className="card">
      <Counter count={count} setCount={setCount} />
      </div>
      <p className="read-the-docs">
        Click on the +  and - buttons: Current count: {count}
      </p>
      
    </>
  )
}

export default App
