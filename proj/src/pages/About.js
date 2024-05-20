import React from 'react'
import pizza from '../img/multiplePizzas.jpeg'
const About = () => {
  return (
    <div className='about'>
      <div className='about1' style={{backgroundImage:`url(${pizza})`}}>
     </div>
     <div className='about2'>
      <h1 className='h1'>ABOUT US</h1>
      <p>Pizza, the beloved culinary creation, is a dish that has captured the hearts and palates of people worldwide.
         Originating from Italy, this circular delight consists of a thin or thick crust, topped with a variety of ingredients
         such as cheese, tomato sauce, meats, vegetables, and herbs. The combination of flavors and textures, along with
         the option to customize toppings, allows pizza to cater to a wide range of preferences. Whether enjoyed as a quick
         bite, a family meal, or a social gathering centerpiece, pizza has become an iconic symbol of comfort, indulgence, 
         and shared moments. Its universal appeal and versatility make it a timeless favorite that continues to bring joy to
         countless food enthusiasts around the globe.</p>
     </div>
    </div>
    
  )
}

export default About
 