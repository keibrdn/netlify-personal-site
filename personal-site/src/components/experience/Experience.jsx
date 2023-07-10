import React from 'react'
import './experience.css'
import { BsFillPatchCheckFill } from 'react-icons/bs'

const Experience = () => {
  return (
    <section id="experience">
      <h2 className='title'>Skills I Have</h2>

      <div className='container experience__container'>
        <div className='experience__frontend'>
          <h3>Languages</h3>
          <div className='experience__content'>
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__icon'/>
              <div>
                <h4>Python</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__icon'/>
              <div>
                <h4>Javascript</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>


            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__icon'/>
              <div>
                <h4>C++</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>


            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__icon'/>
              <div>
                <h4>HTML/CSS</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>


            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__icon'/>
              <div>
                <h4>SQL</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>


            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__icon'/>
              <div>
                <h4>Java</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
          </div>
        </div>

        <div className='experience__backend'>
          <h3>Tools/Frameworks</h3>
          <div className='experience__content'>
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__icon'/>
              <div>
                <h4>React</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__icon'/>
              <div>
                <h4>MongoDB</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>


            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__icon'/>
              <div>
                <h4>NodeJS</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>


            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__icon'/>
              <div>
                <h4>PostgreSQL</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>


            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__icon'/>
              <div>
                <h4>HandlebarsJS</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>


            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__icon'/>
              <div>
                <h4>Express</h4>
                <small className='text-light'>Beginner</small>
              </div>
            </article>
          </div>
        </div>
      </div>

    </section>
  )
}

export default Experience