import classes from './Body.module.css';
import About from '../Pages/About';
import Schedules from '../Pages/Schedules';
import Atractions from '../Pages/Attractions';
import HowToReach from '../Pages/HowToReach';


const Body = (props) => {
    return <div className={classes.body}>
        <About />
        <Schedules />
        <Atractions />
        <HowToReach />
    </div>
};

export default Body;