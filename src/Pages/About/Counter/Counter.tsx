import React from 'react';
import './Counter.css'
const Counter = () => {
    return (
        <div>
            <h1 className='text-center text-4xl '>Our Coustomer</h1>
             <div className='grid grid-cols-3 ml-14 mb-14 mt-20'>
        
        <div className="card w-96 bg-base-100 shadow-xl  bg-orange-400 text-white hover:bg-sky-700 hover:text-white  hover:bg-sky-700 hover:text-white ease-in duration-300">
            <div className="card-body">
                <h1 className='text-center text-3xl'>Total User</h1>
<h2 className="card-title counter ml-24"></h2>

<div className="card-actions justify-end">
 
</div>
</div>
</div>
        <div className="card w-96 bg-base-100 shadow-xl  bg-orange-400 text-white hover:bg-sky-700 hover:text-white  hover:bg-sky-700 hover:text-white ease-in duration-300">
            <div className="card-body">
                <h1 className='text-center text-3xl'>Continue User</h1>
<h2 className="card-title counter ml-24"></h2>

<div className="card-actions justify-end">
 
</div>
</div>
</div>
   
    

    </div>
       </div>
       
    );
};

export default Counter;