import React from 'react';
import classes from './NavButton.module.css';

const NavButton = (props) => {
    return <div className={classes.navButton}>
        <p onClick={() => { window.location.replace("/#"+props.navLink); props.showSidebar(); }}>
            {props.title}
        </p>
    </div>
};

export default NavButton;