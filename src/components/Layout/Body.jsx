import React, { useState } from 'react';
import classes from './Body.module.css';
import LandingPage from '../Pages/LandingPage';
import About from '../Pages/About';
import Schedules from '../Pages/Schedules';
import Atractions from '../Pages/Attractions';
import HowToReach from '../Pages/HowToReach';
import ContactUs from '../Pages/ContactUs';
import JyotiKalash from '../Pages/JyotiKalash';
import Footer from './Footer';
import Header from './Header';
import SideNavBar from './SideNavBar';
import i18n from '../../translations/i18n';
import {
  RootRoute,
  Route,
  Router,
  Outlet,
} from '@tanstack/react-router';

export const HomePage = () => {
    return <>
        <LandingPage />
        <About />
        <Schedules />
        <Atractions />
        <HowToReach />
        <ContactUs />
    </>
}

// Root layout component: renders Header, SideNavBar, route content (Outlet) and Footer
const RootLayout = () => {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);
  const [language, setLanguage] = useState();

  const handleOnclick = (e) => {
    e.preventDefault();
    setLanguage(e.target.value);
    i18n.changeLanguage(e.target.value);
  }

  return (
    <>
      <Header showSidebar={showSidebar} />
      <SideNavBar sidebar={sidebar} showSidebar={showSidebar} handleOnclick={handleOnclick} language={language} />
      <div className={classes.body}>
        <Outlet /> {/* route content (HomePage / JyotiKalash / ...) will render here */}
        <Footer />
      </div>
    </>
  );
}

const rootRoute = new RootRoute({
  // root route renders the RootLayout which includes header, sidenav and outlet
  component: RootLayout,
});

const indexRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/',
  component: HomePage,
});

const jyotiRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/JyotiKalash',
  component: JyotiKalash,
});

const notFoundRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '*',
  component: HomePage,
});

rootRoute.addChildren([indexRoute, jyotiRoute, notFoundRoute]);

// Export the router so the provider can be mounted at a higher level (e.g. App.jsx)
export const router = new Router({
  routeTree: rootRoute,
  defaultPreload: 'intent',
});

// Default export: the root layout component (no RouterProvider here)
const Body = (props) => {
    return <RootLayout {...props} />;
};

export default Body;