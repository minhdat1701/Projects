import React from 'react'
import './About.css'
import avt from '../Assets/avt.jpg'

const About = () => {

  return (
    <div className="about" id='#about'>
      <div className="about-container">
        <div className="about-image">
          <img src={avt} alt="" width={480} height={700} />
        </div>
        <div className="about-content">
          <h3 className="about-subtitle">
            My <span>Intro</span>
          </h3>
          <h2 className="about-title">About Me</h2>
          <p className="about-description">
            Frontend developer, I create web pages with UI / UX user interface,
            I have years of experience and many clients are happy with the
            projects carried out.
          </p>
          <div className="about-btn">
              <a href="https://www.linkedin.com" target='_blank' className="btn-contact">Contact Me</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About
