import React from 'react';
import classes from './Footer.module.css';
import LalaStudio from '../../assets/LalaStudio.jpg';

const Footer = (props) => {

    return <>
        <footer className={classes.footer}>
            <img src={LalaStudio} alt='Lala Studio' className={classes.img}/>
        </footer>
    </>
};

export default Footer;