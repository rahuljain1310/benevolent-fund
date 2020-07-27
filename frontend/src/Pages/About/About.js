import React from 'react'
import {
  Row,
  Col,
} from 'react-bootstrap'
import './About.css'
import ImageCarousal from '../Carousel/Carousel'

function CarousalText() {
  return (
    <div className="aboutcard">
      <div className="aboutheading">
        About
      </div>
      <hr/>
      <p className="aboutcontent" >
        The IIT Delhi <b> Benevolent Fund</b> is an arrangement initiated by the institution to financially 
        support workers around the campus - in our hostel shops, in our night mess and laundry services- who are
        not employed under contract.
       <br/><br/>
        With the campus being shut during this unprecendented pandemic, they are stuggling to make their ends meet 
        since they are left without any reliable and stable means of income. 
        <br/><br/>
        These workers made our lives easier everyday and now we need to make theirs. 
        It is upon us,the <b>Student Community</b> to support them now,
        when they need us the most!
        <br/> <br/>
      <i>Let's take a moment and think about what can <b>we</b> do for <b>our workers</b> ! </i>
      </p>
    </div>
  )
}

function About () {
  return (
    <section id="sc-about">
      <Row>
        <Col md={6} className='iitd-carousal'> <ImageCarousal/> </Col>
        <Col md={6}> <CarousalText/>  </Col>
      </Row>    
    </section>
  )
}

export default About;