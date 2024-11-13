//DEPENDENCIES
import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'

//COMPONENTS
import '../css/book-a-call.css'

const BookACall = () => {

  const formRef = useRef()

  const [messageError, setMessageError] = useState(false)
  const [sendingMessage, setSendingMessage] = useState(false)
  const [sentMessage, setSentMessage] = useState(false)

  const handleMessage = (e) => {
    e.preventDefault()

    try {
      setSendingMessage(true)

      emailjs.sendForm('service_sx7tqx4', 'template_wonl12j', formRef.current, '37C25JUTR-ncVG2C-')
      .then((result) => {
        
        setTimeout(() => {
          setSentMessage(true)
        }, 5000);

        setTimeout(() => {
          setSendingMessage(false)
        }, 5000);

      })
      .catch((error) => {
        setMessageError(true)
      })

      
    } catch (error) {
      setMessageError(true)
    }
    
  }


  return (
    <div className='book-a-call'>

      {/* <div className='the-modal'>
        <div className='modal-content'>
          <h1>Message Sent Successfully</h1>

          <button className='form-submit'>Close</button>
        </div>
      </div> */}


      <div className='call-form'>

        <h2>Reach me</h2>
        <p>Send a quick message or book a call</p>

        <form ref={formRef} onSubmit={handleMessage}>

          <div className='one-input'>
            <label htmlFor="name">Name:</label>
            <input type="text" name='from_name' id='name' placeholder='Enter your name' required />
          </div>

          <div className='one-input'>
            <label htmlFor="email">Email:</label>
            <input type="email" name='email' id='email' placeholder='Enter your email' required />
          </div>

          <div className='one-input'>
            <label htmlFor="email">{`Phone (Optional):`}</label>
            <input type="tel" name='phone' id='phone' placeholder='Enter your phone number' />
          </div>

          <div className='one-input'>
            <label htmlFor="message">Message:</label>
            <textarea name="message" placeholder='Enter your message e.g we need to collaborate on my next project' id="message" required >

            </textarea>
          </div>

          <button className='form-submit' type='submit'>
            {
              sendingMessage ? (
                <>
                  <i className='bx bx-loader spin-loader' ></i>
                </>
              ) : messageError ? (
                <>
                  <i className='bx bx-message-error sent-error'></i>
                </>
              ) : sentMessage ? (
                <>
                 <i className='bx bx-check sent-check'></i>
                </>
              ) : (
                <>
                  Send
                </>
              )
            }
          </button>

        </form>
      </div>
    </div>
  )
}

export default BookACall