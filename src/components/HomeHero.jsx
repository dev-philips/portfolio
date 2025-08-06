import React from 'react'
import '../css/homehero.css'
import spark_image from '../assets/images/spark-2.png'
import { Link } from 'react-router-dom'

const HomeHero = () => {



  return (
    <div className="home-hero">

      <div className="the-text">
        <h5>Hey there! 👋</h5>

        <h1>I’m Philips, a <span className="fr-dev">Frontend developer</span> with a knack for creating seamless and
          engaging user experiences.</h1>

        <p className="available"><span></span>Available for projects</p>

        <div className="hero-btns">
          <Link className="call-btn" to={'/book-a-call'}>Book a Call</Link>

          <Link to={"/about-me#hire-me"} className="hire-btn" href="">Hire Me </Link>
        </div>
      </div>

      <div className="the-img-2">
        <img className="animate__animated animate__pulse animate__infinite infinite animate__slower" src={ spark_image } alt="" />
      </div>

    </div>
  )
}

export default HomeHero