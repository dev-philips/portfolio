// DEPENDENCIES AND TOOLS
import React, { useEffect, useState } from 'react'
import axios from 'axios'

//COMPONENTS
import OtherHero from '../components/OtherHero'
import ExperienceComp from '../components/ExperienceComp'
import OneExperience from '../components/OneExperience'
import CallToAction from '../components/CallToAction'
import EducationComp from '../components/EducationComp'
import OneEducation from '../components/OneEducation'
import ContactComp from '../components/ContactComp'

//EXTRAS
import Spinner from '../components/Spinner'
import verified_image from '../assets/images/verified-2.png'
import LongTalk from '../components/LongTalk'


const AboutMe = () => {

  const [networkError, setNetworkError] = useState(false)

  const [educations, setEducation] = useState([])

  const [loadingEducation, setLoadingEducation] = useState(false)

  //THE CODE BELOW IS USED TO FETCH EDUCATION
  
  const fetchEducation = async () => {

    const api = 'https://api.jsonbin.io/v3/b/6728b681acd3cb34a8a26161'

    try {
      setLoadingEducation(true)
      const response = await axios.get(api)
      const allEducation = response.data.record.education
      setEducation(allEducation)
      
      setTimeout(() => {
        setLoadingEducation(false)
      }, 5000);
      
    } catch (error) {

      await new Promise((resolve) => setTimeout(resolve, 2000));

      try {

        const response = await axios.get(api)
        const allEducation = response.data.record.education
        setEducation(allEducation)
        
      } catch (error) {
        setNetworkError(true)
      }
    }
    
  }

  useEffect(() => {
    fetchEducation()
  }, [])



  // THE CODE BELOW IS USED TO FETCH EXPERIENCES
  
  const [experiences, setExperiences] = useState([])
  const [loadingExperience, setLoadingExperiences] = useState(false)

  const fetchExperience = async () => {
    const api = 'https://api.jsonbin.io/v3/b/6728b681acd3cb34a8a26161'

    try {
      setLoadingExperiences(true)
      const response = await axios.get(api)
      const allExperiences = response.data.record.experiences
      setExperiences(allExperiences)

      setTimeout(() => {
        setLoadingExperiences(false)
      }, 5000);

    } catch (error) {

      await new Promise((resolve) => setTimeout(resolve, 2000));

      try {
        setLoadingExperiences(true)
        const response = await axios.get(api)
        const allExperiences = response.data.record.experiences
        setExperiences(allExperiences)
        
        setTimeout(() => {
          setLoadingExperiences(false)
        }, 5000);
        
      } catch (error) {
        setNetworkError(true)
      }
    }
  }

  useEffect(() => {
    fetchExperience()
  }, [])


  return (
    <>
      <OtherHero theText={`Hi, I’m Edun Philips, a 99 Years Old Frontend Developer from Ibadan, Nigeria. I'm Passionate about creating visually stunning, intuitive, and highly functional web experiences that enhance user interaction and solve real-world problems.`} theSub={'Available for projects'} theImg={verified_image} />
      

      <LongTalk talk1={'Over the years, I’ve honed my skills in creating seamless, pixel-perfect interfaces while keeping performance and accessibility top of mind. I’m constantly exploring new tools and technologies, such as Tailwind CSS and TypeScript, to ensure I’m delivering cutting-edge solutions.'} talk2={'Beyond the code, I thrive on solving complex problems, optimizing workflows, and working closely with designers and developers to build web applications that not only function flawlessly but also deliver an exceptional user experience.'} color={'white'} size={'20'} />

      <EducationComp>

        {
          loadingEducation ? (
            <>
              <Spinner whatsLoading={'Education'} status={`${ networkError ? 'Please check your internet connection' : 'Please wait' }`} />
            </>
          ) : (
            <>
              {
                educations.map((education, index) => {
                  return (
                    <OneEducation key={index} education={education} />
                  )
                })
              }
            </>
          )
        }

      </EducationComp>

      <ExperienceComp>
        {
          loadingExperience ? (
            <>
              <Spinner whatsLoading={'Experiences'} status={`${ networkError ? 'Please check your internet connection' : 'Please wait' }`}  />
            </>
          ) : (
            <>
              {
                experiences.map((experience, index) => {
                  return (
                    <>
                      <OneExperience key={index} experience={experience} />
                    </>
                  )
                })
              }
            </>
          )
        }
      </ExperienceComp>

      <ContactComp id="hire-me" />

      <CallToAction />
    </>
  )
}

export default AboutMe