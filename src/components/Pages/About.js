import React from 'react';
import classes from './About.module.css';
import { useTranslation } from "react-i18next";
//import MaaMadwaraniImg from '../../assets/maamadwarani_landscape.JPG';

const About = (props) => {

    const { t } = useTranslation();

    return <div className={classes.body} id="About">
        {/* <div class={classes.maaMadwaraniImg}><img src={MaaMadwaraniImg} alt='Jai Maa madwarani' /></div> */}
        <h1> { t("introduction.aboutMaaMadwarani.header") } </h1>
        <p> { t("introduction.aboutMaaMadwarani.para") } </p>

        <h1> { t("introduction.aboutTheTemple.header") } </h1>
        <p> { t("introduction.aboutTheTemple.para") } </p>
        <ul>
            <li> { t("introduction.aboutTheTemple.listItem1") } </li>
            <li> { t("introduction.aboutTheTemple.listItem2") } </li>
            <li> { t("introduction.aboutTheTemple.listItem3") } </li>
            <li> { t("introduction.aboutTheTemple.listItem4") } </li>
        </ul>

        <h1> { t("introduction.storyOfMaaMadwarani.header") } </h1>
        <p> { t("introduction.storyOfMaaMadwarani.para") } </p>
    </div>
        
};

export default About;