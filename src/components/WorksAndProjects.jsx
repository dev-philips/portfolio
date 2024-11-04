import React from 'react'
import '../css/works-and-projects.css'

const WorksAndProjects = ({children}) => {
  return (
    <div className="home-section-two">

      <div className="h-s2-head">
        <h2>Works & Projects</h2>
        <p>Check out some of my projects where I’ve crafted sleek, responsive websites and web applications.</p>
      </div>


      <div className="h-s2-main">

        {children}

        {/* THIS IS SUPPOSE TO CONTAIN THE CHILDREN THAT IS, THE PROJECTS */}
        {/* THIS IS SUPPOSE TO CONTAIN THE CHILDREN THAT IS, THE PROJECTS */}
        {/* THIS IS SUPPOSE TO CONTAIN THE CHILDREN THAT IS, THE PROJECTS */}

      </div>


      <div className="h-s2-footer">
        <p>Want to see more?</p> 
        <a className="" href="#">Click here</a>
      </div>


    </div>
  )
}

export default WorksAndProjects