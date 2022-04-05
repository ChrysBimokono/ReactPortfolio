import React from 'react'
import './testimonial.css'

import AVTR1 from '../../assets/avatar1.jpeg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.min.css'
import 'swiper/swiper-bundle.min.css'
import { Navigation,Pagination } from 'swiper';

const data= [
  {
    avatar: AVTR1,
    name: 'Michel Duteau',
    review: '  Molestie a iaculis at erat pellentesque adipiscing commodo elit at. Et tortor consequat id porta nibh venenatis cras sed felis. Orci eu lobortis elementum nibh tellus molestie nunc. Amet porttitor eget dolor morbi. Sapien faucibus et molestie ac feugiat sed'
  },
  {
    avatar: AVTR2,
    name: 'Jordan Brown',
    review: 'Working with Chrys was an absolute pleasure. He is knowledgeable and a true expert on Shopify. His communication was great I will definitely use him again.'
  },
  {
    avatar: AVTR3,
    name: 'Leo Cunningham',
    review: '  Molestie a iaculis at erat pellentesque adipiscing commodo elit at. Et tortor consequat id porta nibh venenatis cras sed felis. Orci eu lobortis elementum nibh tellus molestie nunc. Amet porttitor eget dolor morbi. Sapien faucibus et molestie ac feugiat sed'
  }
]
function Testimonial() {
  return (
    <section id='testimonials'>
      <h5> Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className='container testimonials_container'
      
      modules={[Pagination]}
      spaceBetween={49}
      slidesPerView={1}
      pagination={{ clickable: true }}
      
      >
    

       {
         data.map(({avatar, name, review}, index)=>{
           return(
            <SwiperSlide key={index} className='testimonial'>
            <div className='client_avatar'>
              <img src={avatar} alt='Avatar' />
            </div>
            <h5 className='client_name'> {name}</h5>
              <small className='client_review'> 
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

export default Testimonial