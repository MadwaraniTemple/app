import React from 'react';
import classes from './Schedules.module.css';
import { useTranslation } from "react-i18next";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { FaRoad, FaTrain, FaPlane } from 'react-icons/fa';

const HowToReach = (props) => {

    const { t } = useTranslation();

    return <div className={classes.body} id="HowToReach">
        <Container>
        <Row>
            <Col>
                <h1> { t("howToReach.header") } </h1>
                <p> { t("howToReach.para") } </p>
            </Col>
        </Row>
        <Row>
            <Col md={4}>
                <FaRoad className={classes.icon}/>
                <h3> { t("howToReach.byRoad.title") } </h3>
                <p> { t("howToReach.byRoad.desc") } </p>    
            </Col>
            <Col md={4}>
                <FaTrain className={classes.icon}/>
                <h3> { t("howToReach.byTrain.title") } </h3>
                <p> { t("howToReach.byTrain.desc") } </p>
            </Col>
            <Col md={4}>
                <FaPlane className={classes.icon}/>
                <h3> { t("howToReach.byAir.title") } </h3>
                <p> { t("howToReach.byAir.desc") } </p>
            </Col>
        </Row>
        
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7388.357001074295!2d82.6810447!3d22.1953217!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a279118c6e87417%3A0x76ef40c0c5ba463a!2sMaa%20Madwarani%20Mandir!5e0!3m2!1sen!2sin!4v1632287551223!5m2!1sen!2sin" 
            width="100%" 
            height="300"  
            loading="lazy" 
            title="Maa Madwarani Mandir Map">
        </iframe>
        </Container>
        
    </div>
        
};

export default HowToReach;