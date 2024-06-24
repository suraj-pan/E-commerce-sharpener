import React, { useState, useEffect, useCallback, useContext } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { AuthContext } from '../store/AuthContext';


const Store = () => {

  const [movies, setmovies] = useState([]);
  const [loading, setloading] = useState(false);

  const authCtx = useContext(AuthContext)
  const email = authCtx.email;

  console.log(email);

  const storeData = useCallback(async () => {
    try {
      setloading(true);
      const response = await fetch(`https://test-test-api.vercel.app/c252df65d35f4903a1e5b05a9db7e458/cart/${email}, { method: "GET" }`);
  
      // Check if the response is ok (status in the range 200-299)
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      // Log the entire response to debug the issue
      const contentType = response.headers.get("content-type");
      console.log(`Response content type: ${contentType}`);
  
      if (!contentType || !contentType.includes("application/json")) {
        const text = await response.text();
        throw new Error(`Unexpected response content type: ${text}`);
      }
  
      const data = await response.json();
      console.log(data);
  
      const loadedMovies = [];
  
      for (let key in data) {
        loadedMovies.push({
          id: uuidv4(),
          title: data[key].title,
          openingText: data[key].openingText,
          releaseDate: data[key].releaseDate,
        });
      }
  
      console.log(loadedMovies);
      setmovies(loadedMovies);
      setloading(false);
    } catch (error) {
      console.error("Error in getting data", error);
      setloading(false);
    }
  }, [email]);
  

  const deleteHandler = async (id) => {
    try {
      setloading(true);
      console.log(id)
      await fetch(`https://test-test-api.vercel.app/c252df65d35f4903a1e5b05a9db7e458/cart/${email}$/{id}.json`, { method: "DELETE" })
      const newData = movies.filter(movie => movie.id !== id);
      setmovies(newData)

      setloading(false)
    } catch (error) {
      console.error("Error in deleting data", error)
    }
  }


  const handlefetchData = useCallback(() => {
    storeData()
  }, [storeData])

  useEffect(() => {
    handlefetchData();
  }, [handlefetchData]);

  const [name, setname] = useState({ title: "", openingText: "", releaseDate: "" });



  const changeHandler = (e) => {
    const { name, value } = e.target;
    setname((prev) => ({ ...prev, [name]: value }));
     console.log(name,value)
  }



  const formHandler = (e) => {

    e.preventDefault()
    const formData = {
      title: name.title,
      openingText: name.openingText,
      releaseDate: name.releaseDate
    }

    console.log(formData)
    addMovieHandler(formData);

    setname({ title: "", openingText: "", releaseDate: "" })

  }

  const addMovieHandler = async (movie) => {
    const response = await fetch(`https://test-test-api.vercel.app/c252df65d35f4903a1e5b05a9db7e458/cart/${email}`, {
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
    <div className='mt-5 bg-gradient-to-r from-green-400 to-green-800 h-[80vh] relative'>
    <div className='flex flex-col justify-center pt-8 items-center flex-wrap px-3'>
      <form onSubmit={formHandler} className='flex flex-col border border-black px-3 py-2 w-full max-w-lg'>
        <label className='text-lg font-bold'>
          Title:
          <input name='title' className='ml-2 w-full rounded-md px-2 py-1 my-2' value={name.title} onChange={(e) => changeHandler(e)} type='text' placeholder='Enter the title' />
        </label>
        <label className='text-lg font-bold'>
          Opening Text:
          <input className='ml-2 w-full rounded-md px-2 py-1 my-2' name="openingText" value={name.openingText} onChange={(e) => changeHandler(e)} type='text' placeholder='Enter the opening text' />
        </label>
        <label className='text-lg font-bold'>
          Release Date:
          <input className='ml-2 w-full rounded-md px-2 py-1 my-2' name="releaseDate" value={name.releaseDate} onChange={(e) => changeHandler(e)} type='text' placeholder='Enter the release date' />
        </label>
        <button className='border border-black bg-slate-600 rounded-md text-lg py-2' type='submit'>Submit</button>
      </form>
    </div>
  
    <button onClick={handlefetchData} className='mx-auto   flex w-[100px] px-2 rounded-md bg-slate-200  mt-5'>Fetch Data</button>
  
    {loading ? (
      <div className='absolute top-[400px] left-1/2 transform -translate-x-1/2'>
        <button disabled type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 inline-flex items-center">
          <svg aria-hidden="true" role="status" className="inline w-4 h-4 mr-3 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB" />
            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor" />
          </svg>
          Loading...
        </button>
      </div>
    ) : (
      <div className='flex flex-col gap-3 mt-8 px-4'>
        {movies?.map((movie) => (
          <div key={movie.id} className='border-b pb-2'>
            <div className='font-bold'>{movie.title}</div>
            <div>{movie.openingText}</div>
            <div>{movie.releaseDate}</div>
            <button className='mt-2 bg-red-500 text-white rounded-md px-2 py-1' onClick={() => deleteHandler(movie.id)}>Delete</button>
          </div>
        ))}
      </div>
    )}
  </div>
  
  )
}

export default Store
