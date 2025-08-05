//DEPENDENCIES AND TOOLS
import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'

//COMPONENTS
import '../css/contact-comp.css'

//EXTRAS
import phone_icon from '../assets/images/phone.png'
import whatsapp_icon from '../assets/images/whatsapp.png'
import email_icon from '../assets/images/email.png'
import facebook_icon from '../assets/images/facebook.png'
import instagram_icon from '../assets/images/instagram.png'
import twitter_icon from '../assets/images/twitter.png'
import send_icon from '../assets/images/send.png'


const ContactComp = () => {

  const [sentMessage, setSentMessage] = useState(false)
  const [sendingMessage, setSendingMessage] = useState(false)

  const messageRef = useRef()

  const handleSend = (e) => {
    e.preventDefault()

    try {

      setSendingMessage(true)

      emailjs.sendForm()

      emailjs.sendForm("service_sx7tqx4", "template_wonl12j", messageRef.current, '37C25JUTR-ncVG2C-')
        .then((result) => {
          console.log('Sent')
          setSentMessage(true)

          setTimeout(() => {
            setSendingMessage(false)
          }, 5000);

          setTimeout(() => {
            setSentMessage(false)
          }, 5000);

        })
        .catch((error) => console.log('Failed to send message...', error))
        .finally(() => {
          
        })
    } catch (error) {
      console.log('Error submiting email', error);
    }
  }

  return (
    <div className='contact-comp'>
      <div className='cc-head'>
        <h2>Contact me</h2>
      </div>

      <div className='cc-main'>
        <a href="tel:+2348146817725" target='_blank' className='one-c-link'><img src={phone_icon} alt="" /> +234 8146817725</a>


        <a href="https://wa.me/08129248289" target='_blank' className='one-c-link'><img src={whatsapp_icon} alt="" /> +234 8146817725</a>

        <a href="https://www.instagram.com/philips_edun" target='_blank' className='one-c-link'><img src={instagram_icon} alt="" /> philips_edun</a>

        <a href="mailto:philipsedun@gmail.com" target='_blank' className='one-c-link'><img src={email_icon} alt="" /> philipsedun@gmail.com</a>

        <a href="https://www.x.com/philips_of_ng" target='_blank' className='one-c-link'><img src={twitter_icon} alt="" /> philips_of_ng</a>

      </div>


      <form ref={messageRef} className='cc-message' onSubmit={handleSend}>
        <div>
          <input type="text" name='message' placeholder='Send a quick message from here' required />
          <button type="submit">

            {
              sentMessage ? (
                <>
                  <i className='bx bx-check sent-check'></i>
                </>
              ) : sendingMessage ? (
                <>
                  <i class='bx bx-loader spin-loader' ></i>
                </>
              ) : (
                <>
                  <img src={send_icon} alt="" />
                </>
              )
            }

          </button>
        </div>
      </form>
    </div>
  )
}

export default ContactComp