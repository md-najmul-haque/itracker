import React from 'react';
import CountUp, { useCountUp } from 'react-countup';

const Counter = () => {
    
   
   
    return (
        <div className='bg-white shadow-xl  p-5 mx-5 mb-10 pb-20'>
            <h2 className='text-center text-4xl text-primary  font-bold'>Project Completed</h2>
          
            <div className='mb-5 mx-8  grid lg:grid-cols-4 md:grid-cols-2 gap-10 mt-20'>

                <div className='card border-solid drop-shadow-lg  hover:bg-sky-700 hover:text-white ease-in duration-300 gap-2 pb-3  w-70 h-60 align-center justify-center text-center bg-white  shadow-xl'>
                  
            <p className='text-violet-300 text-6xl'><i className="fa-solid  fa-file"></i></p>
            <CountUp className='text-4xl' end={100} duration={5} enableScrollSpy={true} />
            <p className=' text-gray-400 '>Completed Project</p> 
            </div>
                
            <div className='card border-solid drop-shadow-lg  hover:bg-sky-700 hover:text-white ease-in duration-300 gap-2 pb-3 w-70 h-60 align-center justify-center text-center bg-white  shadow-xl'>
            <p className='text-violet-300 text-6xl'><i className="fa-solid fa-heart"></i></p>
            <CountUp className='text-4xl' end={150} duration={5} enableScrollSpy={true} />
            <p className='text-gray-400 '>Happy Clients</p>   
            </div>
                
            
                
            </div>
        </div>
    );
};

export default Counter;