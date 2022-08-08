import React from 'react';
import { Link } from 'react-router-dom';

const Projects = () => {
    return (
        <div className='mt-20 mx-10'>
            <div>
                <div>
                    <div className='flex justify-end'>
                        <Link to='/dashboard/addProject'>
                            <div className='w-24 h-20 border-2 border-gray-400 rounded cursor-pointer hover:mt-2'>
                                <h1 className='mt-4 ml-8 text-3xl'>+</h1>
                            </div>
                        </Link>
                    </div>
                    <p className='flex justify-end mr-1'>New Project</p>
                </div>
            </div>
        </div>
    );
};

export default Projects;