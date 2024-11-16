import React, { useRef, useState } from 'react'
import '../../css/new-project.css'
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

  // const sendData = async e => {
  //   e.preventDefault()

  //   const api = 'https://api.jsonbin.io/v3/b/6735ce36e41b4d34e4543d34'
  //   const apiKey = '$2a$10$30xtUuMAzq12Czec931me.xyVO8.7lHdJT40ZPgsWQP9FtSnPneQC'

  //   const headers = {
  //     'Content-Type': 'application/json',
  //     'X-Master-Key': apiKey
  //   }
    

  //   function convertProgress(string) {
  //     const lowerTrimmed = string.toLowerCase().trim();
  //     if (lowerTrimmed === 'true') return true;
  //     if (lowerTrimmed === 'false') return false;
  //     return false; // Default to `false` for invalid inputs
  //   }


  //   const dataObject = {
  //     name: nameRef.current.value.trim(),
  //     id: Number(idRef.current.value.trim()),
  //     image: imageRef.current.value.trim(),
  //     stack: stackRef.current.value.trim(),
  //     inProgress: convertProgress(inProgressRef.current.value.trim()),
  //     link: linkRef.current.value.trim(),
  //     paragraphs: paragraphs
  //   }

  //   console.log('This the project data to be sent to the API', dataObject);


  //   try {
  //     setUploadingProject(true)

  //     const { data: fetchedData } = await axios.get(api, { headers })
  //     const oldProjects = fetchedData.record;

  //     // const currentData = await response.data.record
  //     // console.log('is record an array?', currentData);
  //     // currentData.push(dataObject)
  //     // console.log('After the push', currentData);

  //     const updatedProjects = [...oldProjects, dataObject];


  //     const updateResponse = await axios.put(api, { record: updatedProjects }, { headers })
  //     console.log('Projects successfully updated', updateResponse.data);
      

  //     console.log('Project Added Successfully', updateResponse.data);

  //     setUploadingProject(false)

  //   } catch (error) {
  //     console.log('Error adding your project', error);
  //     setUploadingProject(false)
  //   }

  // }

  const sendData = async (e) => {
    e.preventDefault();
  
    // const api = 'https://api.jsonbin.io/v3/b/6735ce36e41b4d34e4543d34';

    const api = 'https://api.jsonbin.io/v3/b/67391867e41b4d34e4557d3f'
    const apiKey = '$2a$10$30xtUuMAzq12Czec931me.xyVO8.7lHdJT40ZPgsWQP9FtSnPneQC';
  
    const headers = {
      'Content-Type': 'application/json',
      'X-Master-Key': apiKey,
    };
  
    function convertProgress(string) {
      const lowerTrimmed = string.toLowerCase().trim();
      return lowerTrimmed === 'true';
    }
  
    const dataObject = {
      name: nameRef.current.value.trim(),
      id: Number(idRef.current.value.trim()),
      image: imageRef.current.value.trim(),
      stack: stackRef.current.value.trim(),
      inProgress: convertProgress(inProgressRef.current.value.trim()),
      link: linkRef.current.value.trim(),
      paragraphs: paragraphs,
    };
  
    console.log('This is the project data to be sent to the API:', dataObject);
  
    try {
      setUploadingProject(true);
  
      // Fetch existing data
      const { data: fetchedData } = await axios.get(api, { headers });
      const oldProjects = fetchedData.record; // Fallback to an empty array if `record` is undefined
  
      if (!Array.isArray(oldProjects)) {
        throw new Error('Fetched data is not an array');
      }
  
      // Add the new project
      const updatedProjects = [...oldProjects, dataObject];
  
      // Push updated projects
      const updateResponse = await axios.put(
        api,
        { record: updatedProjects },
        { headers }
      );
  
      console.log('Projects successfully updated:', updateResponse.data);
  
      setUploadingProject(false);
    } catch (error) {
      console.error('Error adding your project:', error.message || error);
      setUploadingProject(false);
    }
  };
  



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