import React from 'react';
import teamwork from '../../../Assets/teamwork.gif';

const Teamwork = () => {

  return (
  <>
    <div className="hero  bg-neutral text-white">
  <div className="hero-content text-center">
    <div className='lg:w-4/6'>
      <h1 className="text-3xl font-bold py-3">Work on team project work</h1>
      <p className="py-6 font-semibold"> With Backlog, you can keep bug and issue tracking under one roof.
          Developer can  easily collaborate on and release code, tracking each step via pull-requests right in issues. Git and Subversion
          repositories keep teams connected through it all.</p>
      <img src={teamwork} alt="" className="w-full" />
    </div>
  </div>
</div>
    </>
  );
};

export default Teamwork;