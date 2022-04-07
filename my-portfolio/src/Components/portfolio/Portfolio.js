import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/project1.jpeg'
import IMG2 from '../../assets/project2.jpeg'
import IMG3 from '../../assets/project3.jpeg'
import IMG4 from '../../assets/project4.jpeg'
import IMG5 from '../../assets/project5.jpeg'
import IMG6 from '../../assets/project6.jpeg'
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
            <a href='https://www.loom.com/share/5ad10287b2074c35a60baf2e498f9b0a' className='btn btn-primary' target={'_blank'}>Live Demo</a>
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
         <h3> IT School Website </h3>
         <div className='portfolio_item-cta'>
            <a href='https://github.com/ChrysBimokono?tab=repositories' className='btn '>Github</a>
            <a href='https://www.loom.com/share/7e4c24a3815643dd928a526efd83759b' className='btn btn-primary' target={'_blank'}>Live Demo</a>
         </div>
       </article>
       <article className='portfolio_item'>
         <div className='portfolio_item-image'>
           <img src={IMG4} alt="" />
         </div>
         <h3> E-commerce Restaurant </h3>
         <div className='portfolio_item-cta'>
            <a href='https://github.com/ChrysBimokono?tab=repositories' className='btn '>Github</a>
            <a href='https://www.loom.com/share/0acf5756ef304fc8bf87e0599cd07273' className='btn btn-primary' target={'_blank'}>Live Demo</a>
         </div>
       </article>

       <article className='portfolio_item'>
         <div className='portfolio_item-image'>
           <img src={IMG5} alt="" />
         </div>
         <h3> Landing Page </h3>
         <div className='portfolio_item-cta'>
            <a href='https://github.com/ChrysBimokono?tab=repositories' className='btn '>Github</a>
            <a href='https://www.loom.com/share/07296574d92b43d28593328eedf7c311' className='btn btn-primary' target={'_blank'}>Live Demo</a>
         </div>
       </article>

       <article className='portfolio_item'>
         <div className='portfolio_item-image'>
           <img src={IMG6} alt="" />
         </div>
         <h3> My portfolio </h3>
         <div className='portfolio_item-cta'>
            <a href='https://github.com/ChrysBimokono?tab=repositories' className='btn '>Github</a>
            <a href='https://www.loom.com/share/a2de5c4b746f44e6b9d3d90c98ca340d' className='btn btn-primary' target={'_blank'}>Live Demo</a>
         </div>
       </article>
     </div>

   </section>
  )
}

export default Portfolio