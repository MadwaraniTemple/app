import React from 'react';
import classes from './About.module.css';
import { useTranslation } from "react-i18next";

import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import img1 from '../../assets/maamadwarani_landscape.JPG';

const Attractions = (props) => {

    const { t } = useTranslation();

    return <div className={classes.body} id="Attractions">
        <h1> { t("attractions.header") } </h1>
        <p> { t("attractions.para") } </p>

        <Row xs={1} md={3} className="g-4">
            <Col>
                <Card>
                    <Card.Img variant="top" src={img1} />
                    <Card.Body>
                        <Card.Title> <h3>{ t("attractions.mainTemple.title") }</h3> </Card.Title>
                        {/* <Card.Title><h5> { t("attractions.mainTemple.place") } </h5></Card.Title> */}
                        <Card.Text> { t("attractions.mainTemple.para") } </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            <Col>
                <Card>
                    <Card.Img variant="top" src={img1} />
                    <Card.Body>
                        <Card.Title> <h3>{ t("attractions.otherTemples.title") }</h3> </Card.Title>
                        <Card.Text> { t("attractions.otherTemples.para") } </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            <Col>
                <Card>
                    <Card.Img variant="top" src={img1} />
                    <Card.Body>
                        <Card.Title> <h3>{ t("attractions.hanumanTemple.title") }</h3> </Card.Title>
                        <Card.Text> { t("attractions.hanumanTemple.para") } </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            <Col>
                <Card>
                    <Card.Img variant="top" src={img1} />
                    <Card.Body>
                        <Card.Title> <h3>{ t("attractions.madwaraniTempleDownhill.title") }</h3> </Card.Title>
                        <Card.Text> { t("attractions.madwaraniTempleDownhill.para") } </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            <Col>
                <Card>
                    <Card.Img variant="top" src={img1} />
                    <Card.Body>
                        <Card.Title> <h3>{ t("attractions.picnicSpots.title") }</h3> </Card.Title>
                        <Card.Text> { t("attractions.picnicSpots.para") } </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    
        {/* <h3>{ t("attractions.otherTemples.title") }</h3>
        <h5> { t("attractions.otherTemples.place") } </h5>
        <p> { t("attractions.otherTemples.para") } </p>

        <h3>{ t("attractions.hanumanTemple.title") }</h3>
        <h5> { t("attractions.hanumanTemple.place") } </h5>
        <p> { t("attractions.hanumanTemple.para") } </p>

        <h3>{ t("attractions.madwaraniTempleDownhill.title") }</h3>
        <h5> { t("attractions.madwaraniTempleDownhill.place") } </h5>
        <p> { t("attractions.madwaraniTempleDownhill.para") } </p>

        <h3>{ t("attractions.picnicSpots.title") }</h3>
        <h5> { t("attractions.picnicSpots.place") } </h5>
        <p> { t("attractions.picnicSpots.para") } </p> */}

    </div>
        
};

export default Attractions;