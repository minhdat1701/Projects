import React from "react";
import "./Hero.css";
import avt from '../Assets/avt.jpg'

const Hero = () => {
  return (
    <div className="hero" id="#home">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-info">
            <h3 className="hero-subtitle">
              Hello, <span>I'm</span>
            </h3>
            <h1 className="hero-title">Dang Minh Dat</h1>
            <h3 className="hero-dev">Front-end Developer</h3>
            <p className="hero-description">
              With knowledge in web development and design, I offer the best
              projects resulting in quality work.
            </p>
            <div className="hero-btn">
              <a href="https://www.facebook.com" target="_blank" className="btn-talk">Let's Talk</a>
            </div>
          </div>
          <div className="hero-social">
            <a href="https://github.com" target="_blank" className="hero-social-link">
              <i class="ri-github-fill"></i>
            </a>
            <a href="https://www.facebook.com" target="_blank" className="hero-social-link">
              <i class="ri-facebook-box-fill"></i>
            </a>
            <a href="https://www.linkedin.com" target="_blank" className="hero-social-link">
              <i class="ri-linkedin-box-line"></i>
            </a>
          </div>
        </div>
        <div className="hero-image">
          <img src={avt} alt="" width={480} height={700}/>
        </div>
      </div>
    </div>
  );
};

export default Hero;
