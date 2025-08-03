import React, { useEffect, useState } from 'react'
import '../css/works-and-projects.css'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

const WorksAndProjects = ({ children }) => {

  const [inWapPage, setInWapPage] = useState(false)

  const location = useLocation().pathname



  const checkPage = () => {
    if (location == '/projects') {
      setInWapPage(true)
    }
  }

  useEffect(() => {
    checkPage()
  }, [location])


  return (
    <div className="works-and-projects">

      <div className="wap-head">
        <h2>Works & Projects</h2>
        <p>Check out some of my projects where I’ve crafted sleek, responsive websites and web applications.</p>
      </div>


      <div className="wap-main">

        {children}

        {/*THIS IS SUPPOSE TO CONTAIN THE CHILDREN THAT IS, THE PROJECTS*/}
      </div>


      {
        inWapPage ? (
          <>
          
          </>
        ) : (
          <>
            <div className="wap-footer">
              <p>Want to see more?</p>
              <Link className="" to="/projects">Click here</Link>
            </div>
          </>
        )
      }




    </div>
  )
}

export default WorksAndProjects