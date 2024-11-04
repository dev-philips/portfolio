import React from 'react'
import OtherHero from '../components/OtherHero'
import ExperienceComp from '../components/ExperienceComp'
import OneExperience from '../components/OneExperience'
import CallToAction from '../components/CallToAction'



import verified_image from '../assets/images/verified-2.png'
import EducationComp from '../components/EducationComp'

const AboutMe = () => {
  return (
    <>
      <OtherHero theText={`Hi, I’m Edun Philips, a 19 Years Old Frontend Developer from Ibadan, Nigeria. I'm Passionate about creating visually stunning, intuitive, and highly functional web experiences that enhance user interaction and solve real-world problems.`} theSub={''} theImg={verified_image} />
      
      <EducationComp>
        
      </EducationComp>

      <ExperienceComp>
        <OneExperience />
        <OneExperience />
        <OneExperience />
        <OneExperience />
      </ExperienceComp>

      <CallToAction />
    </>
  )
}

export default AboutMe