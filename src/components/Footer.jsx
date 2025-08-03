//DEPENDENCIES AND TOOLS
import React, { useRef, useState } from 'react'

import emailjs from '@emailjs/browser'

//EXTRAS
import lite_spark from '../assets/images/lite_spark.png'

//COMPONENTS
import '../css/footer.css'
import { Link } from 'react-router-dom'


const Footer = () => {
  const emailRef = useRef()

  const [submitedEmail, setSubmitedEmail] = useState(false)
  const [submiting, setSubmiting] = useState(false)


  const handleSubmit = (e) => {
    e.preventDefault()

    try {
      setSubmiting(true)

      emailjs.sendForm('service_sx7tqx4', 'template_9c4q13a', emailRef.current, '37C25JUTR-ncVG2C-')
      .then((result) => {console.log('Submited')

        setTimeout(() => {
          setSubmitedEmail(true)
        }, 5000);

        setTimeout(() => {
          setSubmiting(false)
        }, 5000);

      })
      .catch((error) => {console.log('Failed to submit email', error)})

    } catch (error) {
      console.log('Error submiting Email', error);
    }
  }


  return (
    <div className='footer'>
      <div className="footer-inner">
        <div className='footer-main'>
          <div className='footer-top'>
            <p>Subscribe to my mothly newsletter about Tech, Arts and Life.</p>
            <form  ref={emailRef} onSubmit={handleSubmit}>
              <input type="text" name='email' placeholder='Enter Your Email' required />
              <button type='submit'>
                
                {
                  submitedEmail ? (
                    <>
                      Subscribed
                    </>
                  ) : submiting ? (
                    <>
                      <i className='bx bx-loader spin-loader' ></i>
                    </>
                  ) : (
                    <>
                      Subscribe
                    </>
                  )
                }
                
                
              </button>
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
                <li><a href="https://react.dev/">ReactJS</a></li>
                <li><a href="https://vuejs.org/">VueJS</a></li>
                <li><a href="https://www.mongodb.com/">MongoDB</a></li>
                <li><a href="https://expressjs.com/">ExpressJs</a></li>
                <li><a href="https://www.w3schools.com/js/js_intro.asp">JavaScript</a></li>
                <li><a href="https://nodejs.org/en">NodeJs</a></li>
              </ul>
            </div>


            <div className='f-link-row'>
              <p>Socials</p>

              <ul>
                <li><a href="https://www.x.com/philips_of_ng">{ `X [Twitter]` }</a></li>
                <li><a href="https://www.github.com/philips-of-ng">GitHub</a></li>
                <li><a href="https://www.instagram.com/philips_edun">Instagram</a></li>
                <li><a href="www.youtube.com/philipstv">Youtube</a></li>
                <li><a href="https://www.linkedin.com/in/philips-edun-41613a295/">LinkedIn</a></li>
              </ul>
            </div>

            <div className='f-link-row'>
              <p>Quick Links</p>

              <ul>
                <li><Link to={'/projects'}>Projects</Link></li>
                <li><Link to={'/about-me'}>About me</Link></li>
                <li><Link to={'/tools'}>Tools</Link></li>
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
          <p><i className='bx bx-copyright' ></i>  Philips O. Edun || Built with  <i className='bx bx-heart'></i></p>
        </div>
      </div>
    </div>
  )
}

export default Footer