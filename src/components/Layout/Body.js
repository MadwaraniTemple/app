import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import classes from './Body.module.css';
import LandingPage from '../Pages/LandingPage';
import About from '../Pages/About';
import Schedules from '../Pages/Schedules';
import Atractions from '../Pages/Attractions';
import HowToReach from '../Pages/HowToReach';
import ContactUs from '../Pages/ContactUs';
import Footer from './Footer';


const Body = (props) => {
    return <div className={classes.body}>
        <BrowserRouter>
            <Routes>
                <Route path="*" element={<MainPage />} />
                {/* <Route path="/JyotiKalash" element={<About />} /> */}
            </Routes>
        </BrowserRouter>
        <Footer />
    </div>
};

const MainPage = () => {
    return <>
        <LandingPage />
        <About />
        <Schedules />
        <Atractions />
        <HowToReach />
        <ContactUs />
    </>
}

export default Body;