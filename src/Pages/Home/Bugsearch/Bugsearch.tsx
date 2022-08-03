import React from 'react';
import issue from "../../../Assets/monitoring.gif";

const Bugsearch = () => {

  return (
  
<section className="max-w-full bg-white px-10 py-20">
      <div className="flex justify-center items-center my-10 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
     <div>
     <h1 className="text-5xl font-bold">Ship great software with <br /> automated issuetracking</h1>
      <p className="py-6 font-bold">A simple, fast and scalable bug tracking system that helps you manage bugs <br />  easily and deliver great products on time.</p>
     </div>
        <div className="flex justify-center content-center">
          <img  className="w-full" src={issue} alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default Bugsearch;