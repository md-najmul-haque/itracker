import React from 'react';
const OurTeam = ({ team }: any) => {

    const { name, position, img, facebook, github, linkedin, email } = team;
    return (
        <div className='text-center'>
<div className="card w-96 bg-white shadow-xl">
    
  <div className="card-body">
  <div className="avatar">
  <div className="w-24 ml-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
    <img src={img} alt='' />
  </div>
</div>
    <h2 className="card-title ml-24"> {name} </h2>
    <p> {position} </p>
            <div className='icon'>
            <a href={facebook} rel='noreferrer'><i className="fa-brands  fa-facebook"></i></a>
              <a href={linkedin} rel='noreferrer'> <i className="fa-brands ml-3  fa-linkedin"></i></a>
              <a href={email} rel='noreferrer'> <i className="fa-solid ml-3 fa-envelope"></i></a>
              <a href={github} rel='noreferrer'> <i className="fa-brands ml-3 fa-github"></i></a>
      </div>
    </div>
  </div>
 </div>
    );
};

export default OurTeam;