import React, { useContext, useState } from 'react';
import { FaShoppingCart } from "react-icons/fa";
import { NavLink, BrowserRouter } from 'react-router-dom';
import { AuthContext } from './store/AuthContext';
import logo from "../asset/logo.png";
import { FcShop } from "react-icons/fc";
import {ProductContext} from './store/ContextApi';
import { slide as Menu } from 'react-burger-menu'


const Header = ({ count }) => {

  const authCtx = useContext(AuthContext);
  // console.log(authCtx.car)
  const contApi = useContext(ProductContext);
  console.log(contApi.cart.length)
  const [isOpen, setIsOpen] = useState(false);

  const styles = {
    bmBurgerButton: {
      position: 'fixed',
      width: '36px',
      height: '30px',
      left: '36px',
      top: '36px',
      backgroundColor: 'green',
    },
    bmBurgerBars: {
      background: 'white',
    },
    bmBurgerBarsHover: {
      background: '#a90000',
    },
    bmCrossButton: {
      height: '24px',
      width: '24px',
    },
    bmCross: {
      background: '#bdc3c7',
    },
    bmMenuWrap: {
      position: 'fixed',
      height: '100%',
    },
    bmMenu: {
      background: '#2E8B57',
      padding: '2.5em 1.5em 0',
      fontSize: '1.15em',
    },
    bmMorphShape: {
      fill: '#373a47',
    },
    bmItemList: {
      color: 'white',
      padding: '0.8em',
    },
    bmItem: {
      display: 'inline-block',
      textDecoration: 'none',
      marginBottom: '10px',
      color: '#d1d1d1',
      transition: 'color 0.2s',
    },
    bmItemHover: {
      color: 'white',
    },
    bmOverlay: {
      background: 'rgba(0, 0, 0, 0.3)',
    },
  };

  const closeMenu = () => {
    console.log("working")
    setIsOpen(false);
  };
  return (

    <div className='md:flex  mb-4  items-center justify-between gap-3 relative  p-4 max-w-screen-xl mx-auto border-bottom-green '>

      <div className='flex items-baseline flex-col md:flex-row  justify-center gap-4 absolute md:relative'>
        <FcShop className='  h-14 w-12  md:h-16 md:w-20' />
        <span className='absolute top-[-0.5rem]  left-[-10.5rem] text-lg md:text-2xl font-semibold text-white' >Apni Dukaan</span>
      </div>

      


      <div className='hidden  md:flex items-center gap-6 text-white font-semibold text-lg '>
        {authCtx.isLoggedIn ? (<div className='flex items-center gap-4'>
          <span>{authCtx.email}</span>

          <NavLink to='/home' className="hover:text-black transition-all">Home</NavLink>
          {/* <NavLink to='/store' className="hover:text-gray-200" >Store</NavLink> */}

          <NavLink to='/about' className="hover:text-black transition-all" >About</NavLink>

          <NavLink to='/contact' className="hover:text-black transition-all" >Contact Us</NavLink>
          <NavLink to='/changePassword' className="hover:text-black transition-all" >Change Password</NavLink>
          <NavLink to='/product' className="hover:text-black transition-all" >Products</NavLink>
          <NavLink to="/cart" className='flex items-center gap-2 relative hover:text-black transition-all cursor-pointer'><FaShoppingCart /><span className='absolute bottom-2 left-3 bg-green-400 text-white text-xs rounded-full px-1 ' >{contApi.cart.length}</span></NavLink>
          <NavLink to='/logout' className="hover:text-black transition-all" >Logout</NavLink>
   

        </div>) :
          <div className='flex justify-between gap-4 ml-8'>
            <NavLink to='/signUp' className="hover:text-black" >Sign-Up</NavLink>
            <NavLink to='/login' className="hover:text-black" >Login</NavLink>
          </div>}



      </div>

   <div className='md:hidden'>
   <Menu isOpen={isOpen} styles={styles}>
      {authCtx.isLoggedIn ? (
        <div className='flex flex-col gap-4'>
      

          <div className='hover:text-gray-500'>
          <NavLink to='/home' onClick={(event) => { closeMenu() }} className="hover:text-gray-200">Home</NavLink>
          </div>
          <div>
          <NavLink to='/store' className="hover:text-gray-200" >Store</NavLink>
          </div>
        

          <div>
          <NavLink to='/about' onClick={(event) => { closeMenu() }} className="hover:text-gray-200" >About</NavLink>
          </div>

         <div>
         <NavLink to='/contact' onClick={(event) => { closeMenu() }} className="hover:text-gray-200" >Contact Us</NavLink>
         </div>
        <div>
        <NavLink to='/changePassword' onClick={(event) => { closeMenu() }} className="hover:text-gray-200" >Change Password</NavLink>
        </div>
    <div>
    <NavLink to='/product' onClick={(event) => { closeMenu()}} className="hover:text-gray-200" >Products</NavLink>
    </div>


         <div>
         <NavLink to="/cart" onClick={(event) => { closeMenu() }} className='flex items-center gap-2 relative hover:text-gray-200 cursor-pointer'><FaShoppingCart /><span className='absolute bottom-2 left-3 bg-green-400 text-white text-xs rounded-full px-1 ' >{contApi.cart.length}</span></NavLink>
         </div> 
          <NavLink to='/logout' onClick={(event) => { closeMenu() }} className="hover:text-gray-200" >Logout</NavLink>
   

        </div>) :
          <div className='flex-col sm:flex justify-between gap-4 ml-8'>
            <div>
            <NavLink to='/signUp' onClick={(event) => { closeMenu(); }}  className="hover:text-gray-200" >Sign-Up</NavLink>
            </div>
            <NavLink to='/login' onClick={(event) => { closeMenu() }} className="hover:text-gray-200" >Login</NavLink>
          </div>}
      </Menu>
   </div>
    </div>


  )
}

export default Header;
