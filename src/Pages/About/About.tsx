import { useEffect, useState } from 'react';
import Indicator from '../Home/Home/Indicator';

import Counter from './Counter';
import MeetOurTem from './OurTeam';
const About = () => {
  const [teams, setTeams] = useState([])
  useEffect(() => {
    fetch("ourteam.json")
      .then(res => res.json())
      .then(data => setTeams(data))
  }, [])
  return (
    <div className='bg-white dark:bg-black dark:text-white'>
      <Indicator />
      <div className="hero min-h-screen bg-base-10 ">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div>
            <img src="https://i.ibb.co/MDZh73c/785104-removebg-preview.png" className="max-w-sm rounded-lg" alt='' />
          </div>
          <div style={{ width: "50%" }}>
            <h1 className="text-5xl font-bold">What is iTracker ?</h1>
            <p className="py-6">iTracker is a powerful, feature-rich and mature error-tracking system, or bug-tracking system. Defect-tracking systems allow teams of developers to effectively track outstanding bugs, issues, problems, enhancements, and other change requests in their products. Simple bug-tracking capabilities are often built into integrated source code management environments such as Github or other web-based or locally installed equivalents.</p>
            <button className="btn btn-primary dark:btn dark:btn-accent ease-in duration-300 ">Explore</button>
          </div>

        </div>
      </div>

      <h1 className='text-center text-primary text-4xl font-bold'>Meet Our Team</h1>
      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4 ml-10 gap-y-10 mt-5 mb-9 container '>
        {
          teams.map(team => <MeetOurTem
            key={team}
            team={team}
          />)
        }

      </div>

      <Counter />
    </div>
  );
};

export default About;