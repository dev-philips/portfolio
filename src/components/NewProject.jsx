import React, { useRef, useState } from 'react'
import '../css/new-project.css'
import axios from 'axios'

const NewProject = () => {

  const nameRef = useRef()
  const stackRef = useRef()
  const idRef = useRef()
  const linkRef = useRef()
  const imageRef = useRef()
  const inProgressRef = useRef()

  const [uploadingProject, setUploadingProject] = useState(false)
  const [projectUploaded, setProjectUploaded] = useState(false)

  const [paragraphs, setParagraphs] = useState([])
  const [paragraphInput, setParagraphInput] = useState('')

  const handleInputChange = (e) => {
    setParagraphInput(e.target.value)
    console.log(paragraphInput);
  }

  const handleAddParagraph = e => {
    e.preventDefault()

    if (paragraphInput.trim() !== '') {
      setParagraphs((prevParagraphs) => [...prevParagraphs, paragraphInput]);
      console.log(paragraphInput);
      console.log(paragraphs);
      setParagraphInput('')
    }
  }

  const sendData = async e => {
    e.preventDefault()

    const api = 'https://api.jsonbin.io/v3/b/6735cc87acd3cb34a8a8759c'
    const apiKey = '$2a$10$30xtUuMAzq12Czec931me.xyVO8.7lHdJT40ZPgsWQP9FtSnPneQC'

    function convertProgress(string) {

      if (string.toLowerCase().trim() == 'true') {
        return true
      } else if (string.toLowerCase().trim() == 'false') {
        return false
      }

    }


    const dataObject = {
      name: nameRef.current.value,
      id: Number(idRef.current.value),
      image: imageRef.current.value,
      stack: stackRef.current.value,
      inProgress: convertProgress(inProgressRef.current.value),
      link: linkRef.current.value,
      paragraphs: paragraphs
    }

    console.log('This the project data to be sent to the API', dataObject);


    try {
      setUploadingProject(true)
      const response = await axios.get(api, {
        headers: {
          'X-Master-Key': `${apiKey}`
        }
      })

      const currentData = response.data.record

      currentData.push(dataObject)

      const updateResponse = await axios.put(api, { record: currentData }, {
        headers: {
          'X-Master-Key': `${apiKey}`
        }
      })

      console.log('Project Added Successfully', updateResponse.data);
      setUploadingProject(false)

    } catch (error) {
      console.log('Error adding your project', error);
      setUploadingProject(false)
    }

  }



  return (
    <div className='new-project'>
      <div className=''>
        <h5>Add a new project here...</h5>
        <form>

          <div className='one-input'>
            <label htmlFor="project-name">Project Name:</label>
            <input ref={nameRef} type="text" name='project-name' id='project-name' placeholder='Enter your project name' required />
          </div>

          <div className='one-input'>
            <label htmlFor="stack">Project Stack:</label>
            <input ref={stackRef} type="text" name='stack' id='stack' placeholder='Enter your project stacks' required />
          </div>



          <div className='one-input'>
            <label htmlFor="id">Project ID:</label>
            <input ref={idRef} type="text" name='id' id='id' placeholder='Enter your project Id' />
          </div>


          <div className='one-input'>
            <label htmlFor="link">Project Link</label>
            <input ref={linkRef} type="text" name='link' id='link' placeholder='Enter your project Link' />
          </div>


          <div className='one-input'>
            <label htmlFor="image">Project Image Link:</label>
            <input ref={imageRef} type="text" name='image' id='image' placeholder='Enter a link to your project image' />
          </div>


          <div className='one-input'>
            <label htmlFor="status">Project In Progress? :</label>
            <input ref={inProgressRef} type="tel" name='phone' id='phone' placeholder='Is your project in progress? (T/F)' />
          </div>

          <div className='one-input'>
            <label className='special-input' htmlFor="message">Add paragraph: <button onClick={handleAddParagraph}>+</button></label>
            <textarea onChange={handleInputChange} name="description" placeholder='Talk about your project' id="description" required >

            </textarea>
          </div>

          <button onClick={sendData} className='form-submit' type='submit'>
            {
              uploadingProject ? (
                <>
                  Uploading...
                </>
              ) : projectUploaded ? (
                <>
                  Project Uploaded
                </>
              ) : (
                <>
                  Create Project
                </>
              )
            }
          </button>

        </form>

      </div>
    </div>
  )
}

export default NewProject