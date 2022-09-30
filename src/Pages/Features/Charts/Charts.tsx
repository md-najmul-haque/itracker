import chart from '../../../Assets/features/chart1.jpg';

const Charts = () => {
  return (
    <section className="max-w-full bg-white px-10 py-20 dark:bg-black dark:text-white">
      <div className="flex flex-col lg:flex-row justify-center items-center container mx-auto my-10">
        <div className="flex-1 py-3">
          <img src={chart} alt="" />
        </div>
        <div className="flex-1 lg:px-5">
          <h1 className="text-4xl font-bold">CHARTS AND GRAPHS</h1>
          <p className="py-6 font-bold">
            Visualize data to troubleshoot problems instantly. Zoom in on
            details. Then, click on any data point to drive to the underlying
            projects and tasks, and take action as needed.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Charts
