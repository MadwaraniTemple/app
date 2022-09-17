import React from 'react';
import classes from './Body.module.css';
import LandingPage from '../Pages/LandingPage';
import About from '../Pages/About';
import Schedules from '../Pages/Schedules';
import Atractions from '../Pages/Attractions';
import HowToReach from '../Pages/HowToReach';


const Body = (props) => {
    return <div className={classes.body}>
        <LandingPage />
        <About />
        <Schedules />
        <Atractions />
        <HowToReach />
    </div>
};

export default Body;