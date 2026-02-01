import "./App.css";
import { useState } from "react";
import Error from "./components/Error";

function App() {
  const [recipeURL, setRecipeURL] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorStatus, setErrorStatus] = useState(false);
  const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));
  console.log(loading)
  
  const params = new URLSearchParams({
    url: recipeURL,
  });
  let apiURL = `https://recipescraper-zs61.onrender.com/get_pdf?${params}`;
  let localURL = `http://127.0.0.1:8000/get_pdf?${params}`;

  const getPDF = async (event) => {
    event.preventDefault();
    
    try {
      setLoading(true)
      console.log(loading)

      await sleep(1000)

      const res = await fetch(apiURL);
      
      const blob = await res.blob();

      

      const contentDisposition = res.headers.get("Content-Disposition");
      let fileName = "file.pdf"; // fallback

      // look for the fileName in the header
      if (contentDisposition) {
        const match = contentDisposition.match(/filename="?([^"]+)"?/);
        if (match && match[1]) fileName = match[1];
      }

      const pdfURL = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = pdfURL;
      a.download = fileName;
      a.click()
      URL.revokeObjectURL(pdfURL)

      setLoading(false)
      setErrorStatus(false)


    } catch (err) {
      console.error("Error fetching PDF: ", err);
      setLoading(false)
      setErrorStatus(true)
    }
    setRecipeURL("");
  };

  return (
    <>
      <div id="apiContainer">
        <h3>Enter URL to search for recipe</h3>
        <form id="inputForm" onSubmit={getPDF}>
          <input
            className="inputField"
            value={recipeURL}
            type="text"
            onChange={(e) => setRecipeURL(e.target.value)}
            placeholder="Enter URL"
          />
          <button className="button" type="submit">
            {loading ? 'Searching for Recipe... ' : 'Search'}
            
          </button>
        </form>
        {errorStatus ? <Error/> : <div/>}
      </div>
    </>
  );
}

export default App;
