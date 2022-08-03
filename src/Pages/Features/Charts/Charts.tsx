import React from 'react'
import chart from '../../../Assets/features/chart.jpg';

const Charts = () => {
  return (
    <section className="max-w-full bg-white px-10 py-20">
      <div className="flex justify-center items-center my-10 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
        <div className="flex justify-center items-center py-3">
          <img src={chart} alt="" />
        </div>
        <div className="lg:px-5">
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
