import React from 'react'
import '../css/call-to-action.css'
import puzzle_image from '../assets/images/puzzle.png'
import { Link } from 'react-router-dom'

const CallToAction = () => {

  return (
    <div className="call-to-action">
      <div className="cta-text">
        <h4>
          Your next big project deserves a flawless web experience.
        </h4>

        <p>Send me a message and let's make it happen.</p>

        <Link to={'/book-a-call'} className="call-btn">Let's Talk</Link>
      </div>

      <div className="cta-img">
        <img className='animate__animated animate__pulse animate__infinite infinite animate__slower' src={puzzle_image} alt="" />
      </div>
    </div>
  )
}

export default CallToAction