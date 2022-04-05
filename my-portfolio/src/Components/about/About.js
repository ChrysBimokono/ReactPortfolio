import React from "react";
import './about.css'
import ME from '../../assets/me-about2.jpg'
import {FaAward} from 'react-icons/fa'
import{FiUsers}from 'react-icons/fi'
import{AiFillFolder} from 'react-icons/ai'
const About = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About me</h2>

      <div className="container about_container">
        <div className="about_me">
         <img src={ME} alt="About"  className="about_me-image" />
        </div>

        <div className="about_content">
          <div className="about_cards">
             <article className="about_card">
               <FaAward className="about_icon" />
               <h5>Experience</h5>
               <small>3+ years experiences</small>
             </article>

             <article className="about_card">
               <FiUsers className="about_icon" />
               <h5>Clients</h5>
               <small>Worldwide</small>
             </article>

             <article className="about_card">
               <AiFillFolder className="about_icon" />
               <h5>Experience</h5>
               <small>80+ completed projects</small>
             </article>
             </div>
             <p> My name is Chrys, a Former Petroleum Engineer who has always been passionate about web Development. My expertise ranges from E-commerce development to Data analyst.My mission is to help business reach their dream of having a successful website. For that, i do not only focus on completing a job but also providing valuable insight and suggestions for better website visibility,traffic resulting to more sales.</p>
        <a href="#contact" className="btn btn-primary">Let's Chat</a>
        </div>


      </div>

      
    </section>
  )
}

export default About