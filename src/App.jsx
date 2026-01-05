import './App.css'
import { useState } from 'react'


function App() {
  const [recipeURL, setRecipeURL] = useState('')
  let localURL = `http://127.0.0.1:8000/get_pdf?url=${recipeURL}`

  const getPDF = (event) => {
    event.preventDefault()
    console.log(recipeURL)
    console.log(localURL)
    setRecipeURL('')
  }

  return (
    <>
      <div>
        <h1>Recipe PDF Generator</h1>
        <form onSubmit={getPDF}>
          <input value={recipeURL} type="text" onChange={(e) => setRecipeURL(e.target.value)} placeholder='Enter URL'/>
          <button type='submit'>Search</button>
        </form>
      </div>
    </>
  )
}

export default App
