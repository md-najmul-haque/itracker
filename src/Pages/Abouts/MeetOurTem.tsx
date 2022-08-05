import React from 'react';
import './MeetOurTeam.css'
const MeetOurTem = ({ team }: any) => {

    const { name, position, img, facebook, github, linkedin, email } = team;
    return (
        <div className='text-center'>
<div className="card w-96 bg-white shadow-xl">
    
                <div className="card-body">
                <div className="avatar">
  <div className="w-24 memberImg rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
    <img src={img} />
  </div>
</div>
    <h2 className="card-title name"> {name} </h2>
    <p> {position} </p>
            <div className='icon'>
            <a href={facebook} target="_blank"><i className="fa-brands  fa-facebook"></i></a>
              <a href={linkedin} target="_blank"> <i className="fa-brands ml-3  fa-linkedin"></i></a>
              <a href={email} target="_blank"> <i className="fa-solid ml-3 fa-envelope"></i></a>
              <a href={github} target="_blank"> <i className="fa-brands ml-3 fa-github"></i></a>
   
   
   </div>
    
    
  </div>
</div>

        </div>
    );
};

export default MeetOurTem;