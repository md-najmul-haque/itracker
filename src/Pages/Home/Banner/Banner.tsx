import React, { useState } from "react";
import { Link } from "react-router-dom";

const Banner = () => {

    const [menu, setMenu] = useState<boolean>(false);

    return (
        <section className="relative bg-white z-2">
            <div className="w-full h-screen relative pb-10 px-6 xl:px-0">
                <div className="pt-32 lg:flex lg:flex-row-reverse items-center justify-center relative z-10 container mx-auto">
                    <div className="w-full lg:w-1/2 h-full lg:pr-10 xl:pr-0">
                        <img aria-label="people smiling" className="mx-auto" src="https://img.freepik.com/free-vector/business-team-discussing-ideas-startup_74855-4380.jpg?w=1380&t=st=1659181029~exp=1659181629~hmac=84b5dacb1d295dfaba82d35c37c66f1d7d7bdd771db3ffa58c31dc86fa3296f9" alt="people smiling" />
                    </div>
                    <div role="contentinfo" className="w-full lg:w-1/2 h-full">
                        <p className="uppercase text-4xl lg:text-6xl mb-4">The easiest way to track your issue</p>
                        <p className="mb-8 text-3xl">You’ve arrived at the central place for work—add team members, drop your work in Asana, start collaborating. Yep, it’s that easy.</p>
                        <div className="flex justify-center">
                            <Link to='/signup' className="btn btn-outline btn-primary">Get Started</Link>
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
