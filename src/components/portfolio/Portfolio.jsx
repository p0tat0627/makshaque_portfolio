import React from 'react'
import './portfolio.css'
import iutforces from '../../assets/iutforces.PNG'
import cpzen from '../../assets/cpzen.PNG'
import cpzen_mobile from '../../assets/cpzen_mobile.PNG'
import dukaan from '../../assets/dukaan.PNG'
import expense_tracker from '../../assets/expense_tracker.PNG'
import fitquest from '../../assets/fitquest.PNG'

const data = [
  {
    id: 1,
    image: cpzen,
    title: 'CpZen',
    infos: 'CpZen is an Online Integrated Development Environment (IDE) for competitive programmers.',
    github: 'https://github.com/Starscream-11813/CpZen'
  },
  {
    id: 2,
    image: iutforces,
    title: 'IUTForces',
    infos: 'IUTForces is an offline programming judge application buiilt using Java Swing and SQLite.',
    github: 'https://github.com/Starscream-11813/IUTForces'
  },
  {
    id: 3,
    image: fitquest,
    title: 'FitQuest Exergames',
    infos: 'Motion-based Sedentary game controller using webcam, mediapipe, pygame and OpenCV. We promoted the idea of doing physical exercise through playing games.',
    github: 'https://github.com/p0tat0627/FitQuest-Exergames'
  },
  {
    id: 4,
    image: expense_tracker,
    title: 'Expense Tracker',
    infos: 'A flutter based mobile application to track daily expenses with a GSheet API integrated to elevate the idea of database-less Applicaiton.',
    github: 'https://github.com/p0tat0627/expense_tracker'
  },
  {
    id: 5,
    image: dukaan,
    title: 'Dukaan',
    infos: 'A web based E-commerce startup, developed only the front-end of it and was my first contractual work.',
    github: 'https://github.com/p0tat0627/dukaan'
  },
  {
    id: 6,
    image: cpzen_mobile,
    title: 'CpZen Mobile',
    infos: 'Mobile app version of our famous web app CpZen, built using Flutter.',
    github: 'https://github.com/p0tat0627/cpzen_mobile'
  }
]

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, infos, github}) => {
            return (
              <article key={id} className="portfolio__item">
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>

                <div className='title__infos'>
                  <h3>{title}</h3>
                  <h4>{infos}</h4>
                </div>
                
                <div className="portfolio__item-cta">
                  <a href={github} className="btn" target='_blank'>Details</a>
                  {/* <a href="" className="btn btn-primary">Live Demo</a> */}
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio


