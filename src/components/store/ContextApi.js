import React, { createContext, useState } from 'react';

export const ProductContext = createContext()

const ContextApi = ({children}) => {
    const [cart,setcart]= useState([]);

    const addProductToCart = (newProduct)=>{
        setcart([...cart,{newProduct}])
        console.log(cart)
    };

  return (
    <ProductContext.Provider value={{cart,addProductToCart}}>
      {children}
    </ProductContext.Provider>
  )
}

export default ContextApi
