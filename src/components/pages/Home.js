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
    <div>
      <div className='bg-slate-400 flex flex-col items-center'>
        <div className='text-white text-[60px]  font-semibold mt-3'>The Generics</div>
        <div className=' border-blue-600 border px-3 py-2 mt-3 text-[30px] text-white'>Get our Latest Album</div>
        <FaRegPlayCircle className='text-blue-600  mt-3 mb-5 text-[60px]' />
      </div>
      <div className='flex flex-col items-center'>
        <div className='text-[60px] font-bold mt-2 '>TOURS</div>
      
      {  data.map((pro,index)=>(
        <div key={index} className='flex justify-between text-[20px] mb-3 border border-b-2 w-[900px]'>
          <div>{pro.date}</div>
          <div>{pro.place}</div>
          <div>{pro.item}</div>
          <button className='bg-blue-500 px-3 py-1 rounded-md' >BUY TICKETS</button>

        </div>
        ))}

      </div>
    </div>
  )
}

export default Home
