import React from 'react'
import './footer.css'
import {BsFacebook} from 'react-icons/bs'
import {BsLinkedin} from 'react-icons/bs'
import{BsTwitter} from 'react-icons/bs'
const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer_logo'>Bim</a>

      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#services'>Services</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
        <li><a href='#testimonial'>Testimonials</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>

      <div className='footer_socials'>
        <a href='htttps://facebook.com'><BsFacebook/></a>
        <a href='htttps://linkedin.com'><BsLinkedin/></a>
        <a href='htttps://twitter.com'><BsTwitter/></a>
      </div>

      <div className='footer_copyright'>
        <small>&copy;ChrysBim</small>
      </div>
    </footer>
  )
}

export default Footer