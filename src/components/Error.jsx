import React from 'react'
import './Error.css'

const Error = () => {
  return (
    <div id='errorMessageContainer'>
        <h2 className='errorHeading2'>ERROR! Was not able to received data from URL</h2>
        <h4 className='errorHeading4'>Please try again with a new URL</h4>
    </div>
  )
}

export default Error