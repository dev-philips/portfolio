import React from 'react'
import '../css/one-experience.css'

const OneExperience = ({ experience }) => {
  return (
    <div className="one-exper mb-4">
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
    </div>
  )
}

export default OneExperience