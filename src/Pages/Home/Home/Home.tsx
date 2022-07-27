import React from 'react';
import Notfound from '../../Shared/Notfound/Notfound';
import Bugsearch from '../Bugsearch/Bugsearch';
import Teamwork from '../Teamwork/Teamwork';

const Home = () => {
    return (
        <div>
            <Notfound/>
            <Bugsearch/>
            <Teamwork/>         
        </div>
    );
};

export default Home;