import React from 'react';
import teamwork from '../../../Assets/teamwork.gif';

const Teamwork = () => {

  return (
    <div className="hero bg-secondary dark:bg-black py-10">
      <div className="hero-content container mx-auto text-center">
        <div className='lg:w-4/6 dark:text-white'>
          <h1 className="text-3xl uppercase font-bold py-3">Work on team project work</h1>
          <p className="p-5 font-semibold text-left "> With iTracker, you can keep bug and issue tracking under one roof.
            Developer can  easily collaborate on and release code, tracking each step via pull-requests right in issues. Git and Subversion
            repositories keep teams connected through it all.</p>
          <img src={teamwork} alt="" className="w-full pb-4" />
        </div>
      </div>
    </div>
  );
};

export default Teamwork;