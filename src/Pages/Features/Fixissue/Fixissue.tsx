import React from 'react';
import fixissue from '../../../Assets/features/issue.webp';

const Fixissue = () => {

    return (
        <div className="hero bg-white dark:bg-black dark:text-white">
  <div data-aos="zoom-in" data-aos-delay="200" data-aos-duration="1000" className="hero-content text-center">
    <div className='lg:w-3/5'>
      <h1 className="text-3xl font-bold py-3">ISSUE TRACKING FIX ISSUE FASTER</h1>
      <p className="py-6 font-semibold">Make the process of how your team records and tracks bugs easier. iTracker turns reported issues into clear, easy-to-follow outlines so you can dive into details faster.</p>
      <img src={fixissue} alt="" className="w-full pb-5" />
    </div>
  </div>
</div>
    );
};

export default Fixissue;