import React from 'react';
import Charts from '../Charts/Charts';
import Communication from '../Communication/Communication';
import Fixissue from '../Fixissue/Fixissue';
import Iprocesses from '../Iprocesses/Iprocesses';
import Viewrepoting from '../Viewrepoting/Viewrepoting';

const Features = () => {
    return (
        <>
            <Iprocesses/>
            <Charts/>
            <Communication/>
            <Fixissue/>
            <Viewrepoting/>
        </>
    );
};

export default Features;