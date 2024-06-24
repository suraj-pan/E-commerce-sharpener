import React, { useState } from 'react';
import { Link } from 'react-router-dom';


export  const productData = [
    {
        id: 1,
        name: 'Men Full Sleeve Printed Hooded Sweatshirt',
        price:"500",
        images: "https://assets.ajio.com/medias/sys_master/root/20240411/Zcnl/6617bb4e05ac7d77bb031e27/-473Wx593H-467162071-black-MODEL3.jpg",
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
        price:"300",
        images: "https://assets.ajio.com/medias/sys_master/root/20240409/0M9Q/661443f405ac7d77bbfe1b2e/-473Wx593H-467162071-seagreen-MODEL.jpg",
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
        price:"800",
        images: "https://assets.ajio.com/medias/sys_master/root/20240313/dL2Z/65f0d65505ac7d77bbaf09d8/-473Wx593H-467162071-beige-MODEL.jpg",
        reviews: [
            {
                id: 301,
                rating: 5,
                comment: 'Absolutely love it!',
            },
        ],
    },
    {
        id: 4,
        name: 'Structured Stripe Sweatshirt',
        price:"800",
        images: "https://assets.ajio.com/medias/sys_master/root/20230727/01Sk/64c28436eebac147fc8efd97/-473Wx593H-443020096-navy-MODEL.jpg",
        reviews: [
            {
                id: 301,
                rating: 5,
                comment: 'Absolutely love it!',
            },
        ],
    },
    {
        id: 5,
        name: 'Colourblocked Zip-Front Sweatshirt',
        price:"1200",
        images: "https://assets.ajio.com/medias/sys_master/root/20220823/v6g9/6303e50caeb2691761914fb3/-473Wx593H-441145049-offwhite-MODEL.jpg",
        reviews: [
            {
                id: 301,
                rating: 5,
                comment: 'Absolutely love it!',
            },
        ],
    },
    {
        id: 6,
        name: 'Striped Crew-Neck Sweatshirt',
        price:"1200",
        images: "https://assets.ajio.com/medias/sys_master/root/20230720/Qdin/64b950b1a9b42d15c9656a97/-473Wx593H-443015029-navy-MODEL2.jpg",
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

    const [searchQuery,setsearchQuery] = useState("");

    const handleSearchquery = (e)=>{
        setsearchQuery(e.target.value)
    }

    const filteredData =productData.filter(product =>product.name.toLowerCase().includes(searchQuery.toLowerCase()))
    .sort((a, b) => b.name.localeCompare(a.name));
  
    console.log(filteredData)
    return (
        <div className="flex flex-col my-5 px-4 items-center bg-gradient-to-r from-green-100 to-green-300">
        <input
          value={searchQuery}
          onChange={handleSearchquery}
          className="mb-6 py-2 px-2 rounded-md"
          placeholder="Search the item here"
        />
        <div className="flex flex-wrap justify-center gap-8">
          {filteredData.map((product, index) => (
            <div key={index} className="w-[90%] sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 mb-8">
              <div className="border p-3 border-red-700 rounded-sm">
                <img
                  className="w-full h-48 sm:h-64 object-cover"
                  src={product.images}
                  alt={`Product ${index}`}
                />
                <div className="p-4">
                  <h2 className="text-xl sm:text-2xl font-bold">{product.name}</h2>
                  <div className="text-red-600 text-lg font-semibold">{product.price}</div>
                  <button className="bg-black text-white rounded-md px-2 mt-2">
                    <Link to={`/product/${product.id}`}>View Details</Link>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
    );
};

export default Product;