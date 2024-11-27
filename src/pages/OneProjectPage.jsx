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

  const theProjectId = (projectId.replaceAll(':', ''))

  const [fetchedProject, setFetchedProject] = useState([])
  const [loadingProject, setLoadingProject] = useState(false)


  const fetchTheProject = async () => {

    const api = 'https://api.jsonbin.io/v3/b/6735ce36e41b4d34e4543d34'
    const apiKey = '$2a$10$30xtUuMAzq12Czec931me.xyVO8.7lHdJT40ZPgsWQP9FtSnPneQC'

    const headers = {
      'Content-Type': 'application/json',
      'X-Master-Key': apiKey
    }

    try {
      setLoadingProject(true)
      const response = await axios.get(api, { headers })
      const allProjects = response.data.record.record
      console.log(allProjects);
      const theProject = allProjects.find(project => project.id == theProjectId)
      setFetchedProject(theProject)
      setLoadingProject(false)
    } catch (error) {

      await new Promise((resolve) => setTimeout(resolve, 2000));

      setLoadingProject(true)
      const response = await axios.get(api)
      const allProjects = response.data.record.projects
      const theProject = allProjects[theProjectId]

      setFetchedProject(theProject)

      setLoadingProject(false)

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