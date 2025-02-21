import React from 'react';
import { Link } from 'react-router-dom';

function Forgot() {

    // const login = () => {
    //     <Link > </Link>
    // }

  return (
    <div className='flex justify-center items-center flex-col'>
      
            <h1 className='text-3xl font-bold my-28'> Recover your password here.. </h1>

       <Link to="/"> 
            <button className='bg-blue-500 hover:bg-blue-600 text-white h-10 w-36 border-2 border-black rounded-lg'>
                 Return to Log in </button>
       </Link>
    </div>
  )
}

export default Forgot;