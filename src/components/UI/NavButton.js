import classes from './NavButton.module.css';

const NavButton = (props) => {
    return <div className={classes.navButton}>
        <p onClick={() => window.location.replace("/#"+props.navLink)}>{props.title}</p>
    </div>
};

export default NavButton;