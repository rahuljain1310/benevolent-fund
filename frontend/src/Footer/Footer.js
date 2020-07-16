import React from 'react';
import {
  Container,
  Row,
  Col,
} from 'react-bootstrap';
import FormFeedback from '../Pages/FormFeedback/FormFeedback'
import "./Footer.css"

function Footer () {
  return(
    <footer>
      <hr />
      <p className = "Quoterow">
        <em>
          "Our physical duty is to advance toward freedom: physical mental and sipritual- and help others to do so." 
          <br/> - Swami Vivekanand
        </em>
      </p>
      <Container>
        <Row>
          <Col>
            <h3>Got a Feedback ?</h3>
            <FormFeedback/>
          </Col>
          <Col>
            <h3>Links</h3>
            <ul class="list-unstyled">
              <li> &#8594; <a href="#">Home</a></li>
              <li> &#8594; <a href="#about-section">About</a></li>
              <li> &#8594; <a href="#timeline-section">Education</a></li>
              <li> &#8594; <a href="#projects-section">Projects</a></li>
              <li> &#8594; <a href="#contact-section">Contact</a></li>
            </ul>
          </Col>
          <Col>
            <h3>Have a Questions?</h3>
            <ul class="list-unstyled">
              <li> &#8594; <span>SC-02 Vindhyachal Hostel, IIT Delhi</span> </li>
              <li> &#8594; <span>+91-8770915084</span> </li>
              <li> &#8594; <span>Rahul.Jain.ee117@ee.iitd.ac.in</span> </li>
            </ul>
          </Col>
        </Row>
        <Row>
          <Col>
            <p className = "copyright">
              &copy; {new Date().getFullYear()} BENEVOLENT FUND IITD | All rights reserved | This website is made with &hearts;
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer;