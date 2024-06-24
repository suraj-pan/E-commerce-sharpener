import React from 'react'

const Footer = () => {
  return (

<footer className="bg-green-400 text-white py-8">
  <div className="container mx-auto px-4">
    <div className="flex flex-col lg:flex-row justify-between items-start">
      <div className="mb-4 lg:mb-0 lg:w-1/3">
        <div>
          <h5 className="text-lg font-bold mb-2">About Us</h5>
          <p>We specialize in creating quality websites and applications.</p>
        </div>
        <div className="mt-4">
          <h5 className="text-lg font-bold mb-2">Address</h5>
          <p>Chittorgarh</p>
          <p>Rajasthan</p>
        </div>
      </div>

      <div className="mb-4 lg:mb-0 lg:w-1/3">
        <div>
          <h5 className="text-lg font-bold mb-2">Contact Us</h5>
          <p>Phone: 123456789</p>
          <p>Email: sky.deep.1997@gmail.com</p>
        </div>
      </div>

      <div className="lg:w-1/3 lg:text-right">
        <hr className="border-gray-600 my-4 lg:hidden" />
        <p className="text-sm mt-4 text-center lg:text-right">&copy; 2024 developed by suraj. All rights reserved.</p>
      </div>
    </div>
  </div>
</footer>

    
  )
}

export default Footer
