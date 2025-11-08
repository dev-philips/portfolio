import React from 'react'
import '../css/oneproject.css'
import work_image from '../assets/images/job.jpg'

import { useNavigate } from 'react-router-dom'
import FlyInDiv from './FlyInDiv'

const OneProject = ({ project }) => {

  const Navigate = useNavigate()

  const handleClick = () => {
    const path = `/projects/:${project.id}`
    Navigate(path)
  }

  return (
    <FlyInDiv className="one-work-card" onClick={handleClick}>
      <div className="owc-img">

        <img src={ project.image ? project.image : work_image } alt="" />

      </div>

      <div className="owc-text">

        <div>
          <p>{ project.name }
            <span>{ project.inProgress ? (<><i title='Project in progress...' style={{color: 'greenyellow'}} className='bx bx-loader'></i></>) : '' } <i className='bx bxs-chevron-right'></i></span>
          </p>
          <span>{ project.stack }</span>
          
        </div>

      </div>
    </FlyInDiv>
  )
}

export default OneProject
