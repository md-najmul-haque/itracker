import React from 'react';
import IndexSlider from '../components/Slider/IndexSlider';
import VideoSection from '../components/VideoSection';


import Bugsearch from '../Bugsearch/Bugsearch';
import Teamwork from '../Teamwork/Teamwork';
import ProcessManagement from '../ProcessManagement/ProcessManagement';

const Home = () => {
    return (
        <div>
            <IndexSlider/>
         <VideoSection/>
            <Bugsearch/>
            <Teamwork/>
            <ProcessManagement/>
        </div>
    );
};

export default Home;