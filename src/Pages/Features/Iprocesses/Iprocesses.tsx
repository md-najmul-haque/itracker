import task from '../../../Assets/features/task.jpg';

const Iprocesses = () => {

  return (
    <section className="max-w-full  bg-white px-10 py-20 dark:bg-black dark:text-white">
      <div className="flex flex-col lg:flex-row justify-center items-center container mx-auto my-10">
        <div className='flex-1'>
          <h1 className="text-5xl font-bold">Adding Tasks</h1>
          <p className="py-6 font-bold">Monitor progress in each stage of work with Workflow <br /> Reporting to diagnose what’s working, what needs revising, <br /> and how your team can upgrade efficiency.</p>
        </div>
        <div className="flex-1">
          <img src={task} alt="" />
        </div>
      </div>
    </section>

  );
};

export default Iprocesses;