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
        not employed under contract.
       <br/><br/>
        With the campus shut during the unprecendented pandemic, they are stuggling to make their both
        ends meet since the past four months and yet, are left without any reliable and stable means
        of livelihood. 
        <br/><br/>
        These workers, who had helped us sustain in the campus and made our lives easier by providing 
        their services for our daily needs- it is, now upon the <b>Student Community</b> to support them,
        when they most need us!
        <br/> <br/>
      <i>Let's take a moment and think about what "we can do for our workers" !</i>
      </p>
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