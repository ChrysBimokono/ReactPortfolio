import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'
function Services() {
  return (
    <section id='services'>
      <h5> What I offer</h5>
      <h2>Services</h2>

      <div className='container services_container'>
           <article className='service'>
             <div className='service_head'>
               <h3>UX/UI Design</h3>
             </div>

             <ul className='service_list'>
               <li>
                 <BiCheck className='service_list-icon' />
                 <p> Lorem, ipsum dolor sit amet consectetreur elit.</p>
               </li>
               <li>
                 <BiCheck className='service_list-icon' />
                 <p> Lorem, ipsum dolor sit amet consectetreur elit.</p>
               </li>
               <li>
                 <BiCheck className='service_list-icon' />
                 <p> Lorem, ipsum dolor sit amet consectetreur elit.</p>
               </li>
               <li>
                 <BiCheck className='service_list-icon' />
                 <p> Lorem, ipsum dolor sit amet consectetreur elit.</p>
               </li>
             </ul>
           </article>
           {/* Web Development  */}
           <article className='service'>
             <div className='service_head'>
               <h3>Web Development</h3>
             </div>

             <ul className='service_list'>
               <li>
                 <BiCheck className='service_list-icon' />
                 <p> Website Store </p>
               </li>
               <li>
                 <BiCheck className='service_list-icon' />
                 <p> App building</p>
               </li>
               <li>
                 <BiCheck className='service_list-icon' />
                 <p> Website analysis and A/B testing</p>
               </li>
               <li>
                 <BiCheck className='service_list-icon' />
                 <p> Webpage Optimization and SEO</p>
               </li>
             </ul>
           </article>
           {/* Ecommerce Dev */}
           <article className='service'>
             <div className='service_head'>
               <h3>E-commerce Development</h3>
             </div>

             <ul className='service_list'>
               <li>
                 <BiCheck className='service_list-icon' />
                 <p> Shopify Theme Customization</p>
               </li>
               <li>
                 <BiCheck className='service_list-icon' />
                 <p> Shopify Migration</p>
               </li>
               <li>
                 <BiCheck className='service_list-icon' />
                 <p> Webpage Optimization and SEO</p>
               </li>
               <li>
                 <BiCheck className='service_list-icon' />
                 <p> Shopify App Integrations</p>
               </li>
             </ul>
           </article>
      </div>


     </section>
  )
}

export default Services