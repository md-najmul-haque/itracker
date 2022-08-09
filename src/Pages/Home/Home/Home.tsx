import React from 'react';
import Bugsearch from '../Bugsearch/Bugsearch';
import Teamwork from '../Teamwork/Teamwork';
import Testimonial from '../Testimonial/Testimonial';
import Banner from '../Banner/Banner';
import FAQ from '../FAQ/FAQ';
import TrustedCompany from '../TrustedCompany/TrustedCompany';

const Home = () => {

    return (
        <div>
            <Banner />
            <Teamwork />
            <Bugsearch />
            <Testimonial />
             <FAQ/>
            <TrustedCompany />
        </div>
    );
};

export default Home;