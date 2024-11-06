//Tools and Dependencies
import React from 'react'

//COMPONENTS
import ToolsComp from '../components/ToolsComp'
import OneTool from '../components/OneTool'
import CallToAction from '../components/CallToAction'


//EXTRAS
import html_icon from '../assets/images/tool.png'
import js_icon from '../assets/images/javascript.png'
import css_icon from '../assets/images/css.png'
import git_icon from '../assets/images/git.png'
import api_icon from '../assets/images/api.png'

const Tools = () => {
  return (
    <>

      <ToolsComp>
        <OneTool toolImage={ html_icon } toolName={'HTML/CSS & Responsive Design'} toolDescr={'Proficient in creating structured, responsive layouts with HTML5, CSS3 (including Flexbox, Grid), and ensuring mobile-first, adaptive designs across various devices.'}  />

        <OneTool toolImage={ js_icon } toolName={'JavaScript (ES6+) & Frameworks'} toolDescr={'Strong command of modern JavaScript, including DOM manipulation and event handling, with experience in React.js and Vue.js for component-based development and state management.'} />

        <OneTool toolImage={ css_icon } toolName={'CSS Framework & Figma'} toolDescr={'Knowledgeable in using CSS frameworks like Bootstrap or Tailwind for faster UI development and translating design mockups from Figma into functional user interfaces.'} />

        <OneTool toolImage={ api_icon } toolName={'API Integration & Asyncronous Operations'} toolDescr={'Experience in integrating RESTful APIs, handling asynchronous operations, and managing data from external services.'} />

        <OneTool toolImage={ git_icon } toolName={'Git & Github'} toolDescr={'Managing version control efficiently with Git, collaborating through GitHub, and showcasing projects with a clear commit history and proper branching.'} />
    
      </ToolsComp>
      
      <CallToAction />
    </>
  )
}

export default Tools