import React, { useEffect, useState } from 'react'
import HomeHero from '../components/HomeHero'
import WorksAndProjects from '../components/WorksAndProjects'
import OneProject from '../components/OneProjects'
import ExperienceComp from '../components/ExperienceComp'
import OneExperience from '../components/OneExperience'

import axios from 'axios'
import Spinner from '../components/Spinner'

const HomePage = () => {

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
    <>
      <HomeHero />
      <WorksAndProjects>
        {
          loadingProjects ? (
            <>
              <Spinner whatsLoading={'Projects'} />
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
        <OneExperience />
        <OneExperience />
        <OneExperience />
      </ExperienceComp>
    </>
  )
}

export default HomePage