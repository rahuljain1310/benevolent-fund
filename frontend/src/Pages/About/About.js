import React from 'react'
import {
  Container,
  Row,
  Col,
} from 'react-bootstrap'
import './About.css'
import ImageCarousal from '../Carousel/Carousel'

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
    </section>
  )
}

export default About;