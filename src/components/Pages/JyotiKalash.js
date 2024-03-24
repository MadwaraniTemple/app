import React from 'react';
import classes from './JyotiKalash.module.css';
import { useTranslation } from "react-i18next";
import MaaMadwaraniImg from '../../assets/JyotiKalash.png';

import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const JyotiKalash = (props) => {

    const { t } = useTranslation();

    return <div className={classes.body} id="JyotiKalash">

        <h1> { t("jyotiKalash.header") } </h1>

        <Row xs={1} md={4} className="g-4">
            <Col>
                <Card>
                    <Card.Img variant="top" src={MaaMadwaraniImg} />
                    <Card.Body>
                        <Card.Title> <h3>{ t("jyotiKalash.ghritShringarJyoti.header") }</h3> </Card.Title>
                        <Card.Title> <h3>{ t("jyotiKalash.ghritShringarJyoti.price") }</h3> </Card.Title>
                        {/* <Card.Text> { t("JyotiKalash.para") } </Card.Text> */}
                    </Card.Body>
                </Card>
            </Col>
            <Col>
                <Card>
                    <Card.Img variant="top" src={MaaMadwaraniImg} />
                    <Card.Body>
                        <Card.Title> <h3>{ t("jyotiKalash.ghritJyoti.header") }</h3> </Card.Title>
                        <Card.Title> <h3>{ t("jyotiKalash.ghritJyoti.price") }</h3> </Card.Title>
                        {/* <Card.Text> { t("JyotiKalash.para") } </Card.Text> */}
                    </Card.Body>
                </Card>
            </Col>
            <Col>
                <Card>
                    <Card.Img variant="top" src={MaaMadwaraniImg} />
                    <Card.Body>
                        <Card.Title> <h3>{ t("jyotiKalash.telShringarJyoti.header") }</h3> </Card.Title>
                        <Card.Title> <h3>{ t("jyotiKalash.telShringarJyoti.price") }</h3> </Card.Title>
                        {/* <Card.Text> { t("JyotiKalash.para") } </Card.Text> */}
                    </Card.Body>
                </Card>
            </Col>
            <Col>
                <Card>
                    <Card.Img variant="top" src={MaaMadwaraniImg} />
                    <Card.Body>
                        <Card.Title> <h3>{ t("jyotiKalash.telJyoti.header") }</h3> </Card.Title>
                        <Card.Title> <h3>{ t("jyotiKalash.telJyoti.price") }</h3> </Card.Title>
                        {/* <Card.Text> { t("JyotiKalash.para") } </Card.Text> */}
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    </div>
        
};

export default JyotiKalash;