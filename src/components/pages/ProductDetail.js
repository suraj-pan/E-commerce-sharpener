// ProductDetail.js
import React from 'react';
import { useParams } from 'react-router-dom';
import { productData } from '../Product';



const ProductDetail = () => {
    const { productId } = useParams();
    console.log(productId)
    console.log(productData)
   const item = productData.find((p)=>p.id == productId)
    console.log(item)

    if (!item) {
        return <div>Product not found</div>;
    }

    return (
        <div className='flex flex-col bg-slate-400 h-[70vh] mx-auto justify-center items-center' >
            <h2 className='text-2xl text-white'>{item.name} - Details</h2>
            <div>
                {item.images.map((image, index) => (
                    <img key={index} src={image[index]} alt={`Product ${item.id} - ${index + 1}`} />
                ))}
            </div>
            <h3 className='text-xl text-white'>Reviews:</h3>
            <ul className='text-red-100'>
                {item.reviews.map((review, index) => (
                    <li key={index}>{review.comment}</li>
                ))}
            </ul>
        </div>
    );
};

export default ProductDetail;
