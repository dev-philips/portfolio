import React, { useRef } from 'react'
import '../css/footer.css'

import lite_spark from '../assets/images/lite_spark.png'
import copyrights_img from '../assets/images/copyright.png'

const Footer = () => {
  const emailRef = useRef()

  const handleSubmit = () => {
    e.preventDefault()


  }


  return (
    <div className='footer'>
      <div className="footer-inner">
        <div className='footer-main'>
          <div className='footer-top'>
            <p>Subscribe to my mothly newsletter about Tech, Arts and Life.</p>
            <form action="">
              <input type="text" placeholder='Enter Your Email' />
              <button>Subscribe</button>
            </form>
          </div>

          <div className='footer-main-main'>

            <div className='f-logo f-logo-up'>
              <div className='f-logo-spec'>
                <img src={ lite_spark } alt="" />
                <p>Philips <br /> Edun</p>
              </div>
            </div>

            


            <div className='f-link-row'>
              <p>Tech Stack</p>

              <ul>
                <li><a href="">ReactJS</a></li>
                <li><a href="">VueJS</a></li>
                <li><a href="">MongoDB</a></li>
                <li><a href="">ExpressJs</a></li>
                <li><a href="">JavaScript</a></li>
                <li><a href="">NodeJs</a></li>
              </ul>
            </div>


            <div className='f-link-row'>
              <p>Socials</p>

              <ul>
                <li><a href="">{ `X [Twitter]` }</a></li>
                <li><a href="">Facebook</a></li>
                <li><a href="">GitHub</a></li>
                <li><a href="">Instagram</a></li>
                <li><a href="">Youtube</a></li>
                <li><a href="">LinkedIn</a></li>
                <li><a href="">GitHub</a></li>
              </ul>
            </div>

            <div className='f-link-row'>
              <p>Quick Links</p>

              <ul>
                <li><a href="">Projects</a></li>
                <li><a href="">Experiences</a></li>
                <li><a href="">About me</a></li>
              </ul>
            </div>



            <div className='f-logo f-logo-down'>
              <div className='f-logo-spec'>
                <img src={ lite_spark } alt="" />
                <p>Philips <br /> Edun</p>
              </div>
            </div>



          </div>
        </div>

        <div className='footer-footer'>
          <p><i className='bx bx-copyright' ></i>  Philips Olorunwa Edun || Built with  <i className='bx bxs-heart'></i></p>
        </div>
      </div>
    </div>
  )
}

export default Footer