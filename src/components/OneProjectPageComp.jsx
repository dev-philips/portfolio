import React from 'react'
import '../css/one-project-page-comp.css'

import project_image from '../assets/images/job.jpg'

const OneProjectPageComp = ({ project }) => {


  if (!project) {
    return <>
      <p>Loading Project....</p>
    </>
  }

  return (
    <div className='one-project-page'>

      <div className='top-level'>
        <h2>{ project.name }</h2>

        <img src={project_image} alt="This is the project image lol" />
      </div>


      <p>{ project.paragraphOne }</p>

      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae eum sunt earum officiis illo dolorem fugiat. Odit enim dicta nisi autem, quos maiores dolor nihil quisquam beatae illo, tempora necessitatibus doloremque quo soluta id? Similique ex excepturi pariatur quia exercitationem?</p>

      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et voluptas mollitia autem placeat perspiciatis quis fugiat suscipit exercitationem porro commodi, inventore rerum ab aut repellendus reiciendis, eius, sed necessitatibus earum modi. Praesentium laborum illo nihil, numquam quidem consectetur alias perspiciatis atque voluptatem tenetur, est doloribus laudantium sit labore, placeat deserunt.</p>

      Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque voluptatum optio placeat molestias. Atque omnis blanditiis quia officiis voluptatem, eveniet est minima enim quibusdam aliquid!

      <span>To view the live version of this project,</span>   <span><a href="#">Click here</a></span>
    </div>
  )
}

export default OneProjectPageComp