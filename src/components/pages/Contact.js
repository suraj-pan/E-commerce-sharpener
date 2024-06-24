import React, { useState } from 'react'

const Contact = () => {
    const [name,setname] = useState({name:"",mail:"",number:""});
    
    const changeHandler= (e)=>{
            const {name,value} = e.target;
            setname((prev)=>({...prev,[name]:value}))
    }

    const submitHandler = async (e)=>{
        e.preventDefault();
        try {
          

        const formData ={
          name:name.name,
          mail:name.mail,
          number:name.number
      }

      console.log(formData)

      const response = await fetch("https://movies-ada4d-default-rtdb.firebaseio.com/movies/contact.json",{
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            'Authorization': `AIzaSyDqssr-XYkQE5aR15B7bVhhygLUnqGrHbc`,
          },
          body: JSON.stringify(formData),
        })
        const data = await response.json()
        console.log(data)
        } catch (error) {
          console.log(error)
        }
    }

  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-green-100 to-green-300 py-12'>
    <div className='bg-white shadow-md rounded-lg p-8 max-w-md w-full'>
      <h2 className='text-3xl text-center font-extrabold mb-6 text-gray-900'>Contact Us</h2>
      <form onSubmit={submitHandler} className='flex flex-col space-y-4'>
        <div>
          <label className='block text-lg font-semibold text-gray-700 mb-2'>Name</label>
          <input
            type='text'
            className='w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500'
            value={name.name}
            onChange={changeHandler}
            name='name'
            placeholder='Enter your name'
            required
          />
        </div>
        <div>
          <label className='block text-lg font-semibold text-gray-700 mb-2'>E-mail</label>
          <input
            type='email'
            className='w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500'
            value={name.mail}
            onChange={changeHandler}
            name='mail'
            placeholder='Enter your e-mail'
            required
          />
        </div>
        <div>
          <label className='block text-lg font-semibold text-gray-700 mb-2'>Phone Number</label>
          <input
            type='text'
            className='w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500'
            value={name.number}
            onChange={changeHandler}
            name='number'
            placeholder='Enter your phone number'
            required
          />
        </div>
        <button
          type='submit'
          className='bg-green-500 text-white rounded-lg px-4 py-2 font-semibold hover:bg-green-600 transition duration-300'
        >
          Submit
        </button>
      </form>
    </div>
  </div>
  )
}

export default Contact
