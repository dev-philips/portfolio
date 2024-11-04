import React from 'react'
import '../css/spinner.css'
const Spinner = ({ whatsLoading }) => {
  return (
    <div className='spinner-container'>
      
      <div>
        <div className='spinner'>

        </div>

        <p>{`Loading ${whatsLoading}... please wait`}</p>
      </div>

    </div>
  )
}

export default Spinner