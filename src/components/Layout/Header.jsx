import React, { Fragment } from 'react';
import jaiMaaMadwaraniTextLogo from '../../assets/JaiMaaMadwaraniLogo.jpg';
import classes from './Header.module.css';
import { FaBars } from "react-icons/fa";

const Header = (props) => {

    return <Fragment>
        <header className={classes.header}>
            <span className={classes.logoImg}>
                <img src={jaiMaaMadwaraniTextLogo} alt='Jai Maa madwarani' className={classes.img}/>
            </span>
            <span className={classes.faBars}>
                <FaBars size={30} onClick={() => props.showSidebar()}/>
            </span>
            {/* <span className={classes.languageButton}>
                {language === 'en' ? <button value='hi' onClick={handleOnclick}> हिंदी </button> : <button value='en' onClick={handleOnclick}> English </button>}
            </span> */}
        </header>
    </Fragment>
};

export default Header;