import React from 'react';
import './MeetOurTeam.css'
const MeetOurTem = ({ team }) => {
    const { name, Position, img } = team;
    return (
        <div className='text-center'>
<div className="card w-96 bg-white shadow-xl">
    
                <div className="card-body">
                <div class="avatar avatarimg">
  <div class="w-24 memberImg rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
    <img src="https://placeimg.com/192/192/people" />
  </div>
</div>
    <h2 className="card-title name"> {name} </h2>
    <p> {Position} </p>
    <div className='icon'>
    <i className="fa-brands fa-facebook"></i>
    <i className="fa-brands ml-3 fa-github"></i>
    <i className="fa-solid ml-3 fa-envelope"></i>
    <i class="fa-brands ml-3 fa-linkedin"></i>
   </div>
    
    
  </div>
</div>

        </div>
    );
};

export default MeetOurTem;