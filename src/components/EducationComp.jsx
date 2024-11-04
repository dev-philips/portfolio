import React from 'react'
import '../css/education-comp.css'

const EducationComp = ({ education }) => {
  return (
    <div className='education-comp'>
      <div className="ec-head">
        <h2>Education</h2>
      </div>

      <div className='ec-body'>
        {education}
      </div>
    </div>
  )
}

export default EducationComp