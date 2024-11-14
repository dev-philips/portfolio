import React, { useRef, useState } from 'react'

import '../../css/upload-info.css'
import NewProject from '../admin-components/NewProject'

const UploadInfo = () => {

  const [authorized, setAuthorized] = useState(false)
  const [verifying, setVerifying] = useState(false)
  const [accessDenied, setAccessDenied] = useState(false)

  const passwordRef = useRef()
  const modelPassword = 'thehighisglorious'

  const GrantAccess = (e) => {
    e.preventDefault()

    setVerifying(true)

    if (passwordRef.current.value == modelPassword) {

      setTimeout(() => {
        setAuthorized(true)
        setVerifying(false)
      }, 3000);

    } else {

      setTimeout(() => {
        setAccessDenied(true)
        setVerifying(false)

        setTimeout(() => {
          setAccessDenied(false)
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
                      <p style={{color: 'red'}}>Incorrect Password. Access Denied!</p>
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
                    <i className='bx bx-lock'></i>
                  </div>

                  <button type='submit'>
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