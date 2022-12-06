import React from 'react'
import './Footer.css'
import {RiFacebookCircleFill} from 'react-icons/ri'
import {AiOutlineInstagram} from 'react-icons/ai'
import {ImTwitter} from 'react-icons/im'
const Footer = () => {
  return (
    <footer className='section6'>
    <a href='#' className='footer__logo'>Binish</a>
    <ul className='permalinks'>
    <li><a href='#'>Home</a></li>
    <li><a href='#about'>About</a></li>
    <li><a href='#experince'>Experince</a></li>
    <li><a href='#services'>Services</a></li>
    <li><a href='#portfolio'>Portfolio</a></li>
    <li><a href='#testimonials'>Testimonials</a></li>
    <li><a href='#contact'>Contact Us</a></li>
    </ul>

    <div className='footer__socials'>
     <a href='https://www.facebook.com/'><RiFacebookCircleFill/></a>
     <a href='https://www.instagram.com/'><AiOutlineInstagram/></a>
     <a href='https://www.twitter.com/'><ImTwitter/></a>
    </div>
    <div className='footer__copyright'>
       <small>
        &copy; Binish .All Rights Reserved 
       </small>
    </div>
    </footer>
  )
}

export default Footer