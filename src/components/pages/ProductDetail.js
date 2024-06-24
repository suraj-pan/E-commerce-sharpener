// ProductDetail.js
import React, { useCallback, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { productData } from '../Product';
import {ProductContext} from '../store/ContextApi';


const ProductDetail = () => {
    const { productId } = useParams();
    const conApi = useContext(ProductContext)
    console.log(conApi)
    // console.log(productId)
    // console.log(productData)
   const item = productData.find((p)=>p.id == productId)
    console.log(item)

    if (!item) {
        return <div>Product not found</div>;
    }

    return (
        <div className='flex flex-col bg-gradient-to-r from-green-100 to-green-300 my-3 mx-auto justify-center items-center' >
            <h2 className='text-2xl text-black'>{item.name} - Details</h2>
            <div className='w-1/3'>
            
                    <img key={item.id} className='w-full  object-fill' src={item.images} alt={`Product ${item.id} -`} />
               
            </div>
            <div className='text-red-600 font-bold text-2xl'>{item.price}</div>
            <button onClick={()=>conApi.addToCart(item)} className='bg-black my-3 text-white px-2 py-1 rounded-md'>Add to Cart</button>
            <h3 className='text-xl text-black'>Reviews:</h3>
            <ul className='text-red-300'>
                {item.reviews.map((review, index) => (
                    <li key={index}>{review.comment}</li>
                ))}
            </ul>
           
        </div>
    );
};

export default ProductDetail;
