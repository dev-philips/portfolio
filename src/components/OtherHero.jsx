import React from 'react'
import '../css/other-hero.css'
import FlyInDiv from './FlyInDiv'

const OtherHero = ({pageTitle, theText, theSub, theImg, theGradText, imgSize}) => {
  
  return (
    <div className="home-hero">

      <FlyInDiv direction='left' className="the-text">
        <h5 className='mb-5'>{ pageTitle }</h5>

        <h3>{theText}</h3>

        <p className="available"><span></span>{ theSub }</p>

        
      </FlyInDiv>

      <FlyInDiv direction='right' className="the-img">
        <img style={{width: `${imgSize}`}} src={theImg} alt="" />
      </FlyInDiv>

    </div>
  )
}

export default OtherHero