import React from 'react'
import './About.css'
import ME from '../../assets/me-about.jpg'
import {BsAward} from 'react-icons/bs'
import {BiUserPlus} from 'react-icons/bi'
import {AiFillFolderOpen} from 'react-icons/ai'
const About = () => {
  return (
    <section id='about' className='section1'>
   
       <h2>Get To Know  <br/> <h1> About Me</h1></h2>
       
      <div className='container about__container'>
      <div className='about__me'>
      <div className='about__me-image'>
        <img  src={ME} alt=" about image"/>
   </div>
      </div>
      <div className='about__content'>
      <div className='about__cards'>
      <article className='about__card'>
        <BsAward className='about__icon'/>
       <h5>Experince</h5>
       <small>None</small>
      </article>
      <article className='about__card'>
        <BiUserPlus className='about__icon'/>
       <h5>Clients</h5>
       <small>200+ Clients</small>
      </article>
      <article className='about__card'>
        <AiFillFolderOpen className='about__icon'/>
       <h5>Projects</h5>
       <small>80+ Projects</small>
      </article>
      </div>
         <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p> 
         <a href='#contact' className='btn btn-primary'>Let's Talk</a>
      </div>
      </div>
    </section>
  )
}

export default About