import React from 'react';
import task from '../../../Assets/features/task.jpg';

const Iprocesses = () => {

    return (
        <section className="max-w-full bg-white px-10 py-20 dark:bg-black dark:text-white">
      <div className="flex justify-center items-center my-10 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
     <div>
     <h1 className="text-5xl font-bold">Improve processes</h1>
      <p className="py-6 font-bold">Monitor progress in each stage of work with Workflow <br /> Reporting to diagnose what’s working, what needs revising, <br /> and how your team can upgrade efficiency.</p>
     </div>
        <div className="flex justify-center content-center">
          <img src={task} alt="" />
        </div>
      </div>
    </section>

    );
};

export default Iprocesses;