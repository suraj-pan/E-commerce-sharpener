import React from 'react';
import { FaRegPlayCircle } from "react-icons/fa";

const Home = () => {
  const data = [
    {
      date: "JUL16",
      place: "DETROIT, MI",
      item: "DTE ENERGY MUSIC THEATRE",
    },
    {
      date: "JUL19",
      place: "TORONTO,ON",
      item: "BUDWEISER STAGE",
    },
    {
      date: "JUL22",
      place: "BRISTOW, VA",
      item: "JIGGY LUBE LIVE",
    },
    {
      date: "JUL 29",
      place: "PHOENIX, AZ",
      item: "AK-CHIN PAVILION",
    },
    {
      date: "AUG 2",
      place: "LAS VEGAS, NV",
      item: "T-MOBILE ARENA",
    },
    {
      date: "AUG 7",
      place: "CONCORD, CA",
      item: "CONCORD PAVILION",
    },

  ]
  return (
    <div className="max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex flex-col items-center">
      <div className="text-white text-4xl sm:text-5xl lg:text-6xl font-semibold mt-6 mb-3 text-center">The Generics</div>
      <div className=" px-3 py-2 text-xl sm:text-2xl lg:text-3xl text-white mb-3 text-center">Get our Latest Album</div>
      <FaRegPlayCircle className="text-green-800 text-5xl lg:text-6xl mb-6" />
    </div>
  
    <div className="flex flex-col items-center mt-8">
      <div className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-center">TOURS</div>
      
      {data.map((pro, index) => (
        <div key={index} className="flex flex-col sm:flex-row justify-between items-center mb-6 w-full max-w-screen-md">
          <div className="text-lg sm:text-xl lg:text-2xl mb-3 sm:mb-0">{pro.date}</div>
          <div className="text-lg sm:text-xl lg:text-2xl mb-3 sm:mb-0">{pro.place}</div>
          <div className="text-lg sm:text-xl lg:text-2xl mb-3 sm:mb-0">{pro.item}</div>
          <button className="text-lg sm:text-xl lg:text-2xl text-green-900 bg-white px-3 py-1 rounded-md mt-3 sm:mt-0">BUY TICKETS</button>
        </div>
      ))}
    </div>
  </div>
  )
}

export default Home