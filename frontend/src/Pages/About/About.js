import React from 'react'
import {
  Row,
  Col,
} from 'react-bootstrap'
import './About.css'

import ImageCarousal from '../Carousel/Carousel';
import imageSrc5 from '../../Assets/iitd5.jpg';

function CarousalText() {
  return (
    <div className="aboutcard">
      <div className="aboutheading"> About </div>
      <hr/>
      <p className="aboutcontent" >
        The IIT Delhi <b> Benevolent Fund</b> is an institutional setup to financially
        support the campus workers (hostel shop workers, night mess workers, washerman etc) who are
        not employed under contract. With the campus shut during the unprecendented pandemic, they are stuggling to make their both
        ends meet since the past four months and yet, are left without any reliable and stable means
        of livelihood.
        <br/> <br/>
        These workers, who had helped us sustain in the campus and made our lives easier by providing
        their services for our daily needs- it is, now upon the <b>Student Community</b> to support them,
        when they most need us!
        <br /> <br />
        <i>Let's take a moment and think about what "we can do for our workers" !</i>
      </p>
    </div>
  )
}

function About() {
  return (
    <div id="sc-about">
      <Row style={{ margin: '0px' }}>
        <Col lg={6} md={5} sm={0}></Col>
        <Col lg={6} md={7} sm={12}>
          <section style={{ backgroundColor: 'white', marginTop: '100px'}}>
            <CarousalText />
          </section>
        </Col>
      </Row>
    </div>
  )
}

export default About;