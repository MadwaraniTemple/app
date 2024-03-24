import React from 'react';
import classes from './ContactUs.module.css';
import { useTranslation } from "react-i18next";

const ContactUs = (props) => {

    const { t } = useTranslation();

    return <div className={classes.body} id="ContactUs">
        <h1> { t("contactUs.header") } </h1>
        <p> { t("contactUs.para") } </p>

        <h2> { t("contactUs.association.title") } </h2>
        <p> { t("contactUs.association.para") } </p>
        <ul>
            <li> { t("contactUs.contact.name") } </li>
            <li> { t("contactUs.contact.position") } </li>
            <li> { t("contactUs.contact.phone") } </li>
        </ul>
    </div>
        
};

export default ContactUs;