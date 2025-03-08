import React from 'react';
import classes from './SideNavBar.module.css';
import NavButton from '../UI/NavButton';
import { useTranslation } from "react-i18next";
//import { AiOutlineClose } from "react-icons/ai";


const SideNavBar = (props) => {

    const { t } = useTranslation();
    
    return (
        <div>
            <div className={props.sidebar ? classes.backDrop : classes.displayNone} onClick={() => props.showSidebar()}></div>
            <div className={props.sidebar ? classes.sideNavBarActive : classes.displayNone}>
                {/* <AiOutlineClose onClick={() => props.showSidebar()}/> */}
                {
                    props.language === 'en' ? 
                    <button value='hi' onClick={props.handleOnclick} className={classes.languageButton}> हिंदी में देखें </button> : 
                    <button value='en' onClick={props.handleOnclick} className={classes.languageButton}> Change to English </button>
                }
                <NavButton title={ t("navLinks.navLink_1") } showSidebar={props.showSidebar} navLink="#About" />
                <NavButton title={ t("navLinks.navLink_2") } showSidebar={props.showSidebar} navLink="#Schedules"/>
                <NavButton title={ t("navLinks.navLink_3") } showSidebar={props.showSidebar} navLink="#Attractions"/>
                <NavButton title={ t("navLinks.navLink_4") } showSidebar={props.showSidebar} navLink="#HowToReach"/>
                {/* <NavButton title={ t("navLinks.navLink_5") } showSidebar={props.showSidebar} navLink="JyotiKalash"/>
                <NavButton title={ t("navLinks.navLink_6") } showSidebar={props.showSidebar} navLink="Association"/>
                <NavButton title={ t("navLinks.navLink_7") } showSidebar={props.showSidebar} navLink="Gallery"/> */}
                <NavButton title={ t("navLinks.navLink_8") } showSidebar={props.showSidebar} navLink="#ContactUs"/>
            </div>
        </div>
    )
    
};

export default SideNavBar;