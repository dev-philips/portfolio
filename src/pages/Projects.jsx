//DEPENDENCIES AND TOOLS
import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'

//COMPONENTS
import OtherHero from '../components/OtherHero'
import FakeWAP from '../components/FakeWAP'
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

    const api = 'https://api.jsonbin.io/v3/b/6735ce36e41b4d34e4543d34'
    const apiKey = '$2a$10$30xtUuMAzq12Czec931me.xyVO8.7lHdJT40ZPgsWQP9FtSnPneQC'

    const headers = {
      'Content-Type': 'application/json',
      'X-Master-Key': apiKey
    }

    try {
      setLoadingProjects(true)
      const response = await axios.get(api, {
        headers: {
          'X-Master-Key': `${apiKey}`
        }
      })
      const allProjects = await response.data.record.record
      console.log(allProjects);
      
      setProjects(allProjects)

      setTimeout(() => {
        setLoadingProjects(false)
      }, 5000);

    } catch (error) {

      await new Promise((resolve) => setTimeout(resolve, 2000));

      try {
        setLoadingProjects(true)
        const response = await axios.get(api, {
          headers: {
            'X-Master-Key': `${apiKey}`
          }
        })
        const allProjects = await response.data.record
        setProjects(allProjects)

        setTimeout(() => {
          setLoadingProjects(false)
        }, 5000);
      } catch (secondError) {
        setConnectionError(true)
      }

    }
  }

  useEffect(() => {
    fetchProjects()
  }, [])

  return (
    <div>
      <OtherHero pageTitle={'Hey there!'} theText={`I'm Philips, a Frontend Developer with a knack for seamless and engaging user experiences.`} theSub={'Check out some of my projects'} theImg={folder_image} />


      {
        loadingProjects ? (
          <>
            <FakeWAP>
              <Spinner whatsLoading={'Projects'} status={'Please wait'} />
            </FakeWAP>
          </>
        ) : connectionError ? (
          <>
            <FakeWAP>
              <Spinner whatsLoading={'Projects'} status={'Please check your internet connection'} />
            </FakeWAP>
          </>
        ) : (
          <WorksAndProjects>
            {
              projects.map((project, index) => {
                return (
                  <>
                    <OneProject project={project} key={index} />
                  </>
                )
              })
            }
          </WorksAndProjects>
        )
      }


      <CallToAction />
    </div>
  )
}

export default Projects