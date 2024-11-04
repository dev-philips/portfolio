import React from 'react'
import '../css/experience-comp.css'

const ExperienceComp = ({children}) => {
  return (

    <div className="experience-comp">
      <div className="exp-comp-head">
        <h2>Experience</h2>
        <p>I have hands-on experience developing clean, responsive websites and web applications using modern front-end technologies.</p>
      </div>


      <div className="h-s3-main">

        
        {children}


      </div>
    </div>

  )
}

export default ExperienceComp