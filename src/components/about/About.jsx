import React from 'react'
import './about.css'
import ME from '../../assets/about_me.png'
import {FaAward} from 'react-icons/fa'
import {GiArchiveResearch} from 'react-icons/gi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon' />
              <h5>Experience</h5>
              <small>4+ years in Prograaming</small>
            </article>

            <article className='about__card'>
              <GiArchiveResearch className='about__icon' />
              <h5>Thesis</h5>
              <small>DL based Audio Signal Processing</small>
            </article>

            <article className='about__card'>
              <VscFolderLibrary className='about__icon' />
              <h5>Projects</h5>
              <small>5+ Completed Projects</small>
            </article>
          </div>

          <p>
            Hi, I'm <b>Md. Maksudul Haque</b>, a graduate of Computer Science and Engineering (CSE) 
            at the Islamic University of Technology (IUT), Dhaka. I love problem-solving and programming. 
            I have proficiency in <b>Python, C++ and JS</b>. Besides, I have expertise in deep learning-based <b>Audio 
            Signal Processing</b> as my research domain.
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About