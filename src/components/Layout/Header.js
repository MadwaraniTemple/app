import { Fragment, useState } from 'react';
import jaiMaaMadwaraniTextLogo from '../../assets/maa_madwarani.png';
import classes from './Header.module.css';
import i18n from '../../translations/i18n';
import { FaBars } from "react-icons/fa";

const Header = (props) => {

    const [, setLanguage] = useState('en');

    const handleOnclick = ( e ) => {
        e.preventDefault();
        setLanguage(e.target.value);
        i18n.changeLanguage(e.target.value);
    }

    return <Fragment>
        <header className={classes.header}>
            <span className={classes.faBars}>
                <FaBars onClick={() => props.showSidebar()}/>
            </span>
            <span className={classes.logoImg}>
                <img src={jaiMaaMadwaraniTextLogo} alt='Jai Maa madwarani' />
            </span>
            <span className={classes.anguageButton}>
                 <button value='en' onClick={handleOnclick}> English </button>
                 {/* <button value='hi' onClick={handleOnclick}> Hindi </button> */}
            </span>
        </header>
    </Fragment>
};

export default Header;