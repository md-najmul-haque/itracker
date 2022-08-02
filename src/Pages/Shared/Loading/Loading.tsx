import React from 'react';
import { Bars } from  'react-loader-spinner'

const Loading = () => {

    return (
        <div className="flex items-center justify-center h-screen">
          <Bars
            height="100"
            width="100"
            color="#00ADB5"
            ariaLabel="bars-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
           />
        </div>
    );
};

export default Loading;