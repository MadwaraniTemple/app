import React from 'react';
import classes from './Gallery.module.css';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// Import some existing images as placeholders
import Img1 from '../../assets/Img_2.jpeg';
import Img2 from '../../assets/Img_3.jpeg';
import Img3 from '../../assets/Img_4.jpeg';
import Lala from '../../assets/LalaStudio.jpg';

const members = [
  { id: 1, name: 'Suresh Sharma', designation: 'President', photo: Img1 },
  { id: 2, name: 'Anita Verma', designation: 'Secretary', photo: Img2 },
  { id: 3, name: 'Ramesh Patel', designation: 'Treasurer', photo: Img3 },
  { id: 4, name: 'Sunita Rao', designation: 'Member', photo: Lala },
];

const Gallery = () => {
  return (
    <div className={classes.body} id="Gallery">
      <h1 className={classes.header}>Association Members</h1>
      <p className={classes.subHeader}>Photos, names and designations of association members</p>

      <Row xs={1} sm={2} md={3} lg={4} className="g-4">
        {members.map((m) => (
          <Col key={m.id}>
            <Card className={classes.card}>
              <div className={classes.imgWrap}>
                <Card.Img variant="top" src={m.photo} className={classes.img} />
              </div>
              <Card.Body>
                <Card.Title className={classes.name}>{m.name}</Card.Title>
                <Card.Text className={classes.designation}>{m.designation}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Gallery;
