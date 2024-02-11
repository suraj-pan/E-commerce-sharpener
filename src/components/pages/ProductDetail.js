// ProductDetail.js
import React from 'react';
import { useParams } from 'react-router-dom';
import Product  from '../Product';



const ProductDetail = () => {
    const { productId } = useParams();
    console.log(productId)
   const item = Product.find((p)=>p.id === productId)
    console.log(item)

    if (!item) {
        return <div>Product not found</div>;
    }

    return (
        <div>
            {/* <h2>{product.name} - Details</h2>
            <div>
                {product.images.map((image, index) => (
                    <img key={index} src={image[index]} alt={`Product ${product.id} - ${index + 1}`} />
                ))}
            </div>
            <h3>Reviews:</h3>
            <ul>
                {product.reviews.map((review, index) => (
                    <li key={index}>{review.comment}</li>
                ))}
            </ul> */}
        </div>
    );
};

export default ProductDetail;
