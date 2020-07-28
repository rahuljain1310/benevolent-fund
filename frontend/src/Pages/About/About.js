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
    <section className="aboutcard">
      <div className="aboutheading"> About </div>
      <hr />
      <p className="aboutcontent" >
        The IIT Delhi <b> Benevolent Fund</b> is an arrangement initiated by the institution to financially
          support workers around the campus - in our hostel shops, in our night mess and laundry services- who are
          not employed under contract.
          With the campus being shut during this unprecendented pandemic, they are stuggling to make their ends meet
          since they are left without any reliable and stable means of income.
          <br /><br />
          These workers made our lives easier everyday and now we need to make theirs.
          It is upon us,the <b>Student Community</b> to support them now,
          when they need us the most!
          <br /> <br />
        <i>Let's take a moment and think about what can <b>we</b> do for <b>our workers</b> ! </i>
      </p>
    </section>
  )
}

function About() {
  return (
    <div id="sc-about">
      <Row style={{ margin: '0px' }}>
        <Col lg={7} md={3} sm={0}></Col>
        <Col lg={5} md={9} sm={12}> <CarousalText /> </Col>
      </Row>
    </div>
  )
}

export default About;