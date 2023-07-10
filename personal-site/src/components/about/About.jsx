import React from 'react'
import './about.css'
import ME from '../../assets/memoji.png'
import {IoMdSchool} from 'react-icons/io'
import {BsPencilSquare} from 'react-icons/bs'

const About = () => {
  return (
    <section id="about">
    <div className='pad'>
      <h2 id="about__title">Get to Know Me!</h2>
      

      <div className='container about__container'>
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image"/>
          </div>
        </div>
      

      <div className="about__content">
        <div className='about__cards'>

          <article className='about__card'>
            <IoMdSchool className='about__icon'/>
            <h5 className='title'>University of California, Riverside</h5>
            <h5>September 2022</h5>
          </article>

          <article className='about__card'>
            <BsPencilSquare className='about__icon'/>
           
            <h5 className='title '>B.S. Computer Science with Business Applications</h5>
          </article>

          </div>

          <p>
          I'm a Southern California native with a passion for cultivating a diverse technical knowledge base. 
          I love exploring new ideas, technologies, solutions, and mindsets. When I'm not deep diving into
          spontaneous niche interests, you can usually find me reading, curating intricate Spotify playlists, or
          rating films on Letterboxd!
          </p>

          <a  href="#contact" className='btn btn-primary'>Let's Talk</a>

      </div>
      </div>
      </div>
    </section>
  )
}

export default About