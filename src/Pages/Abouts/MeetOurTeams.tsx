import React, { useEffect, useState } from 'react';
import './MeetOurTeams.css'
import MeetOurTem from './MeetOurTem';

const MeetOurTeam = () => {
    const [teams, setTeams] = useState([])
    useEffect(() => {
        fetch("ourteam.json")
            .then(res => res.json())
        .then(data=>setTeams(data))
    },[])
    return (
        <div>
            <h1 className='text-center text-4xl text-primary font-bold'>Meet Our Team</h1>
            <div className='teamCard mt-5'>
            
         
            {
                teams.map(team => <MeetOurTem
                    key={team}
                    team={team}
                />)
            }
       </div>
        </div>
    );
};

export default MeetOurTeam;