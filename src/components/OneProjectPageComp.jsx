import React, { useState } from 'react'
import '../css/one-project-page-comp.css'
import CallToAction from '../components/CallToAction'
// import project_image from '../assets/images/job.jpg'

import Spinner from './Spinner'

const OneProjectPageComp = ({ project }) => {

  const [loading, setLoading] = useState(true)

  setInterval(() => {
    setLoading(false)
  }, 5000);

  return (


    <div>
      <div className='one-project-page'>
        {
          loading ? (
            <>
              <Spinner whatsLoading={'Project'} status={'Please wait'} />
            </>
          ) : (
            <>
              <div>
                <div className='top-level'>
                  <h2>{project.name}</h2>

                  <img src={project.image} alt="This is the project image lol" />
                </div>

                {
                  project.paragraphs?.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))
                }

                <span>To view the live version of this project,</span>   <span><a href={project.link}>Click here</a></span>
              </div>

            </>
          )
        }
      </div>

        {/* <CallToAction /> */}

    </div>





  )
}

export default OneProjectPageComp