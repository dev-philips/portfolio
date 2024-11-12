import React, { useEffect, useState } from 'react'
import '../css/one-project-page.css'

import project_image from '../assets/images/job.jpg'

import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'

import OneProjectPageComp from '../components/OneProjectPageComp'
import Spinner from '../components/Spinner'

const OneProjectPage = () => {

  const navigate = useNavigate()

  const { projectId } = useParams()

  const theProjectId = Number(projectId.replaceAll(':', ''))

  const [fetchedProject, setFetchedProject] = useState([])
  const [loadingProject, setLoadingProject] = useState(false)


  const fetchTheProject = async () => {

    const api = 'https://api.jsonbin.io/v3/b/6728b681acd3cb34a8a26161'

    try {

      setLoadingProject(true)
      const response = await axios.get(api)
      const allProjects = response.data.record.projects
      console.log('These are all the projects', allProjects);
      const theProject = allProjects[theProjectId]
      console.log('This is the single project', theProject);

      setFetchedProject(theProject)

      setTimeout(() => {
        setLoadingProject(false)
      }, 5000);


    } catch (error) {
      console.log('Error fetching the project at 1st trial', error);

      await new Promise((resolve) => setTimeout(resolve, 2000));

      setLoadingProject(true)
      const response = await axios.get(api)
      const allProjects = response.data.record.projects
      console.log('These are all the projects', allProjects);
      const theProject = allProjects[theProjectId]
      console.log('This is the single project', theProject);

      setFetchedProject(theProject)

      setTimeout(() => {
        setLoadingProject(false)
        navigate('*')
      }, 5000);

    }

  }


  useEffect(() => {
    fetchTheProject()
  }, [projectId])

  useEffect(() => {
    setTimeout(() => {
      console.log('Updated Single Project in the state', fetchedProject);
    }, 5000);
  }, [projectId])


  return (
    <div className='one-project-page'>

      <>
        {
          loadingProject ? (
            <>
              <Spinner whatsLoading={'Project'} status={'Please wait'} />
            </>
          ) : (
            <>
              <OneProjectPageComp project={fetchedProject} />
            </>
          )
        }

      </>

    </div>
  )
}

export default OneProjectPage