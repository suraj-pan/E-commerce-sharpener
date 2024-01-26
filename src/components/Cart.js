import React from 'react'

const Cart = () => {

    const cartElements = [

        {
        
        title: 'Colors',
        
        price: 100,
        
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
        
        quantity: 2,
        
        },
        
        {
        
        title: 'Black and white Colors',
        
        price: 50,
        
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
        
        quantity: 3,
        
        },
        
        {
        
        title: 'Yellow and Black Colors',
        
        price: 70,
        
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
        
        quantity: 1,
        
        }
        
        ]
  return (
    <div>
      <div>Cart</div>
      <div className='flex'>
        <div className='border-b-black bottom-1'>ITEM</div>
        <div>PRICE</div>
        <div>QUANTITY</div>
      </div>
      {cartElements.map((pro,index)=>(
        <div key={index} className='flex gap-1'>
            <div>{pro.imageUrl}</div>
            <div>{pro.title}</div>
            <div>{pro.price}</div>
            <div>{pro.quantity}</div>
            <button>Remove</button>
        </div>
      ))}
    </div>
  )
}

export default Cart
