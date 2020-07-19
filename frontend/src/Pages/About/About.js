import React from 'react'
import {
  Container,
  Row,
  Col,
} from 'react-bootstrap'
import './About.css'
import ImageCarousal from '../Carousel/Carousel'

<<<<<<< HEAD
function About () {
  return (
    <section className="about">
      <Container>
        <Row>
          <Col>
            <h3>About The Campaign !</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Curabitur scelerisque semper sem, eu condimentum leo luctus eu.
              Phasellus eleifend accumsan purus, nec blandit lectus finibus vitae.
              Vivamus faucibus pharetra venenatis. Vivamus a massa lorem.
              Aenean nec enim id orci porta dictum et pretium mi. 
            </p>
          </Col>
          <Col>
            <ImageCarousal/>
          </Col>
        </Row>    
      </Container>
=======
function CarousalText() {
  return (
    <div className="aboutcard">
      <div className="aboutheading">
        ABOUT
      </div>
      <hr/>
      <p className="aboutcontent" >
        The IIT Delhi <b> Benevolent Fund</b> is an institutional setup to financially 
        support the campus workers (hostel shop workers, night mess workers or washerman etc) who are
        not employed under contract. With the campus shut, they no longer have a means of livelihood.
        These workers help us sustain in the campus by providing services 
        for our daily needs- it is, now upon the <b>student comunity</b> to support them,
        when they most need us! 
      </p>
      <h4>Welcome to this family !!</h4>
    </div>
  )
}

function About () {
  return (
    <section id="sc-about">
      <Row>
        <Col md={6}> <ImageCarousal/> </Col>
        <Col md={6}> <CarousalText/>  </Col>
      </Row>    
>>>>>>> 0526f900e0af1ef3f1b1f2eeb5798ad576e8ee9d
    </section>
  )
}

export default About;