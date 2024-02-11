import React, { createContext, useReducer, useState } from 'react';
import { faker } from '@faker-js/faker';

export const ProductContext = createContext()


 const CartReducer =(state,action)=>{
  switch(action.type){
      case "ADD_CART":
          return {...state,cart:[...state.cart,{...action.payload,qty:1}]}
      case "REMOVE_CART":
      return {...state,
      cart:state.cart.filter((p)=>p.id !== action.payload.id)
      }  
      
      default:
          return state;

  }
}

const ContextApi = ({children}) => {
    // const [cart,setcart]= useState([]);

    // const addProductToCart = (newProduct)=>{
    //     setcart([...cart,{newProduct}])
    //     console.log(cart)
    // };

    // const products = [...Array(21)].map(() => ({
    //   id: faker,
    //   name: faker.commerce.product(),
    //   price: faker.commerce.price(),
    //   image: faker.image.avatar(),
    //   inStock: faker.arrayElement([0, 3, 5, 6, 7]),
    //   fastDelivery: faker.datatype.boolean(),
    //   ratings: faker.arrayElement([1, 2, 3, 4, 5]),
    // }));
    // console.log(products)



    const [state,dispatch]= useReducer(CartReducer,{
      cart:[]
    })

    const addToCart = (item)=>{
      dispatch({type:"ADD_CART",payload:item})
    }

    const removeFromCart =(itemId)=>{
      dispatch({type:"REMOVE_CART",payload:itemId})
    }
  return (
    <ProductContext.Provider value={{cart:state.cart,addToCart,removeFromCart}}>
      {children}
    </ProductContext.Provider>
  )
}

export default ContextApi
