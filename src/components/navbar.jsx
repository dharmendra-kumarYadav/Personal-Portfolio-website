import React, { useState } from 'react';
import 'aos/dist/aos.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleNavClick = (id) => {
    setIsOpen(false);
    const section = document.querySelector(id);
    const offset = 90;
    const bodyRect = document.body.getBoundingClientRect().top;
    const sectionRect = section.getBoundingClientRect().top;
    const sectionPosition = sectionRect - bodyRect;
    const offsetPosition = sectionPosition - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    });
  };

  return (
    <div className="nav_bar" data-aos="fade-down" data-aos-duration="1000">
      <div className="left nav_items">Portfolio</div>
      <div className="right">
        <div className="menu-icon" onClick={toggleDropdown}>
          ☰
        </div>
        <div className={`nav_links ${isOpen ? 'open' : ''}`}>
          <a onClick={() => handleNavClick('#home')} className="nav_items">Home</a>
          <a onClick={() => handleNavClick('#experience')} className="nav_items">Experience</a>
          <a onClick={() => handleNavClick('#skills')} className="nav_items">Skills</a>
          <a onClick={() => handleNavClick('#projects')} className="nav_items">Projects</a>
          <a onClick={() => handleNavClick('#contact')} className="nav_items">Contact</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
