import React from 'react'
import '../css/other-hero.css'

const OtherHero = ({pageTitle, theText, theSub, theImg, theGradText, imgSize}) => {
  
  return (
    <div className="home-hero">

      <div className="the-text">
        <h5 className='mb-5'>{ pageTitle }</h5>

        <h3>{theText}</h3>

        <p className="available"><span></span>{ theSub }</p>

        
      </div>

      <div className="the-img">
        <img style={{width: `${imgSize}`}} src={theImg} alt="" />
      </div>

    </div>
  )
}

export default OtherHero