import React from "react";
import logo from "./facebook.svg";
import { Link } from "react-router-dom";

function Fb() {
  return (
    <>
      <div className="container mt-20 mx-auto flex justify-center items-center select-none">
        <div className="left w-[40%] mb-40 select-none">
          <img
            className="w-80 -mb-10 sm:w-[90%] sm:-mb-[20px] md:w-[75%] md:mb-[-20px] lg:w-[70%] lg:-mb-[40px] xl:w-[60%] xl:-mb-[40px] 2xl:w-[60%] 2xl:-mb-[50px]"
            src={logo}
          />
          <p className="w-[95%] ml-2 font-semibold text-[25px] sm:text-xl sm:-mb-20 md:-mb-20 lg:text-xl xl:text-[25px] 2xl:text-[30px]">
            {" "}
            Facebook helps you connect and share with the people in your life.{" "}
          </p>
        </div>

        <div className="right flex flex-col bg-white p-8 mx-14 my-10 rounded-lg w-1/3 sm:w-96 sm:p-6 relative select-none">
          <input
            className="px-4 h-12 my-1 border border-1 border-gray-300 outline-blue-400 rounded-lg text-lg"
            type="text"
            placeholder="Email address or phone number"
          />
          <input
            className="px-4 h-12 my-1 border border-1 border-gray-300 outline-blue-400 rounded-lg text-lg"
            type="password"
            placeholder="Password"
          />
          <button className="bg-blue-600 text-white my-2 h-12 font-bold text-xl rounded-md hover:bg-blue-700">
            {" "}
            Log in{" "}
          </button>
          <span className="text-blue-700 text-center font-normal text-sm my-1 cursor-pointer hover:underline">
            Forgotten password?{" "}
          </span>
          <hr className="border-1 border-gray-300 my-4" />
          <button className="bg-green-500 h-12 font-bold text-sm rounded-lg text-white px-4 mx-auto w-fit hover:bg-green-700">
            {" "}
            Create New Account{" "}
          </button>

          <p className="absolute mx-2 sm:-mx-9 sm:-bottom-12 sm:w-96 md:-mx-3 lg:-mx-1 xl:-mx-0">
            {" "}
            <span className="font-bold cursor-pointer hover:underline">
              {" "}
              Create a Page
            </span>{" "}
            for a celebrity, brand or business.{" "}
          </p>
        </div>
      </div>
    </>
  );
}

export default Fb;

{
  /* <div className='flex justify-center items-center ml-[40%] -mt-4'>
<p> <Link className='font-bold cursor-pointer hover:underline' to="/createPage"> Create a Page</Link> for a celebrity, brand or business. </p>
</div> */
}