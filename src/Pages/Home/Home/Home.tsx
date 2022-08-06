import React from 'react';
import Bugsearch from '../Bugsearch/Bugsearch';
import Teamwork from '../Teamwork/Teamwork';
import Testimonial from '../Testimonial/Testimonial';
import Banner from '../Banner/Banner';
import ProcessMangements from '../ProcessMangements/ProcessMangements';
import TrustedCompany from '../TrustedCompany/TrustedCompany';



const Home = () => {

    return (
        <div>
            <Banner />
            <Teamwork />
            <Bugsearch />
            <Testimonial />
            <TrustedCompany />
            <ProcessMangements />
        </div>
    );
};

export default Home;