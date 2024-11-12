import React from 'react'
import '../css/error-page.css'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className='error-page'>
      <div>
        <h1><i class='bx bx-sad'></i></h1>
        <h2>404 Not Found</h2>
        <p>The page you are looking for does not exist</p>

        <span>Click <Link to={'/'}>here</Link> to go back to the homepage</span>
      </div>
    </div>
  )
}

export default NotFound