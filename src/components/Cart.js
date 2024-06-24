import React, { useContext } from 'react'
import {ProductContext} from './store/ContextApi';

const Cart = () => {


  const conApi = useContext(ProductContext);

   console.log(conApi.cart)
   const totalPrice = conApi.cart.reduce((acc,item)=>acc+=item.price,0)
   console.log(totalPrice)
  const handleRemoveItem = (item) => {
    console.log(item)
    conApi.removeFromCart(item)
  };
  return (
<div className="min-h-screen flex flex-col items-center mt-4 bg-gradient-to-r from-green-100 to-green-300 text-black">
  {conApi.cart.length !== 0 ? (
    conApi.cart.map((item, index) => (
      <div key={index} className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-6 py-4 sm:py-6">
        <div className="text-center sm:text-left">{item.name}</div>
        <div className="text-center sm:text-left">Qty: {item.qty}</div>
        <div className="text-center sm:text-left">Price: {item.price}</div>
        <button
          className="bg-red-500 hover:bg-red-700 px-3 py-1 rounded-lg mt-2 sm:mt-0"
          onClick={() => handleRemoveItem(item)}
        >
          Remove Item
        </button>
      </div>
    ))
  ) : (
    <div className="text-3xl font-semibold my-10 text-center">
      You have not added any items to the cart...
    </div>
  )}

  <div className="font-bold text-lg my-4 sm:my-10">
    Total Price: <span className="text-red-600">{totalPrice}</span>
  </div>
</div>
  )
}

export default Cart
