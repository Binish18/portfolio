import React from 'react'
import CTA from './CTA'
import './Header.css'
import ME from '../../assets/me.png'
import HeaderSocial from './HeaderSocial'
const Header = () => {
  return (
    <div className='container header_container'>
      <h2>Hello I'm</h2>
      <h1>Binish Waqar</h1>
      <h3 className='text-light'>Frontend Developer</h3>
      <CTA/>
      <HeaderSocial/>
      <div className='me'>
        <img src={ME} alt="me"/>

      </div>
      <a href='#contact' className='scroll_down'>Scroll Down</a>
    </div>
  )
}

export default Header