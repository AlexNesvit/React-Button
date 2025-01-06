import { useState } from 'react'
import './App.css'
import MyButton from './components/myButtonPlus/MyButtonPlus'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>App Button</h1>
      <div className="card">
      < MyButton />

      </div>
      <p className="read-the-docs">
        Click on the +  and - buttons to learn more
      </p>
      
    </>
  )
}

export default App
