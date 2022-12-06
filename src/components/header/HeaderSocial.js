import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
import {BsPinterest} from 'react-icons/bs'
const HeaderSocial = () => {
  return (
    <div className='header_socials'>
    <a href='https://www.linkedin.com/in/binish-waqar-55b727248/' target="_blank"><BsLinkedin/></a>
    <a href='https://www.pinterest.com/' target="_blank"><BsPinterest/></a>
    <a href='https://www.instagram.com/binish._.waqar/?hl=en' target="_blank"><BsInstagram/></a>
    
    </div>
  )
}

export default HeaderSocial