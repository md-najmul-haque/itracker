import React from 'react';
import Charts from '../Charts/Charts';
import Fixissue from '../Fixissue/Fixissue';
import Iprocesses from '../Iprocesses/Iprocesses';
import Views from '../Views/Views';

const Features = () => {
    return (
        <>
            <Iprocesses/>
            <Charts/>
            <Fixissue/>
            <Views/>
        </>
    );
};

export default Features;