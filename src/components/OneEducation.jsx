import React from 'react'
import '../css/one-education.css'

const OneEducation = ({ education }) => {
  return (
    <div className='one-education'>
      <div className='oe-dot'>

      </div>

      <div className='oe-text'>
        <h5>{ education.certificate }</h5>
        <p>{ education.institution }</p>
        <p>{ education.duration }</p>
      </div>
    </div>
  )
}

export default OneEducation