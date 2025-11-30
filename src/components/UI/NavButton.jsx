import React from 'react';
import classes from './NavButton.module.css';
import { useNavigate } from '@tanstack/react-router';

const NavButton = (props) => {
    const navigate = useNavigate();

    const handleClick = () => {
        const link = props.navLink || '';
        if (link.startsWith('#')) {
            const id = link.slice(1);
            const el = document.getElementById(id);
            if (el) {
                el.scrollIntoView({ behavior: 'smooth' });
            } else {
                // If anchor target not found, fallback to home
                navigate({ to: '/' });
            }
            props.showSidebar();
        } else {
            // Ensure route path starts with '/'
            const path = link.startsWith('/') ? link : `/${link}`;
            navigate({ to: path });
            props.showSidebar();
        }
    };

    return <div className={classes.navButton}>
        <p onClick={handleClick}>
            {props.title}
        </p>
    </div>
};

export default NavButton;