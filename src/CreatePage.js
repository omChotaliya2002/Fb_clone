import React from 'react';
import { Link } from 'react-router-dom';

function CreatePage() {
  return (

    <div className='flex justify-center items-center flex-col'>
            <h1 className='text-3xl font-bold mt-40'> Create a facebook page </h1>

            <Link to="/"> 
            <button className='bg-blue-500 hover:bg-blue-600 mt-24 text-white h-10 w-36 border-2 border-black rounded-lg'>
                 Return to Log in </button>
            </Link>
      
    </div>
  )
}

export default CreatePage;