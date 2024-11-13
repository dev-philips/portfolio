//Dependencies
import React, { useEffect, useState } from 'react'
import axios from 'axios'

//Components
import HomeHero from '../components/HomeHero'
import WorksAndProjects from '../components/WorksAndProjects'
import OneProject from '../components/OneProjects'
import ExperienceComp from '../components/ExperienceComp'
import OneExperience from '../components/OneExperience'
import CallToAction from '../components/CallToAction'
import Spinner from '../components/Spinner'
import FakeWAP from '../components/FakeWAP'

const HomePage = () => {

  const [internetError, setInternetError] = useState(false)

  const [projects, setProjects] = useState([])
  const [loadingProjects, setLoadingProjects] = useState(false)

  const fetchProjects = async () => {

    const api = 'https://api.jsonbin.io/v3/b/6728b681acd3cb34a8a26161'

    try {
      setLoadingProjects(true)
      const response = await axios.get(api)
      const allProjects = await response.data.record.projects

      setProjects(allProjects)

      setTimeout(() => {
        setLoadingProjects(false)
      }, 5000);

    } catch (error) {

      await new Promise((resolve) => setTimeout(resolve, 2000));

      try {
        setLoadingProjects(true)
        const response = await axios.get(api)
        const allProjects = await response.data.record.projects

        setProjects(allProjects)

        setTimeout(() => {
          setLoadingProjects(false)
        }, 5000);
      } catch (secondError) {
        console.log('Failed to fetch projects after retrying', secondError);
        setInternetError(true)
      }

    }
  }

  useEffect(() => {
    fetchProjects()
  }, [])

  

  //THE FOLLOWING CODE IS USED TO FETCH EXPERINCES

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
        setInternetError(true)
      }
    }
  }

  useEffect(() => {
    fetchExperience()
  }, [])

 
  return (
    <>
      <HomeHero />

      {
        loadingProjects ? (
          <>
            <FakeWAP>
              <Spinner whatsLoading={'Projects'} status={'Please wait'} />
            </FakeWAP>
          </>
        ) : internetError ? (
          <>
            <FakeWAP>
              <Spinner whatsLoading={'Projects'} status={'Please check your internet connection'} />
            </FakeWAP>
          </>
        ) : (
          <>
            <WorksAndProjects>
              {
                loadingProjects ? (
                  <>
                    <Spinner whatsLoading={'Projects'} status={'Please wait'} />
                  </>
                ) : (
                  <>
                    {
                      projects.map((project, index) => {
                        return (
                          <OneProject project={project} key={index} />
                        )
                      })
                    }
                  </>
                )
              }
            </WorksAndProjects>
          </>
        )
      }


      <ExperienceComp>
        {
          loadingExperience ? (
            <>
              <Spinner whatsLoading={'Experiences'} status={`${internetError ? 'Please check your internet connection' : 'Please wait'}`} />
            </>
          ) : (
            <>
              {
                experiences.map((experience, index) => {
                  return (
                    <>
                      <OneExperience experience={experience} />
                    </>
                  )
                })
              }
            </>
          )
        }
      </ExperienceComp>

      <CallToAction />
    </>
  )
}

export default HomePage