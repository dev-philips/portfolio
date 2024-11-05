//DEPENDENCIES AND TOOLS
import React from 'react'

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
  return (
    <div className='contact-comp'>
      <div className='cc-head'>
        <h2>Contact me</h2>
      </div>

      <div className='cc-main'>
        <a href="tel:+2348146817725" className='one-c-link'><img src={phone_icon} alt="" /> +234 8146817725</a>


        <a href="tel:+2348146817725" className='one-c-link'><img src={whatsapp_icon} alt="" /> +234 8129248289</a>

        <a href="tel:+2348146817725" className='one-c-link'><img src={instagram_icon} alt="" /> dev_philips</a>

        <a href="tel:+2348146817725" className='one-c-link'><img src={email_icon} alt="" /> philipsedun@gmail.com</a>

        <a href="tel:+2348146817725" className='one-c-link'><img src={twitter_icon} alt="" /> philips_of_ng</a>

        <a href="tel:+2348146817725" className='one-c-link'><img src={facebook_icon} alt="" /> Philips Olorunwa Edun</a>
      </div>


      <form className='cc-message' action="">
        <div>
          <input type="text" placeholder='Send a quick message from here' />
          <button><img src={send_icon} alt="" /></button>
        </div>
      </form>
    </div>
  )
}

export default ContactComp