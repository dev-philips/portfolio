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


const AboutMe = () => {

  const [educations, setEducation] = useState([])

  const [loadingEducation, setLoadingEducation] = useState(false)

  const fetchEducation = async () => {

    const api = 'https://api.jsonbin.io/v3/b/6728b681acd3cb34a8a26161'

    try {
      setLoadingEducation(true)
      const response = await axios.get(api)
      const allEducation = response.data.record.education
      console.log(allEducation);
      setEducation(allEducation)
      console.log('Fetched Education:', educations);
      
      setTimeout(() => {
        setLoadingEducation(false)
      }, 5000);
      
    } catch (error) {
      console.log('Error fetching education on first trial:', error);

      await new Promise((resolve) => setTimeout(resolve, 2000));

      try {
        const response = await axios.get(api)
        const allEducation = response.data.record.education
        console.log(allEducation);
        setEducation(allEducation)
        console.log('Fetched Education on 2nd trial:', educations);
        
      } catch (error) {
        console.log('Unable to fetch education on second trial:', error);
      }
    }
    
  }

  useEffect(() => {
    fetchEducation()
  }, [])

  return (
    <>
      <OtherHero theText={`Hi, I’m Edun Philips, a 92 Years Old Frontend Developer from Ibadan, Nigeria. I'm Passionate about creating visually stunning, intuitive, and highly functional web experiences that enhance user interaction and solve real-world problems.`} theSub={''} theImg={verified_image} />
      
      <EducationComp>

        {
          loadingEducation ? (
            <>
              <Spinner whatsLoading={'Education'} />
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
        <OneExperience />
        <OneExperience />
        <OneExperience />
        <OneExperience />
      </ExperienceComp>

      <ContactComp />

      <CallToAction />
    </>
  )
}

export default AboutMe