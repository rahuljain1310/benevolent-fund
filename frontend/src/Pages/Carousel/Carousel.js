import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './Carousel.css';
import iitd from '../../Assets/iitd3.jpg';
import rickshaw from '../../Assets/rickshawpuller.jpg';
import iitd4 from '../../Assets/iitd4.jpg';
import nature1 from '../../Assets/nature1.jpg';
import nature2 from '../../Assets/nature2.jpg';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import { Container } from 'react-bootstrap';

function ImageCarousel() {
  return (
    <Container fluid className="carouselContainer">
      <Row >
        <Col md={8} >
          <Carousel >
            <Carousel.Item className="carouselItemClass">
              <img className="carouselmgClass" src={rickshaw} alt="poster" style={{ height: '600px' }} />
              <Carousel.Caption>
                <h2>IIT DELHI</h2>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className="carouselItemClass">
              <img className="carouselImgClass" src={nature1} alt="poster" />
              <Carousel.Caption>
                <h2>Rickshawpuller at IITD</h2>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className="carouselItemClass">
              <img className="carouselImgClass" src={nature2} alt="poster" />
              <Carousel.Caption>
                <h2>IITD Again</h2>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Col>
        {/* <Col md="auto">Variable width content</Col> */}
        <Col md={4} style={{ height: '600px' }} fluid>
          {/* <Card style={{height:'600px'}}>
            <Card.Body>
              <Card.Title className="text-center">Benevolent Fund</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </Card.Text>
              <Card.Link href="#">Card Link</Card.Link>

            </Card.Body>
          </Card> */}
          <div className="aboutcard">
            <div className="aboutheading">ABOUT</div>
            <hr style={{ color: 'orange', width: '80%' }} />
            <p className="aboutcontent" >The IIT Delhi <span style={{ fontWeight: "bold" }}>Benevolent Fund</span> is an institutional setup to financially
                          support the campus workers (hostel shop workers, night mess workers or washerman etc) who are not employed under contract.
                          With the campus shut, they no longer have a means of livelihood. These workers help us sustain in the campus by providing services
                          for our daily needs- it is, now upon the <span style={{ fontWeight: "bold" }}>student comunity</span> to support them, when they most need us!
                      </p>
            <br />
            <h5 >Welcome to this family</h5>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default ImageCarousel;
