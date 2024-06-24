import React, { createContext, useReducer, useState } from 'react';
import { faker } from '@faker-js/faker';

export const ProductContext = createContext()


 const CartReducer =(state,action)=>{
  console.log(state,action)
  switch(action.type){
      case "ADD_CART":
        const existingItem= state.cart.findIndex((item)=>item.id === action.payload.id);
        console.log(existingItem)
        if(existingItem !== -1){
            const updatedCart = state.cart.map((item,index)=>{
              console.log(item)
                return {
                  ...item,
                  qty:item.qty +1,
                  price:Math.floor(item.price) * (item.qty+1),
                 
                }
           
          
            })
            return {...state, cart:updatedCart}
        }else{
          return {...state,cart:[...state.cart,{...action.payload,qty:1}]}
        };
      
      case "REMOVE_CART":
        console.log(action)
        const itemToRemove = state.cart.find((item)=>item.id === action.payload.id);
        console.log(itemToRemove)
        if(itemToRemove.qty >1){
          
         const updatedCart =  state.cart.map((item)=>{
            if (item.id === action.payload.id) {
              return {
                ...item,
                qty: item.qty - 1,
                price: Math.floor(item.price) * (item.qty - 1)
              };
            }
           }) 
           console.log(updatedCart)
           return {...state,cart:updatedCart}
      
        }else{
          return { ...state,
            cart:state.cart.filter((item)=>item.id !== action.payload.id)
          }
        }
      
      default:
          return state;

  }
}

const ContextApi = ({children}) => {




    const [state,dispatch]= useReducer(CartReducer,{
      cart:[]
    })

    const addToCart = (item)=>{
      console.log(item)
      dispatch({type:"ADD_CART",payload:item})
    }

    const removeFromCart =(item)=>{
      console.log(item)
      dispatch({type:"REMOVE_CART",payload:item})
    }
  return (
    <ProductContext.Provider value={{cart:state.cart,addToCart,removeFromCart}}>
      {children}
    </ProductContext.Provider>
  )
}

export default ContextApi
