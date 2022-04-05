import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/project1.jpeg'
import IMG2 from '../../assets/project2.jpeg'
import IMG3 from '../../assets/project3.jpeg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'
function Portfolio() {
  return (
    <section id='portfolio'>
      <h5> My Recent Work</h5>
      <h2> Portfolio</h2>
      
     <div className='container portfolio_container'>
       <article className='portfolio_item'>
         <div className='portfolio_item-image'>
           <img src={IMG1} alt="" />
         </div>
         <h3> Space Travel Site </h3>
         <div className='portfolio_item-cta'>
            <a href='https://github.com/ChrysBimokono?tab=repositories' className='btn '>Github</a>
            <a href='https://dribbble.com/alien_pixels' className='btn btn-primary' target={'_blank'}>Live Demo</a>
         </div>
       </article>

       <article className='portfolio_item'>
         <div className='portfolio_item-image'>
           <img src={IMG2} alt="" />
         </div>
         <h3> E-commerce Product page </h3>
         <div className='portfolio_item-cta'>
            <a href='https://github.com/ChrysBimokono?tab=repositories' className='btn '>Github</a>
            <a href='https://dribbble.com/alien_pixels' className='btn btn-primary' target={'_blank'}>Live Demo</a>
         </div>
       </article>

       <article className='portfolio_item'>
         <div className='portfolio_item-image'>
           <img src={IMG3} alt="" />
         </div>
         <h3> IT African School </h3>
         <div className='portfolio_item-cta'>
            <a href='https://github.com/ChrysBimokono?tab=repositories' className='btn '>Github</a>
            <a href='https://dribbble.com/alien_pixels' className='btn btn-primary' target={'_blank'}>Live Demo</a>
         </div>
       </article>
       <article className='portfolio_item'>
         <div className='portfolio_item-image'>
           <img src={IMG1} alt="" />
         </div>
         <h3> My-portfolio </h3>
         <div className='portfolio_item-cta'>
            <a href='https://github.com/ChrysBimokono?tab=repositories' className='btn '>Github</a>
            <a href='https://dribbble.com/alien_pixels' className='btn btn-primary' target={'_blank'}>Live Demo</a>
         </div>
       </article>
     </div>

   </section>
  )
}

export default Portfolio