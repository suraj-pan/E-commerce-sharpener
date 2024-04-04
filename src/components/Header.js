import React, { useContext, useState } from 'react';
import { FaShoppingCart } from "react-icons/fa";
import { NavLink, BrowserRouter } from 'react-router-dom';
import { AuthContext } from './store/AuthContext';

const Header = ({ count }) => {

  const authCtx = useContext(AuthContext);
  console.log(authCtx.email)

  return (

    <div className='flex bg-black justify-between items-center'>
     
      <div className='flex gap-6 text-white font-semibold text-xl '>
        {authCtx.isLoggedIn ? (<div className='flex gap-4 justify-between mx-auto'> 
        <div>{authCtx.email}</div> 
        <div className='flex gap-3'>
        <NavLink to='/'>Home</NavLink>
          <NavLink to='/store' >Store</NavLink>

          <NavLink to='/about' >About</NavLink>

          <NavLink to='/contact' >Contact Us</NavLink>
          <NavLink to='/changePassword' >Change Password</NavLink>
          <NavLink to='/product' >Product</NavLink>
          <NavLink to='/logout' >Logout</NavLink>
        </div>
          
            <div className=' text-white'><FaShoppingCart />{count}</div>
          
        </div>) :
          <div className='flex gap-4 ml-8'>
            <NavLink to='/signUp' >Sign-Up</NavLink>
            <NavLink to='/login' >Login</NavLink>
          </div>}



      </div>

    </div>


  )
}

export default Header;
