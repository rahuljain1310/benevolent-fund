import React from 'react';
import {
  Row,
  Col,
  Navbar
} from 'react-bootstrap';
import iitdLogo from '../Assets/iitdLogo.jpg';
import {SmallContributeButton} from '../Pages/ContributeButton/ContributeButton';
import './header.css';

function Header () {
  return (
  <header>
    <Row>
      <Col md={6}>
        <img src={iitdLogo} alt="IIT-D Logo" id="header-image"/>
        {/* <b>  */}
          <div id="head">IIT DELHI BENEVOLENT FUND</div>
        {/* </b> */}
        {/* <i> */}
          <div id="subhead">
            Helping others is the way we help ourselves!
          </div>
        {/* </i> */}
      </Col>
      <Col md={6}>
        <nav className="color">
          <a style={{textDecoration:'none'}} href="" className="Links">About</a>
          <a style={{textDecoration:'none'}} href="" className="Links">Beneficiaries</a>
          <a style={{textDecoration:'none'}} href="" className="Links">Comments</a>
          <SmallContributeButton/>
        </nav>
      </Col>
    </Row>
  </header>
  )
}

export default Header;
