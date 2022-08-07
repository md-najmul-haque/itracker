import React, { useState } from "react";
import { Link } from "react-router-dom";

const Banner = () => {

    return (
        <section className="relative sm:p-5 bg-white z-2">
            <div className="w-full lg:h-screen flex justify-center items-center relative xl:px-0">
                <div className="lg:flex lg:flex-row-reverse items-center justify-center relative z-10 container mx-auto">
                    <div className="w-full lg:w-1/2 h-full lg:pr-10 xl:pr-0">
                        <img aria-label="people smiling" className="mx-auto" src="https://img.freepik.com/free-vector/business-team-discussing-ideas-startup_74855-4380.jpg?w=1380&t=st=1659181029~exp=1659181629~hmac=84b5dacb1d295dfaba82d35c37c66f1d7d7bdd771db3ffa58c31dc86fa3296f9" alt="people smiling" />
                    </div>
                    <div role="contentinfo" className="w-full lg:w-1/2 h-full">
                        <p className="uppercase text-3xl px-5 lg:px-0 font-bold text-center lg:text-left lg:text-4xl mb-8">The easiest way to track your issue</p>

                        <p className="mb-10 text-xl lg:text-2xl p-5 lg:p-0">We help to track your issue, add your project and team member in iTracker then create an issue with deadline, then assign your team member do solve this issue. Finally you can track it.You can also set priority like, low, medium and high. Yep, it’s very easy to use.</p>

                        <div className="flex justify-center pb-10">
                            <Link to='/signup' className="btn text-white btn-primary">Get Started</Link>
                            <Link to='/signin' className="btn ml-5 text-white px-8 btn-primary">Sing In</Link>
                        </div>
                    </div>

                </div>
                <div className="h-screen bg-slate-100 w-6/12 absolute top-0 right-0 z-[-1]">

                </div>
            </div>
        </section>

    );
};

export default Banner;
