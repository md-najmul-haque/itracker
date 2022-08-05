import React from 'react';
import { Link, Route } from 'react-router-dom';
import MeetOurTeam from './MeetOurTeams';



const Abouts = () => {
    return (
        <div>
    <div className="hero min-h-screen bg-base-10">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src="https://i.ibb.co/MDZh73c/785104-removebg-preview.png" className="max-w-sm rounded-lg " />
    <div style={{width:"50%"}}>
      <h1 className="text-5xl font-bold">What is iTracker ?</h1>
      <p className="py-6">iTracker is a powerful, feature-rich and mature error-tracking system, or bug-tracking system. Defect-tracking systems allow teams of developers to effectively track outstanding bugs, issues, problems, enhancements, and other change requests in their products. Simple bug-tracking capabilities are often built into integrated source code management environments such as Github or other web-based or locally installed equivalents.</p>
      <button className="btn btn-primary">Explore</button>
    </div>
  </div>
</div>
      <MeetOurTeam></MeetOurTeam>

        </div>
    );
};

export default Abouts;