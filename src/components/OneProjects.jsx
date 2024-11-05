import React from 'react'
import '../css/oneproject.css'
import work_image from '../assets/images/job.jpg'

const OneProject = ({ project }) => {
  return (
    <div className="one-work-card">
      <div className="owc-img">
        <img src={ work_image } alt="" />
      </div>

      <div className="owc-text">
        <div>
          <p>{ project.name }
            <span><i className='bx bxs-chevron-right'></i></span>
          </p>
          <span>{ project.stack }</span>
          {/* <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit eveniet nisi alias voluptatem consequuntur id!</p> */}
        </div>

      </div>
    </div>
  )
}

export default OneProject
