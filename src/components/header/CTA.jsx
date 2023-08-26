import React from 'react'
// import CV from '../../assets/maksud-CV.pdf'
const CV = 'https://drive.google.com/file/d/1nOpoJkTRNOclzTjiqW_q5YwhYdEWCXxy/view?usp=sharing'; // Replace with your actual direct link

const CTA = () => {
  return (
    <div className="cta">
        <a href={CV} target="_blank" rel="noopener noreferrer" className='btn'>View CV</a>
        <a href="#contact" className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}

export default CTA