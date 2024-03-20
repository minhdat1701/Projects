import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  
  const [activeNav, setActiveNav] = useState("#home");
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  const handleMenuItemClick = () => {
    setShowMenu(false);
  };
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      const yOffset = -100; 
      const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };
  const handleClick = (id) => {
    handleMenuItemClick(); 
    setActiveNav(id);
    scrollToSection(id);
  };
  return (
    <div className="navbar">
      <div className="navbar-content">
        <a href="#home" className="logo" onClick={() => setActiveNav("#home")}>
          <h4>MINH<span>DAT</span></h4>
        </a>
        <ul className={showMenu ? "show-menu" : ""}>
          <li>
            <a href="#home" className={`menu-item ${activeNav === "#home" ? "active-link" : ""}`} onClick={()=> handleClick('#home')} >
              Home
            </a>
          </li>
          <li>
            <a href="#about" className={`menu-item ${activeNav === "#about" ? "active-link" : ""}`} onClick={() => handleClick("#about")}>
              About
            </a>
          </li>
          <li>
            <a href="#skills" className={`menu-item ${activeNav === "#skills" ? "active-link" : ""}`} onClick={() => handleClick("#skills")}>
              Skills
            </a>
          </li>
          <li>
            <a href="#services" className={`menu-item ${activeNav === "#services" ? "active-link" : ""}`} onClick={() => handleClick("#services")}>
              Services
            </a>
          </li>
          <li>
            <a href="#projects" className={`menu-item ${activeNav === "#projects" ? "active-link" : ""}`} onClick={() => handleClick("#projects")}>
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" className={`menu-item ${activeNav === "#contact" ? "active-link" : ""}`} onClick={() => handleClick("#contact")}>
              Contact
            </a>
          </li>
        </ul>
        <div className={`navbar-menu ${showMenu ? "navbar-close" : "navbar-toggle"}`} onClick={toggleMenu} >
            {showMenu ? (<i className="ri-close-line"></i>) : (<i className="ri-menu-line"></i>)}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
