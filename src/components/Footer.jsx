//DEPENDENCIES AND TOOLS
import React, { useRef, useState } from 'react'
import '../css/footer.css'
import emailjs from '@emailjs/browser'

//EXTRAS
import lite_spark from '../assets/images/lite_spark.png'


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
            <form onSubmit={handleSubmit}>
              <input type="text" ref={emailRef} placeholder='Enter Your Email' />
              <button type='submit'>
                Subscribe
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
          <p><i className='bx bx-copyright' ></i>  Philips O. Edun || Built with  <i className='bx bxs-heart'></i></p>
        </div>
      </div>
    </div>
  )
}

export default Footer