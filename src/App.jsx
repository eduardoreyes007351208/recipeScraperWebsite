import './App.css'
import { useState } from 'react'


function App() {
  const [recipeURL, setRecipeURL] = useState('')
  const params = new URLSearchParams({
    url: recipeURL,
  })
  let apiURL = `https://recipescraper-zs61.onrender.com/get_pdf?${params}`
  let localURL = `http://127.0.0.1:8000/get_pdf?${params}`

  const getPDF = async (event) => {
    event.preventDefault()
    try {
      const res = await fetch(apiURL);
      const blob = res.blob()
      
    } catch (err) {
      console.error('Error fetching PDF: ', err
      )
    }
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
