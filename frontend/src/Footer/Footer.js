import React from 'react';
import {
  Container,
  Row,
  Col,
} from 'react-bootstrap';
import FormFeedback from '../Pages/FormFeedback/FormFeedback'
import { HashLink as Link } from 'react-router-hash-link';
import "./Footer.css"

function Footer () {
  return(
    <footer>
      <p className = "Quoterow">
        <em>
          "Our physical duty is to advance toward freedom : physical mental and sipritual and help others to do so." 
          <br/> - Swami Vivekanand
        </em>
      </p>
      <Container>
        <Row>
          <Col md={4} sm={6}>
            <h4>Got a Feedback ?</h4>
            <FormFeedback/>
          </Col>
          <Col md={4} sm={6}>
            <h4>Links</h4>
            <ul class="list-unstyled">
            <li> &#8594; <Link to = "/#sc-about">About</Link></li>
            <li> &#8594; <Link to = "/#sc-beneficiary" >Beneficiaries</Link></li>
            <li> &#8594; <Link to = "/#sc-bulletin">Contributors</Link></li>
            <li> &#8594; <Link to = "/#sc-media" >News</Link></li>
            <li> &#8594; <Link to = "/#sc-comments">Comments</Link></li>
            <li> &#8594; <Link to = "/#sc-testimonials">Testimonies</Link></li>
            </ul>
          </Col>
          <Col md={4}>
            <h4>Have a Question ?</h4>
            <ul class="list-unstyled">
              <li><span>Divyanshu Saxena</span> </li>
              <li><span>8826080933 | cs1160316@iitd.ac.in</span> </li>
              <br/>
              <li><span>Rahul Jain</span> </li>
              <li><span>8770915084 | ee1170476@iitd.ac.in</span> </li>
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