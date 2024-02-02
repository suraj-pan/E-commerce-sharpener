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
    <div className='flex flex-col max-h-full gap-3'>
      <form onSubmit={submitHandler} >
      <label>
        name
        <input type='text' value={name.name}  onChange={(e)=>changeHandler(e)}  name='name' placeholder='Enter the name' required />
      </label>
      <label>
     e-mail
        <input type='email' value={name.mail} onChange={(e)=>changeHandler(e)} name='mail'  placeholder='Enter the mail' required />
      </label>
      <label>
        Phone Number
        <input type='mail' value={name.number} onChange={(e)=>changeHandler(e)}  name='number' placeholder='Enter the number' required />
      </label>
      <button type='submit' >Submit</button>
      </form>
    </div>
  )
}

export default Contact
