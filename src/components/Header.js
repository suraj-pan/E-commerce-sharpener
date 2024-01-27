import React, { useState } from 'react';
import { FaShoppingCart } from "react-icons/fa";
import { NavLink,BrowserRouter } from 'react-router-dom';

const Header = ({count}) => {

  return (
   
     <div className='flex bg-black justify-between items-center'>
     <div></div>
      <div className='flex gap-6 text-white '>
      <NavLink to='/'>Home</NavLink>
      <NavLink to='/store' >Store</NavLink>
      <NavLink to='/about' >About</NavLink>     
       </div>
      <div className=' text-white'><FaShoppingCart />{count}</div>
    </div>
 
   
  )
}

export default Header;
