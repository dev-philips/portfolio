import React from 'react'
import '../css/one-experience.css'
import FlyInDiv from './FlyInDiv'

const OneExperience = ({ experience }) => {
  return (
    <FlyInDiv direction='left' delay={0.8} className="one-exper mb-4">
      <div className="oe-left">

        <span className="green-dot"></span>

        <div>
          <p className="exp-company">{ experience.company }</p>
          <span className="exp-role">{ experience.role }</span>
          <br />
          <span className="exp-date d-md-none">{ experience.duration }</span>
        </div>
      </div>

      <div className="oe-right">
        <span className="exp-date d-none d-md-block">{ experience.duration }</span>
      </div>
    </FlyInDiv>
  )
}

export default OneExperience