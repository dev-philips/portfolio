//TOOLS
import React from 'react'
import '../css/tools-comp.css'

const ToolsComp = ({ children }) => {
  return (
    <div className='tools-comp'>
      <div className='tc-head'>
        <h4>Skills, Tools & Technologies</h4>
        <p>Check out some of the tools I use for my workflow.</p>
      </div>

      <div className='tc-main'>
        { children }
      </div>

    </div>
  )
}

export default ToolsComp