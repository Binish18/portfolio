import React from 'react'
import './Experince.css'
import {BsPatchCheckFill} from 'react-icons/bs'
const Experince = () => {
  return (
    <section id='experince' className='section2'>
      <h2>What Skills I Have <br/> <h1>Experince</h1></h2>
      
       <div className='container experince_container'>
        <div className='experince_frontend'>
         <h3>Frontend Development</h3>
         <div className='experince_content'>
         <article className='experince_details'>
          <BsPatchCheckFill className='experince_details_icon'/>
          <div>
          <h4>Html</h4>
          <small className='text_light'>Experinced</small>
          </div>
         
         </article>
         <article className='experince_details'>
          <BsPatchCheckFill className='experince_details_icon'/>
          <div>
          <h4>CSS</h4>
          <small className='text_light'>Intermediate</small>
          </div>
        
         </article>
         <article className='experince_details'>
          <BsPatchCheckFill className='experince_details_icon'/>
          <div>
          <h4>JavaScript</h4>
          <small className='text_light'>Intermediate</small>
          </div>
         
         </article>
         <article className='experince_details '>
          <BsPatchCheckFill className='experince_details_icon'/>
          <div>
          <h4>React</h4>
          <small className='text_light'>Intermediate</small>
          </div>
         
         </article>
         </div>
        </div>
        <div className='experince_backend'>
        <h3>Backend Development</h3>
         <div className='experince_content'>
         <article className='experince_details'>
          <BsPatchCheckFill className='experince_details_icon'/>
          <div>
          <h4>Node JavaScript</h4>
          <small className='text_light'>Intermediate</small>
          </div>
         
         </article>
         <article className='experince_details'>
          <BsPatchCheckFill className='experince_details_icon'/>
          <div>
          <h4>MongoDB</h4>
          <small className='text_light'>Intermediate</small>
          </div>
         
         </article>
        
         </div>
        </div>
       </div>
    </section>
  )
}

export default Experince