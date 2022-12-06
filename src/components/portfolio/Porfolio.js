import React from 'react'
import './Porfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'

const data = [
  {
    id:1,
    image:IMG1,
    title:'LandingPage',
    github:'https://www.github.com/',
},
{
  id:2,
  image:IMG2,
  title:'Parallex Website',
  github:'https://www.github.com/',
},

{
  id:3,
  image:IMG3,
  title:'LandingPage',
  github:'https://www.github.com/',
},
{
id:4,
image:IMG4,
title:'Parallex Website',
github:'https://www.github.com/',
},
{
  id:5,
  image:IMG5,
  title:'LandingPage',
  github:'https://www.github.com/',
},
{
id:6,
image:IMG6,
title:'Parallex Website',
github:'https://www.github.com/',
},


]
export const Porfolio = () => {

  return (
    <section id='portfolio' className='section4'>
   <h2>My Recent Work <br/> <h1>Portfolio</h1></h2>
 <div className='container portfolio__container'>
  {
  data.map(({id,image,title,github}) => {
     return (
      <article key={id} className='portfolio__item'>
      <div className='portfolio__item-image'>
      <img src={image} />
      </div>
      <h3>{title}</h3>
      <div className='portfolio__item-cta'>
    
      <a href={github} target="_blank" className=' btn btn-primary'>GitHub</a>
      </div>
    </article>
      )
     
})

}

 </div>


    </section>
  )
}
