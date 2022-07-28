import React, { useState } from "react";



const Banner = () => {

    const [menu, setMenu] = useState<boolean>(false);

    return (

        <section>
            <div className="w-full h-screen relative pb-10 px-6 xl:px-0">
                <img className="absolute w-full inset-0 h-full" src="https://i.ibb.co/GckN6y6/hero2-bg.png" alt="we care family" />
                <div className="pt-32 lg:flex lg:flex-row-reverse items-center relative z-10 container mx-auto">
                    <div className="w-full lg:w-1/2 h-full lg:pr-10 xl:pr-0">
                        <img aria-label="people smiling" className="mx-auto" src="https://cdn.tuk.dev/assets/templates/weCare/hero2-left.png" alt="people smiling" />
                    </div>
                    <div role="contentinfo" className="w-full lg:w-1/2 h-full">
                        <p className="uppercase text-4xl lg:text-6xl mb-4">The easiest way to track your issue</p>
                        <p className="mb-8 text-3xl">You’ve arrived at the central place for work—add team members, drop your work in Asana, start collaborating. Yep, it’s that easy.</p>
                        <div className="flex justify-center">
                            <button className="btn btn-outline btn-primary">Get Started</button>
                        </div>
                    </div>

                </div>
            </div>
        </section>

    );
};

export default Banner;
