//DEPENDENCIES
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'

//COMPONENTS
import '../css/one-project-page.css'
import OneProjectPageComp from '../components/OneProjectPageComp'
import Spinner from '../components/Spinner'

//EXTRAS
import project_image from '../assets/images/job.jpg'


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
      const theProject = allProjects[theProjectId]
      setFetchedProject(theProject)

      setTimeout(() => {
        setLoadingProject(false)
      }, 5000);


    } catch (error) {

      await new Promise((resolve) => setTimeout(resolve, 2000));

      setLoadingProject(true)
      const response = await axios.get(api)
      const allProjects = response.data.record.projects
      const theProject = allProjects[theProjectId]

      setFetchedProject(theProject)

      setTimeout(() => {
        setLoadingProject(false)
      }, 5000);

    }

  }

  useEffect(() => {
    fetchTheProject()
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