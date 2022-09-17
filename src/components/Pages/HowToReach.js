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
        </Container>
        
    </div>
        
};

export default HowToReach;