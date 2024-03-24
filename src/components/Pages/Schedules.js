import React from 'react';
import classes from './Schedules.module.css';
import { useTranslation } from "react-i18next";

const Schedules = (props) => {

    const { t } = useTranslation();

    return <div className={classes.body} id="Schedules">
        
        <h1> { t("schedules.header") } </h1>
        <h4>
            { t("schedules.artiTiming.title1") }<br></br>
            { t("schedules.artiTiming.title2") }<br></br>
            { t("schedules.artiTiming.morning") }<br></br>
            { t("schedules.artiTiming.evening") }
        </h4>
        
        <h1>{ t("schedules.eventDetails.header") }</h1>
        <h3>{ t("schedules.eventDetails.note") }</h3>

        <table className="table table-hover">
            <thead>
            <tr>
                <th>{ t("schedules.eventDetails.tableHeaders.header1") }</th>
                <th>{ t("schedules.eventDetails.tableHeaders.header2") }</th>
                <th>{ t("schedules.eventDetails.tableHeaders.header3") }</th>
            </tr>
            </thead>
            
            <tbody>
            <tr>
                <td>{ t("schedules.eventDetails.hinduCalDate.event1") }</td>
                <td>{ t("schedules.eventDetails.dailyevents.event1") } </td>
                <td>{ t("schedules.eventDetails.dates.event1") }</td>
            </tr>
            <tr>
                <td>{ t("schedules.eventDetails.hinduCalDate.event2") }</td>
                <td>{ t("schedules.eventDetails.dailyevents.event2") } </td>
                <td>{ t("schedules.eventDetails.dates.event2") }</td>
            </tr>
            <tr>
                <td>{ t("schedules.eventDetails.hinduCalDate.event3") }</td>
                <td>{ t("schedules.eventDetails.dailyevents.event3") } </td>
                <td>{ t("schedules.eventDetails.dates.event3") }</td>
            </tr>
            <tr>
                <td>{ t("schedules.eventDetails.hinduCalDate.event4") }</td>
                <td>{ t("schedules.eventDetails.dailyevents.event4") } </td>
                <td>{ t("schedules.eventDetails.dates.event4") }</td>
            </tr>
            <tr>
                <td>{ t("schedules.eventDetails.hinduCalDate.event5") }</td>
                <td>{ t("schedules.eventDetails.dailyevents.event5") } </td>
                <td>{ t("schedules.eventDetails.dates.event5") }</td>
            </tr>
            
            </tbody>
        </table>
        
    </div>
        
};

export default Schedules;