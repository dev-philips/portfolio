import React from 'react'
import '../css/one-experience.css'

const OneExperience = () => {
  return (
    <div className="one-exper mb-4">
      <div className="oe-left">

        <span className="green-dot"></span>

        <div>
          <p className="exp-company">EduRepublic</p>
          <span className="exp-role">Frontend Developer (Intern)</span>
          <br />
          <span className="exp-date d-md-none">Feb - June, 2024</span>
        </div>
      </div>

      <div className="oe-right">
        <span className="exp-date d-none d-md-block">Feb - June, 2024</span>
      </div>
    </div>
  )
}

export default OneExperience