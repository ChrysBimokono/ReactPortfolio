import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/new.jpg'
import HeaderSocial from './HeaderSocial'

const Header = () => {
  return (
    <header>
      <div className='container header_container'>
        <h5>Hello My name is</h5>
        <h1>Chrys Bimokono</h1>
        <h5 className='text-light'>Front End/ Ecommerce Developer</h5>
        <CTA />
        <HeaderSocial />
        <div className='me'>
          <img src={ME} alt="me" />
         
        </div>
        <a href='#contact' className='scroll_down'> Scroll down</a>

      </div>


    </header>
  )
}

export default Header