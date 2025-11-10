//TOOLS
import React from 'react'

//COMPONENTS
import '../css/one-tool.css'

//EXTRAS
import api_icon from '../assets/images/api.png'
import FlyInDiv from './FlyInDiv'

const OneTool = ({ toolImage, toolName, toolDescr }) => {
  return (
    <FlyInDiv direction='left' delay={0.8} className='one-tool'>
      <div className='ot-img-div'>
        <img src={ toolImage } alt="" />
      </div>

      <div className='ot-text-div'>
        <h5>{ toolName }</h5>

        <p>{ toolDescr }</p>
      </div>
    </FlyInDiv>
  )
}

export default OneTool