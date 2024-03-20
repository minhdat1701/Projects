import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-container">
        <div className="footer-content">
          <h1 className="footer-title">
            Dang Minh <span>Dat</span>
          </h1>
          <h2 className="footer-dev">
            Front-end Developer
          </h2>
        </div>
        <div className="footer-social">
          <a href="https://www.facebook.com" target='_blank' className="footer-social-link">
            <i class="ri-facebook-circle-line"></i>
          </a>
          <a href="https://www.instagram.com" target='_blank' className="footer-social-link">
            <i class="ri-instagram-line"></i>
          </a>
          <a href="https://twitter.com" target='_blank' className="footer-social-link">
            <i class="ri-twitter-line"></i>
          </a>
        </div>
        <span className="footer-copy">&#169; Copyright Bedimcode. All rights reserved</span>
      </div>
    </div>
  )
}

export default Footer
