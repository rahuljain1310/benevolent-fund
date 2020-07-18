import React from 'react'
import {
  Container,
  Row,
  Col,
} from 'react-bootstrap'
import './About.css'
import ImageCarousal from '../Carousel/Carousel'

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
    </section>
  )
}

export default About;