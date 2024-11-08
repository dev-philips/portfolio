//DEPENDENCIES AND TOOLS
import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'

//COMPONENTS
import OtherHero from '../components/OtherHero'
import WorksAndProjects from '../components/WorksAndProjects'
import OneProject from '../components/OneProjects'
import Spinner from '../components/Spinner'
import CallToAction from '../components/CallToAction'

//EXTRAS
import folder_image from '../assets/images/folder-2.png'

const Projects = () => {

  const [projects, setProjects] = useState([])
  const [loadingProjects, setLoadingProjects] = useState(false)
  const [connectionError, setConnectionError] = useState(false)

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
        setConnectionError(true)
      }

    }
  }

  useEffect(() => {
    fetchProjects()
  }, [])

  useEffect(() => {
    console.log('Updated Projects in State:', projects);
  }, [projects]);



  return (
    <div>
      <OtherHero pageTitle={'Hey there!'} theText={`I'm Philips, a Frontend Developer with a knack for seamless and engaging user experiences.`} theSub={'Check out some of my projects'} theImg={ folder_image } />

      <WorksAndProjects>
        {
          loadingProjects ? (
            <>
              <Spinner whatsLoading={'Projects'} status={`${ connectionError ? 'Please check your internet connection' : 'Please wait' }`}  />
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

      <CallToAction />
    </div>
  )
}

export default Projects