import React from 'react';
import { Link } from 'react-router-dom';

const Product = () => {
    const product = [
        {
            id: 1,
            name: 'Men Full Sleeve Printed Hooded Sweatshirt',
            images: [
                'https://rukminim2.flixcart.com/image/832/832/kfmv9u80/sweatshirt/u/g/p/l-hoodsweat-feather-black-smartees-original-imafwfgnfeg6t4fr.jpeg?q=70&crop=false',
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
            name: 'Product C',
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
    return (
        <div>
            {product.map((product, index) => (
                <div key={index} >
                    <h2>{product.name}</h2>
                    <div>
                        {product.images?.map((image, index) => (
                            <img key={index} src={image[index]} alt={`Product ${product.id} - ${index + 1}`} />
                        ))}
                    </div>
                    <h3>Reviews:</h3>
                    <ul>
                        {product. reviews.map((review, index) => (
                            <li key={index}>{review.comment}</li>
                        ))}
                    </ul>
                <button>
                <Link to={`/product/${product.id}`}>View Details</Link>
                </button>
                </div>
            ))}
        </div>
    );
};

export default Product;