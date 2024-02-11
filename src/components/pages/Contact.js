import React, { useState } from 'react'

const Contact = () => {
    const [name,setname] = useState({name:"",mail:"",number:""});
    
    const changeHandler= (e)=>{
            const {name,value} = e.target;
            setname((prev)=>({...prev,[name]:value}))
    }

    const submitHandler = async (e)=>{
        e.preventDefault();


        const formData ={
            name:name.name,
            mail:name.mail,
            number:name.number
        }

        const response = await fetch("https://movies-ada4d-default-rtdb.firebaseio.com/movies.json",{
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              // Add any additional headers if needed
            },
            body: JSON.stringify(formData),
          })
          const data = await response.json()
          console.log(data)
    }

  return (
    <div className='flex flex-col max-h-full gap-3 bg-slate-400 h-[67vh] pt-6'>
    <h2 className='text-2xl text-white text-center font-extrabold'>Contact Us</h2>
      <form onSubmit={submitHandler} className='flex flex-col justify-center items-center gap-2 ' >
      <label className='text-lg font-semibold '>
        name
        <input type='text' className='ml-9 rounded-lg px-2 py-1' value={name.name}  onChange={(e)=>changeHandler(e)}  name='name' placeholder='Enter the name' required />
      </label>
      <label className='text-lg font-semibold '>
     e-mail
        <input type='email' className='ml-9 rounded-lg px-2 py-1' value={name.mail} onChange={(e)=>changeHandler(e)} name='mail'  placeholder='Enter the mail' required />
      </label>
      <label className='text-lg font-semibold '>
        Phone Number
        <input type='mail' className='ml-2 rounded-lg px-2 py-1' value={name.number} onChange={(e)=>changeHandler(e)}  name='number' placeholder='Enter the number' required />
      </label>
      <button type='submit' className='bg-black text-white px-4 py-2 rounded-lg' >Submit</button>
      </form>
    </div>
  )
}

export default Contact
