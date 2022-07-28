import * as React from 'react';
import CountUp from 'react-countup';
import { FcPositiveDynamic } from 'react-icons/fc';
import { FcGraduationCap } from 'react-icons/fc';
import { FcWorkflow } from 'react-icons/fc';
import { FcServices } from 'react-icons/fc';

const VideoSection = () => {
  return (
    <div className='my-20'>

      {/* MUI */}






      {/* <!-- ======= video Section ======= --> */}
      <section id="services" className="video mb-52">
        <div className="container">
          <div className="video-box">
            <div className="video-box-img">
              <img src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=944&q=80" alt="" />
            </div>
            <div className="video-box-color flex items-center justify-center">
              <div>
                <a href="https://www.youtube.com/watch?v=jDDaplaOz7Q" className="glightbox play-btn mb-4"></a>
              </div>
            </div>
          </div>
        </div>
      </section>

<<<<<<< HEAD
  {/* <!-- ======= counter-up Section ======= --> */}
  <section className="counter_up">
    <div className="">
      <div className="flex flex-col md:flex-row justify-around">
        <div className=" ">
          <div className="counter-box flex justify-center flex-col">
        <div>
        <FcPositiveDynamic className='counterIcon' />
        </div>
            <p className='my-3'>App Rate</p>
         <CountUp
         end={500}
         duration={5}
         />
          </div>
        </div>
=======
      {/* <!-- ======= counter-up Section ======= --> */}
      <section className="counter_up">
>>>>>>> origin/development
        <div className="">
          <div className="flex flex-col md:flex-row justify-around">
            <div className=" ">
              <div className="counter-box flex justify-center flex-col">
                <div>
                  <FcPositiveDynamic className='counterIcon' />
                </div>
                <p className='my-3'>App Rate</p>
                <CountUp
                  end={400}
                  duration={5}
                />
              </div>
            </div>
            <div className="">
              <div className="counter-box">
                <FcGraduationCap className='counterIcon' />
                <p className='my-3'>Happy Client</p>
                <CountUp
                  end={600}
                  duration={5}
                />
              </div>
            </div>
            <div className="">
              <div className="counter-box">
                <FcWorkflow className='counterIcon' />
                <p className='my-3'>Active Accounts</p>
                <CountUp
                  end={100}
                  duration={5}
                />
              </div>
            </div>
            <div className=" ">
              <div className="counter-box">
                <FcServices className='counterIcon' />
                <p className='my-3'>Total Active Apps</p>
                <CountUp
                  end={9900}
                  duration={5}
                />
              </div>
            </div>
          </div>
        </div>
<<<<<<< HEAD
        <div className="">
          <div className="counter-box">
          <FcWorkflow className='counterIcon' />
            <p className='my-3'>Active Accounts</p>
            <CountUp
         end={100}
         duration={5}
         />
          </div>
        </div>
        <div className=" ">
          <div className="counter-box">
          <FcServices className='counterIcon' />
            <p className='my-3'>Total Active Apps</p>
            <CountUp
         end={9800}
         duration={5}
         />
          </div>
        </div>
      </div>
=======
      </section>
>>>>>>> origin/development
    </div>
  );
};

export default VideoSection;