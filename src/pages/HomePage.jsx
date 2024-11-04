import React from 'react'
import HomeHero from '../components/HomeHero'
import WorksAndProjects from '../components/WorksAndProjects'
import OneProject from '../components/OneProjects'
import ExperienceComp from '../components/ExperienceComp'

const HomePage = () => {
  return (
    <>
      <HomeHero />
      <WorksAndProjects>
        <OneProject />
        <OneProject />
        <OneProject />
        <OneProject />
      </WorksAndProjects>

      <ExperienceComp>
        
      </ExperienceComp>

    </>
  )
}

export default HomePage