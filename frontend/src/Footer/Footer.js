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
<<<<<<< HEAD
          <Col>
            <h4>Got a Feedback ?</h4>
            <FormFeedback/>
          </Col>
          <Col>
=======
          <Col md={4} sm={6}>
            <h4>Got a Feedback ?</h4>
            <FormFeedback/>
          </Col>
          <Col md={4} sm={6}>
>>>>>>> 0526f900e0af1ef3f1b1f2eeb5798ad576e8ee9d
            <h4>Links</h4>
            <ul class="list-unstyled">
              <li> &#8594; <a href="#">Home</a></li>
              <li> &#8594; <a href="#about-section">About</a></li>
              <li> &#8594; <a href="#timeline-section">Education</a></li>
              <li> &#8594; <a href="#projects-section">Projects</a></li>
              <li> &#8594; <a href="#contact-section">Contact</a></li>
            </ul>
          </Col>
<<<<<<< HEAD
          <Col>
=======
          <Col md={4}>
>>>>>>> 0526f900e0af1ef3f1b1f2eeb5798ad576e8ee9d
            <h4>Have a Questions?</h4>
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