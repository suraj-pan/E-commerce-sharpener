import React, { useContext, useState } from 'react';
import { FaShoppingCart } from "react-icons/fa";
import { NavLink,BrowserRouter } from 'react-router-dom';
import { AuthContext } from './store/AuthContext';

const Header = ({count}) => {

  const authCtx = useContext(AuthContext);

  return (
   
     <div className='flex bg-black justify-between items-center'>
     <div></div>
      <div className='flex gap-6 text-white '>
    {authCtx.isLoggedIn && (  <>  <NavLink to='/'>Home</NavLink>
      <NavLink to='/store' >Store</NavLink>
      <NavLink to='/product' >Product</NavLink></> )}
      <NavLink to='/about' >About</NavLink>     
      <NavLink to='/signUp' >Sign-Up</NavLink>     
      <NavLink to='/login' >Login</NavLink>     
      <NavLink to='/contact' >Contact Us</NavLink>     
       </div>
      <div className=' text-white'><FaShoppingCart />{count}</div>
    </div>
 
   
  )
}

export default Header;
