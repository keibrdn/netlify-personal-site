import React from 'react'
import './portfolio.css'

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h2 class="title">My Recent Work</h2>

      <div className='container portfolio__container'>

        <article className='portfolio__item'>
          <div className='portfolio__item-image'></div>
          <h3>Roastify</h3>
          <h3 class="light">Web app that provides AI-generated "roasts" based on users' top artists from Spotify</h3>
          <div className='portfolio__item-cta'>
            <a className='btn btn-primary' href="https://github.com/keibrdn/Roastify" target='_blank'>GitHub</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className='portfolio__item-image'></div>
          <h3>TwitScape</h3>
          <h3 class="light"> A tweet search engine that collects and indexes geotagged tweets for efficient searching.</h3>
          <div className='portfolio__item-cta'>
            <a className='btn btn-primary' href="https://github.com/keibrdn/TwitScape" target='_blank'>GitHub</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className='portfolio__item-image'></div>
          <h3 >Plum</h3>
          <h3 class="light"> A social network dedicated to fostering personal and professional connections for women in technology</h3>
          <div className='portfolio__item-cta'>
            <a className='btn btn-primary' href="https://github.com/keibrdn/Plum" target='_blank' >GitHub</a>
          </div>
        </article>

      </div>
    </section>
  )
}

export default Portfolio