import React, {useEffect} from 'react';
import {
  Row,
  Col,
} from 'react-bootstrap';
import iitdLogo from '../Assets/iitdLogo.jpg';
import {SmallContributeButton} from '../Pages/ContributeButton/ContributeButton';
import './header.css';

function Header () {

  useEffect (() => {
    var shiftWindow = function() { window.scrollBy(0, -40) };
    if (window.location.hash) shiftWindow();
    window.addEventListener("hashchange", shiftWindow);
    return () => window.removeEventListener("hashchange", shiftWindow)
  }, [])

  return (
  <header>
    <Row>
      <Col lg={6} md={8} sm={10}>
        <div className='logo-section'>
          <img src={iitdLogo} alt="IIT-D Logo" id="header-image"/>
          <div id="head">IIT DELHI BENEVOLENT FUND</div>
          <div id="subhead">
            Helping others is the way we help ourselves!
          </div>
        </div>
      </Col>
      <Col lg={6} md={4} sm={2}>
        <nav className="color" style={{textAlign: 'right'}}>
          <a className="Links" href = "/#sc-about">About</a>
          <a className="Links" href = "/#sc-bulletin">Contributors</a>
          <a className="Links" href = "/#sc-beneficiary" >Beneficiaries</a>
          <a className="Links" href = "/#sc-media" >News</a>
          <a className="Links" href = "/#sc-testimonials">Testimonies</a>
          <a className="Links" href = "/#sc-comments">Comments</a>
          <SmallContributeButton/>
        </nav>
      </Col>
    </Row>
  </header>
  )
}

export default Header;
