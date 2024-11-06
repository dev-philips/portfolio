import React, { useEffect, useState } from 'react'
import HomeHero from '../components/HomeHero'
import WorksAndProjects from '../components/WorksAndProjects'
import OneProject from '../components/OneProjects'
import ExperienceComp from '../components/ExperienceComp'
import OneExperience from '../components/OneExperience'
import CallToAction from '../components/CallToAction'

import axios from 'axios'
import Spinner from '../components/Spinner'

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
      console.log(allProjects);
      setProjects(allProjects)
      console.log('Fetched Projects', projects);

      setTimeout(() => {
        setLoadingProjects(false)
      }, 5000);

    } catch (error) {
      console.log('Error occured, retrying in 2 seconds');


      await new Promise((resolve) => setTimeout(resolve, 2000));

      try {
        setLoadingProjects(true)
        const response = await axios.get(api)
        const allProjects = await response.data.record.projects
        console.log(allProjects);
        setProjects(allProjects)
        console.log('Fetched Projects (2nd Trial)', projects);

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

  useEffect(() => {
    console.log('Updated Projects in State:', projects);
  }, [projects]);

  //THE FOLLOWING CODE IS USED TO FETCH EXPERINCES
  //THE FOLLOWING CODE IS USED TO FETCH EXPERINCES
  //THE FOLLOWING CODE IS USED TO FETCH EXPERINCES

  const [experiences, setExperiences] = useState([])
  const [loadingExperience, setLoadingExperiences] = useState(false)

  const fetchExperience = async () => {
    const api = 'https://api.jsonbin.io/v3/b/6728b681acd3cb34a8a26161'

    try {
      setLoadingExperiences(true)
      const response = await axios.get(api)
      const allExperiences = response.data.record.experiences
      console.log(allExperiences);
      setExperiences(allExperiences)
      console.log('Fetched Experiences on 1st trial:', experiences);

      setTimeout(() => {
        setLoadingExperiences(false)
      }, 5000);

    } catch (error) {
      console.log('Error fetching experiences on first trial:', error);

      await new Promise((resolve) => setTimeout(resolve, 2000));

      try {
        setLoadingExperiences(true)
        const response = await axios.get(api)
        const allExperiences = response.data.record.experiences
        console.log(allExperiences);
        setExperiences(allExperiences)
        console.log('Fetched experiences on 2nd trial:', experiences);
        
        setTimeout(() => {
          setLoadingExperiences(false)
        }, 5000);
        
      } catch (error) {
        console.log('Failed to fetch Experinces on second trial:', error);
      }
    }
  }

  useEffect(() => {
    fetchExperience()
  }, [])

  useEffect(() => {
    console.log('Updated experinces in the state', experiences);
  }, [])



  return (
    <>
      <HomeHero />
      <WorksAndProjects>
        {
          loadingProjects ? (
            <>
              <Spinner whatsLoading={'Projects'} status={ `${ internetError ? 'Please check your internet connection' : 'Please wait' }` } />
              {/* {
                internetError ? (
                  <>
                    <p>Please check your internet connection</p>
                  </>
                ) : (
                  <>
                    ''
                  </>
                )
              } */}
            </>
          ) : (
            <>
              {
                projects.map((project, index) => {
                  return (
                    <OneProject key={index} project={project} />
                  )
                })
              }
            </>
          )
        }


      </WorksAndProjects>

      

      <ExperienceComp>
        {
          loadingExperience ? (
            <>
             <Spinner whatsLoading={'Experiences'} status={ `${ internetError ? 'Please check your internet connection' : 'Please wait' }` } />
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