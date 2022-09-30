import { useState } from 'react';
import ReactApexChart from "react-apexcharts";

const ReportChart = () => {

    const [data, setData] = useState<any>({

        series: [44, 55, 13],
        options: {
            labels: ['Pending Task', 'Inprogress Task', 'Complete Task'],
        }
    })


    return (
        <div className='mt-10'>

            <h1 className='ml-5 text-xl font-semibold text-center text-secondary'>Total Task Status</h1>

            <div className='flex justify-center items-center w-75 mx-auto'>
                <ReactApexChart className="lg:w-full"
                    options={data.options}
                    series={data.series}
                    type="pie"
                    width="40%"
                />
            </div>


        </div>



    );
};

export default ReportChart;