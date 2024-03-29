import React from 'react'
import {
  Row,
  Col,
} from 'react-bootstrap'
import './About.css'
import {BigContributeButton, SmallContributeButton} from '../ContributeButton/ContributeButton';
import { HashLink as Link } from 'react-router-hash-link';

function CarousalText() {
  return (
    <section className="aboutcard">
      <div className="aboutheading"> About </div>
      <p className="aboutcontent" >
        The IIT Delhi <b> Benevolent Fund</b> is an institutional setup to financially support the <b>non-contractual workers</b> around the campus.
          With the campus being shut due to this unprecendented pandemic, they are now stuggling to make their ends meet
          as they are left without any reliable and stable means of income.
          These workers made our lives easier everyday and now we need to make theirs.
          <br /><br />
          Let's take a moment and think about what can <b>we</b> do for <b>our workers</b>! <Link to="/#sc-bulletin">Contribute now</Link>.
          <br />
      </p>
      <div className='youtube-video'>
        <iframe src="https://www.youtube.com/embed/iobyvY_iFDw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
      <div className='contribute-button'>
        <BigContributeButton/>
      </div>
    </section>
  )
}

function About() {
  return (
    <section id="sc-about">
      <Row style={{ margin: '0px' }}>
        <Col lg={6} md={3} sm={0}></Col>
        <Col lg={6} md={9} sm={12}> <CarousalText /> </Col>
      </Row>
    </section>
  )
}

export default About;