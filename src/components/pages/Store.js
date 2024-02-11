import React, { useState,useEffect, useCallback, useContext } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { AuthContext } from '../store/AuthContext';


const Store = () => {

  const [movies,setmovies] = useState([]);
  const [loading,setloading] = useState(false);

  const authCtx = useContext(AuthContext)
  const email = authCtx.email;

  console.log(email);
  
  const storeData = useCallback( async ()=>{
    try {
      setloading(true);
      const response = await fetch(`https://crudcrud.com/api/99c21b3ee1eb45f6836ca2595a2a4e9e/cart${email}`);
      const data = await response.json()
      console.log(data)

      const loadedMovies =[];

      for(let key in data){
        loadedMovies.push({
          id:uuidv4(),
          title:data[key].title,
          openingText:data[key].openingText,
          releaseDate:data[key].releaseDate
        })
      }

      console.log(loadedMovies)
      setmovies(loadedMovies);
      setloading(false);
    } catch (error) {
      console.error("error in getting data",error);
    }

  },[])

  const deleteHandler = async(id)=>{
   try {
    setloading(true);
    console.log(id)
    await fetch(`https://crudcrud.com/api/99c21b3ee1eb45f6836ca2595a2a4e9e/cart${email}$/{id}.json`,{method:"DELETE"})
      const newData = movies.filter(movie=>movie.id !== id);
      setmovies(newData)

      setloading(false)
   } catch (error) {
    console.error("Error in deleting data",error)
   }
  }


  const handlefetchData = useCallback(()=>{
    storeData()
  },[storeData]) 

  useEffect(() => {
    handlefetchData();
  }, [handlefetchData]);

  const [name,setname]=useState({title:"",openingText:"",releaseDate:""});



  const changeHandler =(e)=>{
     const  {name,value} = e.target;
     setname((prev)=>({...prev,[name]:value}));
    //  console.log(name,value)
  }



  const formHandler =(e)=>{

    e.preventDefault()
    const formData ={
      title:name.title,
      openingText:name.openingText,
      releaseDate:name.releaseDate
    }

    console.log(formData)
    addMovieHandler(formData);

    setname({title:"",openingText:"",releaseDate:""})
    
  }

  const addMovieHandler = async(movie )=>{
    const response = await fetch(`https://crudcrud.com/api/99c21b3ee1eb45f6836ca2595a2a4e9e/cart${email}`,{
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // Add any additional headers if needed
      },
      body: JSON.stringify(movie),
    })
    const data = await response.json()
    console.log(data)
  }


  return (
    <div >
    <form  onSubmit={formHandler} >
      <label>
        Title
        <input  name='title' value={name.title} onChange={(e)=>changeHandler(e)} type='text' placeholder='Enter the title'/>
      </label>
      <label>
        Opening Text
        <input  name="openingText"  value={name.openingText} onChange={(e)=>changeHandler(e)} type='text' placeholder='Enter the opening text'/>
      </label> <label>
        Release Date
        <input  name="releaseDate"  value={name.releaseDate} onChange={(e)=>changeHandler(e)} type='text' placeholder='Enter the release date'/>
      </label>
      <button type='submit' >Submit</button>
    </form>
  <button onClick={handlefetchData} >Fetch Data</button>

   {loading ?(<div>
    
    <button disabled type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 inline-flex items-center">
    <svg aria-hidden="true" role="status" className="inline w-4 h-4 me-3 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB"/>
    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor"/>
    </svg>
    Loading...
    </button>
    
    
       </div>):(<div className='flex flex-col gap-3'>
        {movies?.map((movie,index)=>(
          <div key={movie.id} >
            <div>{movie.title}</div>
            <div>{movie.openingText}</div>
            <div>{movie.releaseDate}</div>
            <button onClick={()=>deleteHandler(movie.id)} >Delete</button>
          </div>
        ))}
       </div>)}

   
    </div>
  )
}

export default Store
