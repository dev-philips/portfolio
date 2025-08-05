// DEPENDENCIES AND TOOLS
import React, { useEffect, useState } from 'react'
import axios from 'axios'

//COMPONENTS
import OtherHero from '../components/OtherHero'
import ExperienceComp from '../components/ExperienceComp'
import OneExperience from '../components/OneExperience'
import CallToAction from '../components/CallToAction'
import EducationComp from '../components/EducationComp'
import OneEducation from '../components/OneEducation'
import ContactComp from '../components/ContactComp'
import AlbumComp from '../components/AlbumComp'

//EXTRAS
import Spinner from '../components/Spinner'
import verified_image from '../assets/images/verified-2.png'
import p1 from '../assets/images/p1.png'
import p3 from '../assets/images/p3.png'
import p42 from '../assets/images/p42.png'

import LongTalk from '../components/LongTalk'
import OneAlbum from '../components/OneAlbum'
import FakeALC from '../components/FakeALC'


const AboutMe = () => {

  const [networkError, setNetworkError] = useState(false)
  const [educations, setEducation] = useState([])
  const [loadingEducation, setLoadingEducation] = useState(false)

  //THE CODE BELOW IS USED TO FETCH EDUCATION

  const fetchEducation = async () => {

    const api = 'https://api.jsonbin.io/v3/b/6735cb9fe41b4d34e4543bb5'
    const apiKey = '$2a$10$30xtUuMAzq12Czec931me.xyVO8.7lHdJT40ZPgsWQP9FtSnPneQC'

    try {
      setLoadingEducation(true)
      const response = await axios.get(api, {
        headers: {
          'X-Master-Key': `${apiKey}`
        }
      })
      const allEducation = response.data.record.education
      setEducation(allEducation)
      setLoadingEducation(false)
    } catch (error) {

      await new Promise((resolve) => setTimeout(resolve, 2000));

      try {

        const response = await axios.get(api)
        const allEducation = response.data.record.education
        setEducation(allEducation)
        setLoadingEducation(false)
      } catch (error) {
        setNetworkError(true)
      }
    }

  }

  useEffect(() => {
    fetchEducation()
  }, [])



  // THE CODE BELOW IS USED TO FETCH EXPERIENCES

  const [experiences, setExperiences] = useState([])
  const [loadingExperience, setLoadingExperiences] = useState(false)

  const fetchExperience = async () => {
    const api = 'https://api.jsonbin.io/v3/b/6735cc87acd3cb34a8a8759c'
    const apiKey = '$2a$10$30xtUuMAzq12Czec931me.xyVO8.7lHdJT40ZPgsWQP9FtSnPneQC'

    try {
      setLoadingExperiences(true)
      const response = await axios.get(api, {
        headers: {
          'X-Master-Key': `${apiKey}`
        }
      })
      const allExperiences = response.data.record.experiences
      setExperiences(allExperiences)
      setLoadingExperiences(false)
    } catch (error) {

      await new Promise((resolve) => setTimeout(resolve, 2000));

      try {
        setLoadingExperiences(true)
        const response = await axios.get(api)
        const allExperiences = response.data.record.experiences
        setExperiences(allExperiences)
        setLoadingExperiences(false)
      } catch (error) {
        setNetworkError(true)
      }
    }
  }

  useEffect(() => {
    fetchExperience()
  }, [])


  const [albums, setAlbums] = useState([])
  const [loadingAlbums, setLoadingAlbums] = useState(false)
  const [albumError, setAlbumError] = useState(false)

  const fetchAlbums = async () => {
    try {

      setLoadingAlbums(true)

      //GETTING THE ACCESS TOKEN

      const tokenResponse = await axios.post("https://accounts.spotify.com/api/token",
        new URLSearchParams({ grant_type: 'client_credentials' }),
        {
          headers: {
            Authorization: `Basic ${btoa("3439fb00a69a4381a1c257a5bfc918f2:082147efedcb4e8e85c4a913add2ec9d")}`,
            "Content-Type": "application/x-www-form-urlencoded",
          }
        }
      );

      const accessToken = tokenResponse.data.access_token

      //GETING THE ALBUMS


      const adedamola_fireboy = '0mxle2p72zngkE9p4KAE0A'
      const playboy_fireboy = '1pUJnA3OSbvVr5afqxNARZ'
      const twiceastall_burnaboy = '2pANu4qucnliJuRR94eZSV'
      const glorysoundprep_jonbellion = '59YYObx9wFEFG5zVdlfwvf'

      // const albumIds = `${adedamola_fireboy,twiceastall_burnaboy, playboy_fireboy,glorysoundprep_jonbellion}`

      const albumIds = '1pUJnA3OSbvVr5afqxNARZ,6z6r9RgyDDp35cfOAixpvq,2O9VJaLSnwjZ2HPpMaVoPU,0mxle2p72zngkE9p4KAE0A,2pANu4qucnliJuRR94eZSV,59YYObx9wFEFG5zVdlfwvf'

      const albumResponse = await axios.get(`https://api.spotify.com/v1/albums?ids=${albumIds}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      })

      const allAlbums = albumResponse.data.albums

      console.log('These are the albums', allAlbums);

      setAlbums(allAlbums)

      setTimeout(() => {
        setLoadingAlbums(false)
      }, 2000);

    } catch (error) {
      console.log('Error fetching your albums', error);
      setAlbumError(true)
      setLoadingAlbums(false)
    }
  }

  useEffect(() => {
    fetchAlbums()
  }, [])

  useEffect(() => {
    console.log('Updated albums coming from the state', albums);
  }, [])


  return (
    <>
      <OtherHero theText={`Hi, I’m Edun Philips, a 20 year old Frontend Developer from Ibadan, Nigeria. I'm Passionate about creating visually stunning, intuitive, and highly functional web experiences that enhance user interaction and solve real-world problems.`} theSub={'Available for projects'} theImg={p42} />


      <LongTalk talk1={'Over the years, I’ve honed my skills in creating seamless, pixel-perfect interfaces while keeping performance and accessibility top of mind. I’m constantly exploring new tools and technologies, such as Tailwind CSS and TypeScript, to ensure I’m delivering cutting-edge solutions.'} talk2={'Beyond the code, I thrive on solving complex problems, optimizing workflows, and working closely with designers and developers to build web applications that not only function flawlessly but also deliver an exceptional user experience.'} color={'white'} size={'18'} />

      <EducationComp>

        {
          loadingEducation ? (
            <>
              <Spinner whatsLoading={'Education'} status={`${networkError ? 'Please check your internet connection' : 'Please wait'}`} />
            </>
          ) : (
            <>
              {
                educations.map((education, index) => {
                  return (
                    <OneEducation key={index} education={education} />
                  )
                })
              }
            </>
          )
        }

      </EducationComp>

      <ExperienceComp>
        {
          loadingExperience ? (
            <>
              <Spinner whatsLoading={'Experiences'} status={`${networkError ? 'Please check your internet connection' : 'Please wait'}`} />
            </>
          ) : (
            <>
              {
                experiences.map((experience, index) => {
                  return (
                    <>
                      <OneExperience key={index} experience={experience} />
                    </>
                  )
                })
              }
            </>
          )
        }
      </ExperienceComp>

      <ContactComp id="hire-me" />

      {
        loadingAlbums ? (
          <>
            <FakeALC>
              <Spinner whatsLoading={'Albums'} status={'Please wait'} />
            </FakeALC>
          </>
        ) : albumError ? (
          <>
            <FakeALC>
              <Spinner whatsLoading={'Albums'} status={'Please check your internet connection'} />
            </FakeALC>
          </>
        ) : (
          <>
            <AlbumComp>
              {
                albums.map((album) => {
                  return (
                    <OneAlbum key={album.id} album={album} />
                  )
                })
              }
            </AlbumComp>
          </>
        )
      }


      <CallToAction />
    </>
  )
}

export default AboutMe