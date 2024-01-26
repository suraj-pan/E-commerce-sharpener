import React, { useState } from 'react';
import { FaShoppingCart } from "react-icons/fa";

const Header = ({count}) => {

  return (
    <div className='flex'>
      <div className='flex gap-3'>
        <div>HOME</div>
        <div>STORE</div>
        <div>ABOUT</div>
      </div>
      <div className='justify-end flex gap-2'><FaShoppingCart />{count}</div>
    </div>
  )
}

export default Header
