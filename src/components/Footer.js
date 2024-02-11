import React from 'react'

const Footer = () => {
  return (

<footer className=" bg-gray-800 text-white py-8">
  <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center">
    <div className="mb-4 lg:mb-0">
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

    <div className="mb-4 lg:mb-0">
      <div>
        <h5 className="text-lg font-bold mb-2">Contact Us</h5>
        <p>Phone: 123456789</p>
        <p>Email: sky.deep.1997@gmail.com</p>
      </div>
    </div>

    <div>
      <hr className="border-gray-600" />
      <p className="text-sm mt-4">&copy; 2024 developed by suraj. All rights reserved.</p>
    </div>
  </div>
</footer>
    
  )
}

export default Footer
