import React, { useRef, useState } from 'react'

import '../../css/upload-info.css'
import NewProject from '../admin-components/NewProject'

const UploadInfo = () => {

  const [authorized, setAuthorized] = useState(false)
  const [verifying, setVerifying] = useState(false)
  const [accessDenied, setAccessDenied] = useState(false)
  
  //AESTETHICS
  const [greenKey, setGreenKey] = useState('white-key')
  const [redKey, setRedKey] = useState('white-key')

  const passwordRef = useRef()
  const modelPassword = 'thehighisglorious'

  const GrantAccess = (e) => {
    e.preventDefault()

    setVerifying(true)

    if (passwordRef.current.value == modelPassword) {
      setGreenKey('green-key')

      setTimeout(() => {
        setAuthorized(true)
        setVerifying(false)
      }, 3000);

    } else {
      setRedKey('red-key')

      setTimeout(() => {
        setAccessDenied(true)
        setVerifying(false)

        setTimeout(() => {
          setAccessDenied(false)
          setRedKey('white-key')
        }, 5000);

      }, 2000);
      
    }

  }

  return (
    <>

      {
        authorized ? (
          <>
            <div>

              <div className='page-head'>
                <h2>Welcome, Admin.</h2>
              </div>


              <NewProject />
            </div>
          </>
        ) : (
          <>
            <div className='password-page'>
              <div>

                <h2>Welcome, Admin</h2>
                {
                  accessDenied ? (
                    <>
                      <p className='warning'>Incorrect Password. Access Denied!</p>
                    </>
                  ) : (
                    <>
                      <p>Please input password to access locked page...</p>
                    </>
                  )
                }

                
                
                <form onSubmit={GrantAccess}>
                  <div className='pw-input'>
                    <input ref={passwordRef} type="password" placeholder='Input Password' required />
                    <i className={`${greenKey == 'green-key' ? 'green-key' : redKey == 'red-key' ? 'red-key' : 'white-key'} bx bx-lock`}></i>
                  </div>

                  <button className='sec-btn' type='submit'>
                    {
                      verifying ? (
                        <>
                          <i className='bx bx-loader spin-loader' ></i>
                        </>
                      ) : (
                        <>Grant Access</>
                      )
                    }
                  </button>
                </form>
              </div>
            </div>
          </>
        )
      }


    </>
  )
}

export default UploadInfo