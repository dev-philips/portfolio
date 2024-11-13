import react from 'react'
import Spinner from '../components/Spinner'

const FakeWAP = ({ children }) => {
  return (
    <>
      <div className="works-and-projects">

        <div className="wap-head">
          <h2>Works & Projects</h2>
          <p>Check out some of my projects where I’ve crafted sleek, responsive websites and web applications.</p>
        </div>

        <div className="fake-wap-main">
          {
            children
          }
        </div>

      </div>
    </>
  )
}

export default FakeWAP