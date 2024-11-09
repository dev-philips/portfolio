import React from 'react'
import '../css/oneproject.css'
import work_image from '../assets/images/job.jpg'

import { useNavigate } from 'react-router-dom'

const OneProject = ({ project }) => {

  const Navigate = useNavigate()

  const handleClick = () => {
    const path = `/projects/:${project.id}`
    Navigate(path)
  }

  return (
    <div className="one-work-card" onClick={handleClick}>
      <div className="owc-img">

        <img src={ project.image ? project.image : work_image } alt="" />

      </div>

      <div className="owc-text">

        <div>
          <p>{ project.name }
            <span><i className='bx bxs-chevron-right'></i></span>
          </p>
          <span>{ project.stack }</span>
          
        </div>

      </div>
    </div>
  )
}

export default OneProject
