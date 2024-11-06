import React from 'react'
import '../css/spinner.css'
const Spinner = ({ whatsLoading, status }) => {
  return (
    <div className='spinner-container'>
      
      <div>
        <div className='spinner'>

        </div>

        <p>{`Loading ${whatsLoading}... ${status}`}</p>
      </div>

    </div>
  )
}

export default Spinner