import React from 'react';
import { Link } from 'react-router-dom';


export  const productData = [
    {
        id: 1,
        name: 'Men Full Sleeve Printed Hooded Sweatshirt',
        images: [
            'data:image/jpeg;base64,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',
            'https://rukminim2.flixcart.com/image/832/832/kf0087k0/sweatshirt/u/g/p/xl-hoodsweat-feather-black-smartees-original-imafvk3zzzmbz3p8.jpeg?q=70&crop=false',
            'https://rukminim2.flixcart.com/image/832/832/kf0087k0/sweatshirt/u/g/p/xl-hoodsweat-feather-black-smartees-original-imafvk3z7hv9fuzf.jpeg?q=70&crop=false',
        ],
        reviews: [
            {
                id: 101,
                rating: 5,
                comment: 'This product is amazing!',
            },
            {
                id: 102,
                rating: 4,
                comment: 'Good value for money.',
            },
        ],
    },
    {
        id: 2,
        name: 'Men Regular Fit Solid Mandarin Collar Casual Shirt',
        images: [
            'https://rukminim2.flixcart.com/image/832/832/xif0q/shirt/k/h/k/40-11895996-roadster-original-imafvtvzncggbsvk-bb.jpeg?q=70&crop=false',
            'https://rukminim2.flixcart.com/image/832/832/kfcv6vk0-0/shirt/a/d/2/40-11895996-roadster-original-imafvtvzq7tgxzqh.jpeg?q=70&crop=false',
        ],
        reviews: [
            {
                id: 201,
                rating: 3,
                comment: 'Average product.',
            },
            {
                id: 202,
                rating: 2,
                comment: 'Not satisfied with the quality.',
            },
        ],
    },
    {
        id: 3,
        name: 'Men Checked shirt of 100% cotton',
        images: [
            'https://rukminim2.flixcart.com/image/832/832/l4d2ljk0/shirt/e/h/d/-original-imagfaekytkyxjhg.jpeg?q=70&crop=falseg',
            'https://rukminim2.flixcart.com/image/832/832/l4d2ljk0/shirt/5/w/w/-original-imagfaektecmgbhf.jpeg?q=70&crop=false',
        ],
        reviews: [
            {
                id: 301,
                rating: 5,
                comment: 'Absolutely love it!',
            },
        ],
    },
    // Add more products as needed
];

const Product = () => {
  
    return (
        <div className='bg-slate-400 flex h-[70vh]  flex-wrap justify-around px-4 items-center'>
            {productData.map((product, index) => (
                <div key={index} className='w-[500px]' >
                    <h2 className='text-2xl'>{product.name}</h2>
                    <div>
                        {product.images?.map((image, index) => (
                            <img key={index} src={image[index]} alt={`Product ${product.id} - ${index + 1}`} />
                        ))}
                    </div>
                
                <button className='bg-black  text-white rounded-md px-2'>
                <Link to={`/product/${product.id}`}>View Details</Link>
                </button>
                </div>
            ))}
        </div>
    );
};

export default Product;