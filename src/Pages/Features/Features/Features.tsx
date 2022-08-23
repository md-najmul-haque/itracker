import React from 'react';
import Indecator from '../../Home/Home/Indecator';
import Charts from '../Charts/Charts';
import Communication from '../Communication/Communication';
import Fixissue from '../Fixissue/Fixissue';
import Iprocesses from '../Iprocesses/Iprocesses';
import Viewrepoting from '../Viewrepoting/Viewrepoting';

const Features = () => {
    return (
        <>
            <Indecator/>
            <Iprocesses/>
            <Charts/>
            <Communication/>
            <Fixissue/>
            <Viewrepoting/>
        </>
    );
};

export default Features;