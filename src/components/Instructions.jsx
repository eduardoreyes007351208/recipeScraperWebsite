import React from 'react'
import './Instructions.css';

const Instructions = () => {
  return (
    <div id='instructDiv'>
      <h3>Instructions</h3>
      <ol>
        <li className='instructionItem'>Copy the link for the website you want to get the recipe from.</li>
        <li className='instructionItem'>Paste it into the search bar and click button.</li>
        <li className='instructionItem'>Give it a few moments for the website to get the recipe.</li>
        <li className='instructionItem'>The browser will automatically open a new tab with pdf <br /> and download the file.</li>
      </ol>
      <h5>
        <b>*Disclaimer*</b> <br /> 
        Not all websites have been tested and some will not work with the website. <br />
        If it did not work, a blank pdf or an incomplete pdf file will be generated.
      </h5>
    </div>
  )
}

export default Instructions