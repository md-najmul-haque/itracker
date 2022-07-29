import React from 'react';
import VideoSection from '../components/VideoSection';
import Bugsearch from '../Bugsearch/Bugsearch';
import Teamwork from '../Teamwork/Teamwork';
import ProcessManagement from '../ProcessManagement/ProcessManagement';
import Testimonial from '../Testimonial/Testimonial';
import Banner from '../Banner/Banner';
import Loading from '../../Shared/Loading/Loading';

const Home = () => {
    
    return (
        <div>
            <Loading/>       
            <Banner />
            <Bugsearch/>
            <Teamwork />
            <VideoSection />
            <ProcessManagement />
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;