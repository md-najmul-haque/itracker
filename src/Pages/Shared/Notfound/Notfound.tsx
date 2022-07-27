import React from "react";
import notfound from "../../../Assets/notfound.jpg";

const Notfound = () => {
  return (
    <div>
      
        <div className="flex items-center justify-center ">
            <div className="bg-white dark:bg-gray-800  flex items-center justify-center mx-4 md:w-2/3">
                <div className="flex flex-col items-center">
                    <img className="px-4 py-2 hidden md:block w-full" src="https://www.ursindia.com/image/404.jpg" />
                    <img className="md:hidden" src="https://www.ursindia.com/image/404.jpg" />
                    <h1 className="px-4 pt-8 pb-4 text-center dark:text-white text-5xl font-bold leading-10 text-gray-800">OOPS!</h1>
                    <p className="px-4 pb-10 text-base leading-none dark:text-gray-200 text-center text-gray-600">No signal here! we cannot find the page you are looking for</p>
                    <button className="mx-4 h-10 w-44  rounded-md text-white text-base bg-indigo-700 hover:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-opacity-50 focus:ring-indigo-800">Go Back to Homepage</button>
                </div>
            </div>
        </div>
    
      
    </div>
  );
};

export default Notfound;
