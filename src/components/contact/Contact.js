import React from 'react'
import './Contact.css'
import {AiOutlineMail} from 'react-icons/ai'
import {BsMessenger} from 'react-icons/bs'
import {BsWhatsapp} from 'react-icons/bs'
const Contact = () => {
  return (
    <section id='contact' className='section5'>
      <h2>Get In Touch <br/> <h1>Contact Me</h1></h2>
      <div className='container contact__container'>
        <div className='contact__options'>
         <article className='contact__option'>
          <AiOutlineMail className='contact__option-icon'/>
           <h4>email</h4>
           <h5>beenishwaqar1234@gmail.com</h5>
           <a href="mailto:beenishwaqar1234@gmail.com" target='_blank'>send an message</a>
         </article>
         <article className='contact__option'>
          <BsMessenger className='contact__option-icon'/>
           <h4>Messenger</h4>
           <h5>beenishwaqar</h5>
           <a href='https://www.facebook.com/' target="_blank">send a message</a>
         </article>
         <article className='contact__option'>
         <BsWhatsapp className='contact__option-icon'/>
           <h4>Whatsapp</h4>
           <h5>+12345678</h5>
           <a href="https://web.whatsapp.com/" target='_blank'>send a message</a>
         </article>
        </div>
        <form>
          <input type="text"  name="name" placeholder='your full name' required/>
          <input type="text"  name="email" placeholder='your email' required/>
          <textarea   name="message" rows="7" placeholder='your message' required/>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact