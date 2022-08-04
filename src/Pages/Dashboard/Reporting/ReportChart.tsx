import React, { useState } from 'react';
import ReactApexChart from "react-apexcharts";
import { ApexOptions } from "apexcharts";
import { width } from '@mui/system';
const ReportChart = () => {
    const [state, setState] = useState<any>({

        options: {
            colors: ['#E91E63', '#FF9800'],
            chart: {
                id: "basic-bar",
            },
        plotOptions: {
            bar: {
                columnWidth: '10%',
                borderRadius: 10,
            }
            
        },

            xaxis: {
                categories: ['project1'],
            }
        },
        series: [
            {
                name: "series-1",
                data: [30],
            }
        ]
    })
    const [data, setData] = useState<any>({

        series: [44, 55, 13],
        options: {
            labels: ['Team A', 'Team B', 'Team C'], 
        }
    })


    return (
        <div className='grid lg:grid-cols-2 md:grid-cols-1 gap-12 mt-12'>
            <div>
                <h1 className='ml-5'>Incomplete task by project</h1>
                <ReactApexChart
                    options={state.options}
                    series={state.series}
                    type="bar"
                    height={320}
                />
            </div>
            <div className=''>
                <h1 className='ml-5'>Tasks by completetion statuse this month</h1>
                <ReactApexChart 
                options={data.options}
                series={data.series} 
                type="pie"
                 width={450} />
            </div>

        </div>

    );
};

export default ReportChart;