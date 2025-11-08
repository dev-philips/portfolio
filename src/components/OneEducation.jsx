import React from 'react'
import '../css/one-education.css'
import FlyInDiv from './FlyInDiv'

const OneEducation = ({ education }) => {
  return (
    <FlyInDiv direction='left' delay={0.8} className='one-education'>
      <div className='oe-dot'>

      </div>

      <div className='oe-text'>
        <h5>{ education.certificate }</h5>
        <p>{ education.institution }</p>
        <p>{ education.duration }</p>
      </div>
    </FlyInDiv>
  )
}

export default OneEducation