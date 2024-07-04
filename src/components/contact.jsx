import React from 'react'
import { FaSquareInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithubSquare } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const Contact = () => {
  return (
    <>
      <div className='container contact' id='contact'>
        <h1>CONTACT ME</h1>
        <div className='contact-icon'
          data-aos="zoom-in-up"
          data-aos-duration="1000"
        >
          <a href='https://www.instagram.com/dharmendra_kumar_yadav25/' target='_blank' className='items'>
            <FaSquareInstagram className='icons'/>
          </a>
          <a href='https://www.facebook.com/profile.php?id=100035191360093' target='_blank' className='items'>
            <FaFacebook className='icons'/>
          </a>
          <a href='https://www.linkedin.com/in/dharmendra-kumar-yadav-8a8126256/' target='_blank' className='items'>
            <FaLinkedin className='icons'/>
          </a>
          <a href='https://github.com/dharmendra-kumarYadav' target='_blank' className='items'>
            <FaGithubSquare className='icons'/>
          </a>
          <a href='mailto:ydharmendrakumar878@gmail.com' target='_blank' className='items'>
           <SiGmail className='icons'/>
          </a>
        </div>
      </div>
    </>
  )
}

export default Contact
