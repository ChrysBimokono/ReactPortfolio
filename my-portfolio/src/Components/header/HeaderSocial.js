import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsTwitter} from 'react-icons/bs'
function HeaderSocial() {
  return (
    <div className='header_socials'>
        <a href='https://linkedin.com' target="_blank"><BsLinkedin></BsLinkedin></a>
        <a href='https://github.com' target="_blank"><BsGithub></BsGithub></a>
        <a href='https://twitter.com' target="_blank"><BsTwitter></BsTwitter></a>
     </div>
  )
}

export default HeaderSocial