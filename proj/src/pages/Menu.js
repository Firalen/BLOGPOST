import React from 'react'
import menuitem from './Menuitem'
import Menulist from './Menulist'

const Menu = () => {
  return (
    <div className='menu'>
      <h1 className='font'>PIZZARIA MENUS</h1>
      <div className='menus'>
        {menuitem.map((menukey)=>{
        return(
          <Menulist 
          image={menukey.image}
          name={menukey.name}
          price={menukey.price}
          />
        );
       })}
      </div>
      
      </div>
   
  )
}

export default Menu
