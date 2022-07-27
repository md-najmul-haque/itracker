import React, { useState } from "react";



const Banner = () => {

    const [menu, setMenu] = useState<boolean>(false);

    return (

        <section>
            <div className="w-full relative pb-10 px-6 xl:px-0">
                <img className="absolute w-full inset-0 h-full" src="https://i.ibb.co/GckN6y6/hero2-bg.png" alt="we care family" />
                <nav className="lg:hidden relative z-40">
                    <div className="flex py-6 justify-between items-center px-4">
                        <div>
                            <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/right_aligned_with_searchbar_Svg3.svg" alt="logo" />
                        </div>
                        <div className="flex items-center">
                            <ul id="list" className={`${menu ? '' : 'hidden'} p-2 border-r bg-white absolute rounded top-0 left-0 right-0 shadow mt-16 md:mt-16`}>
                                <li className="flex cursor-pointer text-gray-600 text-sm leading-3 tracking-normal mt-2 py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none">
                                    <a href="/">
                                        <span className="ml-2 font-bold">Products</span>
                                    </a>
                                </li>
                                <li className="flex flex-col cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none justify-center">
                                    <a href="/">
                                        <span className="ml-2 font-bold">Claims</span>
                                    </a>
                                </li>
                                <li className="flex cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-2 hover:text-indigo-700 items-center focus:text-indigo-700 focus:outline-none">
                                    <a href="/">
                                        <span className="ml-2 font-bold">Renewals</span>
                                    </a>
                                </li>
                                <li className="flex flex-col cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none justify-center">
                                    <a href="/">
                                        <span className="ml-2 font-bold">Reports</span>
                                    </a>
                                </li>
                            </ul>
                            <div className="xl:hidden">
                                <img id="open" className={` ${menu ? 'hidden' : ''} close-m-menu`} onClick={() => setMenu(!menu)} src="https://tuk-cdn.s3.amazonaws.com/can-uploader/right_aligned_with_searchbar_Svg1.svg" alt="menu" />
                                <div id="close" className={` ${menu ? '' : 'hidden'} close-m-menu`} onClick={() => setMenu(!menu)}>
                                    <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/right_aligned_with_searchbar_Svg2.svg" alt="cross" />
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
                <nav role="navigation" aria-label="Main" className="hidden relative z-10 w-full lg:flex justify-between items-center p-20">
                    <div className="w-1/6">
                        <a aria-label="we care company logo" href="/">
                            <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/right_aligned_with_searchbar_Svg3.svg" alt="logo" />
                        </a>
                    </div>
                    <div className="w-5/6">
                        <div className="flex items-center justify-end">
                            <ul className="text-gray-800 lg:space-x-8 flex items-center leading-none">
                                <li>
                                    <a className="hover:text-indigo-500 text-lg focus:text-indigo-500" href="/">Products</a>
                                </li>
                                <li className="ml-4 hover:text-indigo-500 ">
                                    <a className="focus:text-indigo-500 text-lg" href="/">Claims</a>
                                </li>
                                <li className="ml-4 hover:text-indigo-500 focus:text-indigo-500">
                                    <a className="focus:text-indigo-500 text-lg" href="/">Renewal</a>
                                </li>
                                <li className="ml-4 hover:text-indigo-500 focus:text-indigo-500">
                                    <a className="focus:text-indigo-500 text-lg" href="/">Support</a>
                                </li>
                            </ul>
                            <div className="pl-40">
                                <button aria-label="live chat" className="focus:bg-indigo-600 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 bg-indigo-700 hover:bg-indigo-600 text-white px-6 py-2 font-semibold rounded focus:outline-none">Live Chat</button>
                            </div>
                        </div>
                    </div>
                </nav>
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
