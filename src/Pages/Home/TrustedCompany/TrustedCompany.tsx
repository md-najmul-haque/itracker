import React from 'react';
import logo1 from "../../../Assets/features/LEGO_logo.svg";
import logo2 from "../../../Assets/features/Gamble_logo_1.svg";
import logo3 from "../../../Assets/features/United_States_Department.png";
import logo4 from "../../../Assets/features/american-express-logo_1.svg";
import logo5 from "../../../Assets/features/FedRAMP-logo.png";
import logo6 from "../../../Assets/features/g2-leader-winter-2022.svg";

const TrustedCompany = () => {

    return (
        <div className='py-28 max-w-7xl mx-auto px-12 text-center dark:bg-black'>
            <h2 className='text-primary dark:text-white text-center text-4xl font-bold uppercase py-10'>TRUSTED BY</h2>
            <h2 className='text-center text-2xl font-bold uppercase mt-10 mb-12'>OVER 90% OF FORTUNE 100 COMPANIES</h2>
            <div className="stats stats-vertical lg:stats-horizontal shadow dark:bg-black">
                <div className="stat mr-32 justify-items-center">
                    <img src={logo1} className="w-32" alt="" />
                </div> 
                <div className="stat mr-32 justify-items-center">   
                    <img src={logo2} className="w-32"  alt="" />
                </div>
                <div className="stat mr-32 justify-items-center">
                    <img src={logo3} className="w-32" alt="" />
                </div>
                <div className="stat mr-32 justify-items-center">
                    <img src={logo4} className="w-32" alt="" />
                </div>
                <div className="stat mr-32 justify-items-center">
                    <img src={logo5} className="w-32" alt="" />
                </div>
                <div className="stat mr-32 justify-items-center">
                    <img src={logo6} className="w-32" alt="" />
                </div>
            </div>
        </div>
    );
};

export default TrustedCompany;