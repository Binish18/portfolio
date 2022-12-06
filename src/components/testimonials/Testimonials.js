import React from 'react'
import './Testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'
// import Swiper core and required modules
import { Pagination, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/pagination';

const data =[
  {
    avatar:AVTR1,
    name:"Tina Snow",
    review:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. "
   },
   {
    avatar:AVTR2,
    name:"Tina Snow",
    review:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. "
   },
   {
    avatar:AVTR3,
    name:"Tina Snow",
    review:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. "
   },
   {
    avatar:AVTR4,
    name:"Tina Snow",
    review:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. "
   },


]
const Testimonials = () => {
  return (
    <section id='testimonials'  className='section5'>
        <h2> Review From Clients <br/> <h1>Testimonials</h1></h2>
        <Swiper className='container testimonials__container'
         // install Swiper modules
      modules={[ Pagination, A11y]}
      spaceBetween={40}
      slidesPerView={1}
     
      pagination={{ clickable: true }}
   >
          {
            data.map(({avatar,name,review})=>{
              return(
                <SwiperSlide className='testimonial'>
                <div className='client__avatar'>
                <img src={avatar}  alt=''/>
               </div>
                <h5 className='client__name'>{name}</h5>
                <small className='client__review'>
               {review}
                </small>
                
             </SwiperSlide>
              )
            })
          }
        
        </Swiper>
    </section>
  )
}

export default Testimonials