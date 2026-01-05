import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1>Recipe PDF Generator</h1>
        <form action="submit">
          <input type="text" />
          <button></button>
        </form>
      </div>
    </>
  )
}

export default App
